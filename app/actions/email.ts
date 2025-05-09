"use server"

import { Resend } from "resend"
import ProgressUpdateMay from "../components/email-templates/progress-update-may"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send a test email to a specified address
 */
export async function sendTestEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      to: email,
      subject: "[TEST] Rallie Tennis - May Progress Update",
      html: ProgressUpdateMay({ unsubscribeUrl: "https://rallie.tennis/unsubscribe" }),
    })

    if (error) {
      console.error("Error sending test email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Exception sending test email:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Send the update email to all subscribers
 */
export async function sendUpdateToSubscribers() {
  try {
    // Get all subscribers from Redis
    const { redis } = await import("../lib/redis")
    const subscribers = await redis.smembers("waitlist_emails")

    if (!subscribers || subscribers.length === 0) {
      return { success: false, error: "No subscribers found" }
    }

    // Send emails in batches to avoid rate limits
    const batchSize = 50
    const results = []

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)

      // Process each email in the batch
      for (const email of batch) {
        try {
          const unsubscribeUrl = `https://rallie.tennis/unsubscribe?email=${encodeURIComponent(email)}`

          const { data, error } = await resend.emails.send({
            from: "Rallie Tennis <hello@updates.rallie.tennis>",
            to: email,
            subject: "Rallie Tennis - May Progress Update",
            html: ProgressUpdateMay({ unsubscribeUrl }),
          })

          if (error) {
            console.error(`Error sending to ${email}:`, error)
            results.push({ email, success: false, error: error.message })
          } else {
            results.push({ email, success: true, messageId: data?.id })
          }
        } catch (emailError) {
          console.error(`Exception sending to ${email}:`, emailError)
          results.push({ email, success: false, error: "An unexpected error occurred" })
        }
      }

      // Add a small delay between batches to avoid rate limits
      if (i + batchSize < subscribers.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    const successCount = results.filter((r) => r.success).length
    return {
      success: true,
      totalSent: subscribers.length,
      successCount,
      failureCount: subscribers.length - successCount,
    }
  } catch (error) {
    console.error("Error sending update to subscribers:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
