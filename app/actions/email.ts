"use server"

import { Resend } from "resend"
import ProgressUpdateMay from "../components/email-templates/progress-update-may"
import WinnerNotification from "../components/email-templates/winner-notification"
import ProgressUpdateJune from "../components/email-templates/progress-update-june"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send a test email to a specified address
 */
export async function sendTestEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      replyTo: "hello@rallie.tennis",
      to: email,
      subject: "[TEST] Rallie Tennis - We Have a Winner for the Draw!",
      html: ProgressUpdateMay({ unsubscribeUrl: "https://rallie.tennis/unsubscribe", isTest: true }),
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

    console.log(`Found ${subscribers.length} subscribers to email`)

    // Send emails in batches to avoid rate limits
    const batchSize = 10 // Reduced batch size
    const results = []
    const timestamp = Date.now()
    const allErrors = []

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(subscribers.length / batchSize)}, with ${batch.length} emails`,
      )

      // Process each email in the batch
      for (const email of batch) {
        try {
          console.log(`Attempting to send to: ${email}`)
          const unsubscribeUrl = `https://rallie.tennis/unsubscribe?email=${encodeURIComponent(email)}`

          const { data, error } = await resend.emails.send({
            from: "Rallie Tennis <hello@updates.rallie.tennis>",
            replyTo: "hello@rallie.tennis",
            to: email,
            subject: "Rallie Tennis - We Have a Winner for the Draw!",
            html: ProgressUpdateMay({ unsubscribeUrl, isTest: false }),
          })

          const result = {
            email,
            timestamp,
            success: !error,
            messageId: data?.id || null,
            error: error ? error.message : null,
            campaign: "may-update",
          }

          // Store the result in Redis
          await redis.hset(`email:${timestamp}:${email}`, result)
          // Add to the list of sent emails
          await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })

          if (error) {
            console.error(`Error sending to ${email}:`, error)
            allErrors.push({ email, error: error.message })
            results.push({ email, success: false, error: error.message })
          } else {
            console.log(`Successfully sent to ${email}`)
            results.push({ email, success: true, messageId: data?.id })
          }
        } catch (emailError) {
          console.error(`Exception sending to ${email}:`, emailError)
          allErrors.push({ email, error: emailError instanceof Error ? emailError.message : "Unknown error" })

          const result = {
            email,
            timestamp,
            success: false,
            messageId: null,
            error: emailError instanceof Error ? emailError.message : "Unknown error",
            campaign: "may-update",
          }

          // Store the result in Redis
          await redis.hset(`email:${timestamp}:${email}`, result)
          // Add to the list of sent emails
          await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })

          results.push({ email, success: false, error: "An unexpected error occurred" })
        }

        // Add a small delay between individual emails to avoid rate limits
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      // Add a delay between batches to avoid rate limits
      if (i + batchSize < subscribers.length) {
        console.log("Pausing between batches...")
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }

    const successCount = results.filter((r) => r.success).length
    console.log(`Email sending complete. Success: ${successCount}, Failed: ${results.length - successCount}`)

    if (allErrors.length > 0) {
      console.log("Errors encountered:", allErrors)
    }

    return {
      success: true,
      totalSent: subscribers.length,
      successCount,
      failureCount: subscribers.length - successCount,
      timestamp,
      errors: allErrors.length > 0 ? allErrors : undefined,
    }
  } catch (error) {
    console.error("Error sending update to subscribers:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Send the June update email to all subscribers
 */
export async function sendJuneUpdateToSubscribers() {
  try {
    // Get all subscribers from Redis
    const { redis } = await import("../lib/redis")
    const subscribers = await redis.smembers("waitlist_emails")

    if (!subscribers || subscribers.length === 0) {
      return { success: false, error: "No subscribers found" }
    }

    console.log(`Found ${subscribers.length} subscribers to email`)

    // Send emails in batches to avoid rate limits
    const batchSize = 10
    const results = []
    const timestamp = Date.now()
    const allErrors = []

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(subscribers.length / batchSize)}, with ${batch.length} emails`,
      )

      // Process each email in the batch
      for (const email of batch) {
        try {
          console.log(`Attempting to send June update to: ${email}`)
          const unsubscribeUrl = `https://rallie.tennis/unsubscribe?email=${encodeURIComponent(email)}`

          const { data, error } = await resend.emails.send({
            from: "Rallie Tennis <hello@updates.rallie.tennis>",
            replyTo: "hello@rallie.tennis",
            to: email,
            subject: "Rallie Tennis - Major Milestones & First Field Test Done!",
            html: ProgressUpdateJune({ unsubscribeUrl, isTest: false }),
          })

          const result = {
            email,
            timestamp,
            success: !error,
            messageId: data?.id || null,
            error: error ? error.message : null,
            campaign: "june-update",
          }

          // Store the result in Redis
          await redis.hset(`email:${timestamp}:${email}`, result)
          // Add to the list of sent emails
          await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })

          if (error) {
            console.error(`Error sending to ${email}:`, error)
            allErrors.push({ email, error: error.message })
            results.push({ email, success: false, error: error.message })
          } else {
            console.log(`Successfully sent to ${email}`)
            results.push({ email, success: true, messageId: data?.id })
          }
        } catch (emailError) {
          console.error(`Exception sending to ${email}:`, emailError)
          allErrors.push({ email, error: emailError instanceof Error ? emailError.message : "Unknown error" })

          const result = {
            email,
            timestamp,
            success: false,
            messageId: null,
            error: emailError instanceof Error ? emailError.message : "Unknown error",
            campaign: "june-update",
          }

          // Store the result in Redis
          await redis.hset(`email:${timestamp}:${email}`, result)
          // Add to the list of sent emails
          await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })

          results.push({ email, success: false, error: "An unexpected error occurred" })
        }

        // Add a small delay between individual emails to avoid rate limits
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      // Add a delay between batches to avoid rate limits
      if (i + batchSize < subscribers.length) {
        console.log("Pausing between batches...")
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }

    const successCount = results.filter((r) => r.success).length
    console.log(`June email sending complete. Success: ${successCount}, Failed: ${results.length - successCount}`)

    if (allErrors.length > 0) {
      console.log("Errors encountered:", allErrors)
    }

    return {
      success: true,
      totalSent: subscribers.length,
      successCount,
      failureCount: subscribers.length - successCount,
      timestamp,
      errors: allErrors.length > 0 ? allErrors : undefined,
    }
  } catch (error) {
    console.error("Error sending June update to subscribers:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Send a test June update email
 */
export async function sendTestJuneEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      replyTo: "hello@rallie.tennis",
      to: email,
      subject: "[TEST] Rallie Tennis - Major Milestones & First Field Test Results!",
      html: ProgressUpdateJune({ unsubscribeUrl: "https://rallie.tennis/unsubscribe", isTest: true }),
    })

    if (error) {
      console.error("Error sending test June email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Exception sending test June email:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Send a winner notification email
 */
export async function sendWinnerEmail(testEmail?: string) {
  try {
    const recipient = testEmail || "delice.wang@hotmail.com"
    const isTest = !!testEmail
    const timestamp = Date.now()

    const { data, error } = await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      replyTo: "hello@rallie.tennis", // Add reply-to address
      to: recipient,
      subject: isTest
        ? "[TEST] Congratulations! You've Won the Rallie Tennis Draw"
        : "Congratulations! You've Won the Rallie Tennis Draw",
      html: WinnerNotification({ winnerEmail: "delice.wang@hotmail.com", isTest }),
    })

    if (!isTest) {
      // Store the result in Redis
      const { redis } = await import("../lib/redis")
      const result = {
        email: recipient,
        timestamp,
        success: !error,
        messageId: data?.id || null,
        error: error ? error.message : null,
        campaign: "winner-notification",
      }

      await redis.hset(`email:${timestamp}:${recipient}`, result)
      await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${recipient}` })
    }

    if (error) {
      console.error("Error sending winner email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Exception sending winner email:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Get the list of sent emails with their status
 */
export async function getSentEmails(limit = 100) {
  try {
    const { redis } = await import("../lib/redis")

    // Get the most recent sent emails using zrange with REV flag
    // Upstash Redis uses a different syntax for zrevrange
    const emailKeys = await redis.zrange("sent_emails", 0, limit - 1, { rev: true })

    if (!emailKeys || emailKeys.length === 0) {
      return { success: true, emails: [] }
    }

    const emails = []

    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (emailData) {
        emails.push({
          ...emailData,
          timestamp: Number.parseInt(String(emailData.timestamp || "0")),
        })
      }
    }

    return { success: true, emails }
  } catch (error) {
    console.error("Error getting sent emails:", error)
    return { success: false, error: "Failed to retrieve sent emails" }
  }
}

/**
 * Get all subscribers from Redis
 */
export async function getSubscribers() {
  try {
    const { redis } = await import("../lib/redis")
    const subscribers = await redis.smembers("waitlist_emails")
    return { success: true, subscribers }
  } catch (error) {
    console.error("Error getting subscribers:", error)
    return { success: false, error: "Failed to retrieve subscribers" }
  }
}

/**
 * Retry sending emails to failed recipients
 */
export async function retryFailedEmails(emails: string[]) {
  try {
    if (!emails || emails.length === 0) {
      return { success: false, error: "No emails provided" }
    }

    const timestamp = Date.now()
    const results = []
    const { redis } = await import("../lib/redis")

    for (const email of emails) {
      try {
        console.log(`Retrying email to: ${email}`)
        const unsubscribeUrl = `https://rallie.tennis/unsubscribe?email=${encodeURIComponent(email)}`

        const { data, error } = await resend.emails.send({
          from: "Rallie Tennis <hello@updates.rallie.tennis>",
          replyTo: "hello@rallie.tennis",
          to: email,
          subject: "Rallie Tennis - We Have a Winner for the Draw!",
          html: ProgressUpdateMay({ unsubscribeUrl, isTest: false }),
        })

        const result = {
          email,
          timestamp,
          success: !error,
          messageId: data?.id || null,
          error: error ? error.message : null,
          campaign: "may-update-retry",
        }

        // Store the result in Redis
        await redis.hset(`email:${timestamp}:${email}`, result)
        // Add to the list of sent emails
        await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })

        if (error) {
          console.error(`Error sending to ${email}:`, error)
          results.push({ email, success: false, error: error.message })
        } else {
          console.log(`Successfully sent to ${email}`)
          results.push({ email, success: true, messageId: data?.id })
        }

        // Add a small delay between emails
        await new Promise((resolve) => setTimeout(resolve, 300))
      } catch (emailError) {
        console.error(`Exception sending to ${email}:`, emailError)
        results.push({ email, success: false, error: "An unexpected error occurred" })
      }
    }

    const successCount = results.filter((r) => r.success).length
    return {
      success: true,
      totalSent: emails.length,
      successCount,
      failureCount: emails.length - successCount,
    }
  } catch (error) {
    console.error("Error retrying failed emails:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
