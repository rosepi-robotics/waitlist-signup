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

    // Store email in Upstash Redis waitlist
    await redis.sadd("waitlist_emails", email.toString())

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
