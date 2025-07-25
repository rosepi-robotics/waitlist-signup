"use server"

import { z } from "zod"
import { Resend } from "resend"
import EmailTemplate from "../components/email-template"
import { redis } from "../lib/redis"

const schema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const email = formData.get("email")

    if (!email) {
      return { success: false, message: "Email is required" }
    }

    const result = schema.safeParse({ email })

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message }
    }

    // Store email in the main set for backward compatibility
    await redis.sadd("waitlist_emails", email.toString())

    // Store email with timestamp in a hash for detailed tracking
    const timestamp = Date.now()
    await redis.hset(`waitlist_signup:${email.toString()}`, {
      email: email.toString(),
      timestamp: timestamp,
      signupDate: new Date(timestamp).toISOString(),
    })

    // Add to sorted set for easy chronological retrieval
    await redis.zadd("waitlist_signups_by_time", {
      score: timestamp,
      member: email.toString(),
    })

    // Send welcome email using Resend with your verified subdomain
    try {
      const { data, error } = await resend.emails.send({
        from: "Mavio AI <hello@updates.mavio.ai>", // Using your verified subdomain
        to: email.toString(),
        subject: "Welcome to the Mavio AI Waitlist!",
        html: EmailTemplate({ email: email.toString() }),
      })

      if (error) {
        console.error("Error sending email:", error)
        // Continue execution even if email sending fails
      }
    } catch (emailError) {
      console.error("Failed to send email:", emailError)
      // Continue execution even if email sending fails
    }

    const count = await getWaitlistCount()

    return {
      success: true,
      message: "You have been added to the waitlist! Check your email for confirmation.",
      count,
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function getWaitlistCount() {
  try {
    const count = await redis.scard("waitlist_emails")
    return count
  } catch (error) {
    return 0
  }
}

// New function to add email to waitlist (used by survey)
export async function addToWaitlist(email: string) {
  try {
    await redis.sadd("waitlist_emails", email)
    return true
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return false
  }
}

// Get waitlist signups with timestamps
export async function getWaitlistSignupsWithTimestamps(limit = 100) {
  try {
    // Get emails sorted by signup time (most recent first)
    const emails = await redis.zrange("waitlist_signups_by_time", 0, limit - 1, { rev: true })

    if (!emails || emails.length === 0) {
      return { success: true, signups: [] }
    }

    const signups = []

    for (const email of emails) {
      const signupData = await redis.hgetall(`waitlist_signup:${email}`)
      if (signupData) {
        signups.push({
          email: signupData.email,
          timestamp: Number.parseInt(signupData.timestamp),
          signupDate: signupData.signupDate,
          formattedDate: new Date(Number.parseInt(signupData.timestamp)).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        })
      }
    }

    return { success: true, signups }
  } catch (error) {
    console.error("Error getting waitlist signups with timestamps:", error)
    return { success: false, error: "Failed to retrieve signup data" }
  }
}

// Get waitlist statistics
export async function getWaitlistStats() {
  try {
    const totalCount = await redis.scard("waitlist_emails")
    const recentSignups = await redis.zrange("waitlist_signups_by_time", -7, -1, { rev: true })

    // Get signups from last 24 hours
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
    const last24Hours = await redis.zrangebyscore("waitlist_signups_by_time", oneDayAgo, Date.now())

    // Get signups from last 7 days
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
    const last7Days = await redis.zrangebyscore("waitlist_signups_by_time", sevenDaysAgo, Date.now())

    return {
      success: true,
      stats: {
        totalSignups: totalCount,
        last24Hours: last24Hours.length,
        last7Days: last7Days.length,
        recentSignups: recentSignups.length,
      },
    }
  } catch (error) {
    console.error("Error getting waitlist stats:", error)
    return { success: false, error: "Failed to retrieve stats" }
  }
}
