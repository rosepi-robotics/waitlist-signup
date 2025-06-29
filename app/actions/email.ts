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
 * Send the June update email to all subscribers with improved error handling
 */
export async function sendJuneUpdateToSubscribers() {
  const startTime = Date.now()
  console.log(`🚀 Starting June update email campaign at ${new Date().toISOString()}`)

  try {
    // Get all subscribers from Redis
    const { redis } = await import("../lib/redis")
    const subscribers = await redis.smembers("waitlist_emails")

    if (!subscribers || subscribers.length === 0) {
      console.error("❌ No subscribers found in Redis")
      return { success: false, error: "No subscribers found" }
    }

    console.log(`📊 Found ${subscribers.length} total subscribers`)
    console.log(`📋 Subscriber list: ${subscribers.slice(0, 5).join(", ")}${subscribers.length > 5 ? "..." : ""}`)

    // Check which subscribers already received June update
    const emailKeys = await redis.zrange("sent_emails", 0, 1000, { rev: true })
    const alreadySentEmails = new Set()

    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (
        emailData &&
        (emailData.campaign === "june-update" || emailData.campaign === "june-update-retry") &&
        emailData.success === "true"
      ) {
        alreadySentEmails.add(emailData.email)
      }
    }

    const subscribersToSend = subscribers.filter((email) => !alreadySentEmails.has(email))
    console.log(`📧 ${alreadySentEmails.size} subscribers already received June update`)
    console.log(`🎯 Sending to ${subscribersToSend.length} remaining subscribers`)

    if (subscribersToSend.length === 0) {
      console.log("✅ All subscribers have already received the June update")
      return { success: true, message: "All subscribers have already received the June update" }
    }

    // Send emails in smaller batches with better error handling
    const batchSize = 5 // Smaller batches for better reliability
    const results = []
    const timestamp = Date.now()
    const allErrors = []
    let totalProcessed = 0

    console.log(`📦 Processing in batches of ${batchSize}`)

    for (let i = 0; i < subscribersToSend.length; i += batchSize) {
      const batch = subscribersToSend.slice(i, i + batchSize)
      const batchNumber = Math.floor(i / batchSize) + 1
      const totalBatches = Math.ceil(subscribersToSend.length / batchSize)

      console.log(
        `📦 Processing batch ${batchNumber}/${totalBatches} with ${batch.length} emails: [${batch.join(", ")}]`,
      )

      // Process each email in the batch with individual error handling
      for (const email of batch) {
        try {
          console.log(`📤 Sending June update to: ${email}`)
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

          // Store the result in Redis immediately
          try {
            await redis.hset(`email:${timestamp}:${email}`, result)
            await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })
          } catch (redisError) {
            console.error(`❌ Redis error for ${email}:`, redisError)
          }

          if (error) {
            console.error(`❌ Resend error for ${email}:`, error)
            allErrors.push({ email, error: error.message })
            results.push({ email, success: false, error: error.message })
          } else {
            console.log(`✅ Successfully sent June update to ${email} (Message ID: ${data?.id})`)
            results.push({ email, success: true, messageId: data?.id })
          }

          totalProcessed++
        } catch (emailError) {
          const errorMessage = emailError instanceof Error ? emailError.message : "Unknown error"
          console.error(`💥 Exception sending to ${email}:`, emailError)
          allErrors.push({ email, error: errorMessage })

          // Still store the failed attempt
          const result = {
            email,
            timestamp,
            success: false,
            messageId: null,
            error: errorMessage,
            campaign: "june-update",
          }

          try {
            await redis.hset(`email:${timestamp}:${email}`, result)
            await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })
          } catch (redisError) {
            console.error(`❌ Redis error storing failed attempt for ${email}:`, redisError)
          }

          results.push({ email, success: false, error: errorMessage })
          totalProcessed++
        }

        // Small delay between individual emails
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      // Progress update
      const successCount = results.filter((r) => r.success).length
      const failureCount = results.length - successCount
      console.log(
        `📊 Batch ${batchNumber} complete. Total progress: ${totalProcessed}/${subscribersToSend.length} (${successCount} success, ${failureCount} failed)`,
      )

      // Longer delay between batches
      if (i + batchSize < subscribersToSend.length) {
        console.log("⏳ Pausing between batches...")
        await new Promise((resolve) => setTimeout(resolve, 3000))
      }
    }

    const finalSuccessCount = results.filter((r) => r.success).length
    const finalFailureCount = results.length - finalSuccessCount
    const duration = Date.now() - startTime

    console.log(`🎉 June email campaign complete!`)
    console.log(`📊 Final Results:`)
    console.log(`   - Total processed: ${totalProcessed}/${subscribersToSend.length}`)
    console.log(`   - Successful: ${finalSuccessCount}`)
    console.log(`   - Failed: ${finalFailureCount}`)
    console.log(`   - Duration: ${Math.round(duration / 1000)}s`)

    if (allErrors.length > 0) {
      console.log("❌ Errors encountered:")
      allErrors.forEach(({ email, error }) => {
        console.log(`   - ${email}: ${error}`)
      })
    }

    return {
      success: true,
      totalSent: subscribersToSend.length,
      successCount: finalSuccessCount,
      failureCount: finalFailureCount,
      timestamp,
      duration,
      errors: allErrors.length > 0 ? allErrors : undefined,
    }
  } catch (error) {
    const duration = Date.now() - startTime
    console.error(`💥 Critical error in June update campaign after ${Math.round(duration / 1000)}s:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
      duration,
    }
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
 * Get emails by specific campaign
 */
export async function getEmailsByCampaign(campaign: string, limit = 500) {
  try {
    const { redis } = await import("../lib/redis")

    // Get all sent emails
    const emailKeys = await redis.zrange("sent_emails", 0, limit - 1, { rev: true })

    if (!emailKeys || emailKeys.length === 0) {
      return { success: true, emails: [] }
    }

    const emails = []

    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (emailData && emailData.campaign === campaign) {
        emails.push({
          ...emailData,
          timestamp: Number.parseInt(String(emailData.timestamp || "0")),
        })
      }
    }

    return { success: true, emails }
  } catch (error) {
    console.error("Error getting emails by campaign:", error)
    return { success: false, error: "Failed to retrieve campaign emails" }
  }
}

/**
 * Get campaign statistics
 */
export async function getCampaignStats() {
  try {
    const { redis } = await import("../lib/redis")
    const subscribers = await redis.smembers("waitlist_emails")
    const totalSubscribers = subscribers.length

    // Get all sent emails
    const emailKeys = await redis.zrange("sent_emails", 0, 1000, { rev: true })

    const campaignStats: Record<string, { sent: number; successful: number; failed: number; emails: string[] }> = {}

    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (emailData && emailData.campaign) {
        const campaign = emailData.campaign
        if (!campaignStats[campaign]) {
          campaignStats[campaign] = { sent: 0, successful: 0, failed: 0, emails: [] }
        }

        campaignStats[campaign].sent++
        campaignStats[campaign].emails.push(emailData.email)

        if (emailData.success === "true" || emailData.success === true) {
          campaignStats[campaign].successful++
        } else {
          campaignStats[campaign].failed++
        }
      }
    }

    // Calculate who didn't receive each campaign
    const result: Record<string, any> = {}
    for (const [campaign, stats] of Object.entries(campaignStats)) {
      const sentEmails = new Set(stats.emails)
      const notSent = subscribers.filter((email) => !sentEmails.has(email))

      result[campaign] = {
        ...stats,
        notSent: notSent.length,
        notSentEmails: notSent,
        totalSubscribers,
      }
    }

    return { success: true, campaigns: result, totalSubscribers }
  } catch (error) {
    console.error("Error getting campaign stats:", error)
    return { success: false, error: "Failed to retrieve campaign statistics" }
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
          subject: "Rallie Tennis - Major Milestones & First Field Test Done!",
          html: ProgressUpdateJune({ unsubscribeUrl, isTest: false }),
        })

        const result = {
          email,
          timestamp,
          success: !error,
          messageId: data?.id || null,
          error: error ? error.message : null,
          campaign: "june-update-retry",
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

/**
 * Retry sending June update to specific emails with comprehensive logging
 */
export async function retryJuneUpdateEmails(emails: string[]) {
  const startTime = Date.now()
  console.log(`🔄 Starting June update retry for ${emails.length} emails at ${new Date().toISOString()}`)

  try {
    if (!emails || emails.length === 0) {
      return { success: false, error: "No emails provided" }
    }

    const timestamp = Date.now()
    const results = []
    const { redis } = await import("../lib/redis")

    console.log(`📋 Retrying June update for: ${emails.join(", ")}`)

    for (let i = 0; i < emails.length; i++) {
      const email = emails[i]
      try {
        console.log(`📤 [${i + 1}/${emails.length}] Retrying June update to: ${email}`)
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
          campaign: "june-update-retry",
        }

        // Store the result in Redis
        await redis.hset(`email:${timestamp}:${email}`, result)
        // Add to the list of sent emails
        await redis.zadd("sent_emails", { score: timestamp, member: `${timestamp}:${email}` })

        if (error) {
          console.error(`❌ Error sending June update to ${email}:`, error)
          results.push({ email, success: false, error: error.message })
        } else {
          console.log(`✅ Successfully sent June update to ${email} (Message ID: ${data?.id})`)
          results.push({ email, success: true, messageId: data?.id })
        }

        // Add a delay between emails
        await new Promise((resolve) => setTimeout(resolve, 500))
      } catch (emailError) {
        const errorMessage = emailError instanceof Error ? emailError.message : "Unknown error"
        console.error(`💥 Exception sending June update to ${email}:`, emailError)
        results.push({ email, success: false, error: errorMessage })
      }
    }

    const successCount = results.filter((r) => r.success).length
    const duration = Date.now() - startTime

    console.log(`🎉 June update retry complete!`)
    console.log(`📊 Results: ${successCount}/${emails.length} successful in ${Math.round(duration / 1000)}s`)

    return {
      success: true,
      totalSent: emails.length,
      successCount,
      failureCount: emails.length - successCount,
      duration,
    }
  } catch (error) {
    const duration = Date.now() - startTime
    console.error(`💥 Error retrying June update emails after ${Math.round(duration / 1000)}s:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
      duration,
    }
  }
}
