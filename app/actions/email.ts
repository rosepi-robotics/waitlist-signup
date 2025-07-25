"use server"

import { Resend } from "resend"
import WinnerNotification from "../components/email-templates/winner-notification"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send a winner notification email
 */
export async function sendWinnerEmail(testEmail?: string) {
  try {
    const recipient = testEmail || "delice.wang@hotmail.com"
    const isTest = !!testEmail
    const timestamp = Date.now()

    const { data, error } = await resend.emails.send({
      from: "Mavio <hello@updates.mavio.ai>",
      replyTo: "hello@mavio.ai", 
      to: recipient,
      subject: isTest
        ? "[TEST] Congratulations! You've Won the Mavio Tennis Draw"
        : "Congratulations! You've Won the Mavio Tennis Draw",
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
    const emailKeys = await redis.zrange("sent_emails", 0, limit - 1, { rev: true })

    const emails = []
    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (emailData) {
        emails.push({
          ...emailData,
          success: emailData.success === "true" || emailData.success === true,
          timestamp: parseInt(emailData.timestamp as string) || 0,
        })
      }
    }

    return { success: true, emails }
  } catch (error) {
    console.error("Error getting sent emails:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Get emails by specific campaign
 */
export async function getEmailsByCampaign(campaign: string, limit = 500) {
  try {
    const { redis } = await import("../lib/redis")
    const emailKeys = await redis.zrange("sent_emails", 0, limit - 1, { rev: true })

    const campaignEmails = []
    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (emailData && emailData.campaign === campaign) {
        campaignEmails.push({
          ...emailData,
          success: emailData.success === "true" || emailData.success === true,
          timestamp: parseInt(emailData.timestamp as string) || 0,
        })
      }
    }

    return { success: true, emails: campaignEmails }
  } catch (error) {
    console.error(`Error getting emails for campaign ${campaign}:`, error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Campaign stats interface
 */
interface CampaignData {
  total: number
  success: number
  failed: number
  uniqueRecipients: Set<string>
}

/**
 * Stats object interface
 */
interface EmailStats {
  totalEmails: number
  campaigns: { [key: string]: CampaignData }
  uniqueRecipients: Set<string>
}

/**
 * Result stats interface for JSON serialization
 */
interface EmailStatsResult {
  totalEmails: number
  uniqueRecipients: number
  campaigns: { [key: string]: {
    total: number
    success: number
    failed: number
    uniqueRecipients: number
  }}
}

/**
 * Get campaign statistics
 */
export async function getCampaignStats() {
  try {
    const { redis } = await import("../lib/redis")
    
    // Get all emails
    const emailKeys = await redis.zrange("sent_emails", 0, 1000, { rev: true })
    
    // Initialize stats
    const stats: EmailStats = {
      totalEmails: 0,
      campaigns: {},
      uniqueRecipients: new Set(),
    }
    
    // Process each email
    for (const key of emailKeys) {
      const emailData = await redis.hgetall(`email:${key}`)
      if (emailData) {
        stats.totalEmails++
        stats.uniqueRecipients.add(emailData.email)
        
        // Initialize campaign if not exists
        const campaign = emailData.campaign || "unknown"
        if (!stats.campaigns[campaign]) {
          stats.campaigns[campaign] = {
            total: 0,
            success: 0,
            failed: 0,
            uniqueRecipients: new Set(),
          }
        }
        
        // Update campaign stats
        stats.campaigns[campaign].total++
        stats.campaigns[campaign].uniqueRecipients.add(emailData.email)
        
        if (emailData.success === "true" || emailData.success === true) {
          stats.campaigns[campaign].success++
        } else {
          stats.campaigns[campaign].failed++
        }
      }
    }
    
    // Convert sets to counts for JSON serialization
    const result: EmailStatsResult = {
      totalEmails: stats.totalEmails,
      uniqueRecipients: stats.uniqueRecipients.size,
      campaigns: {},
    }
    
    // Convert campaign stats
    for (const [campaign, data] of Object.entries(stats.campaigns)) {
      result.campaigns[campaign] = {
        total: data.total,
        success: data.success,
        failed: data.failed,
        uniqueRecipients: data.uniqueRecipients.size,
      }
    }
    
    return { success: true, stats: result }
  } catch (error) {
    console.error("Error getting campaign stats:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

/**
 * Get all subscribers from Redis
 */
export async function getSubscribers() {
  try {
    const { redis } = await import("../lib/redis")
    const subscribers = await redis.smembers("waitlist_emails")
    return { success: true, subscribers, count: subscribers.length }
  } catch (error) {
    console.error("Error getting subscribers:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
