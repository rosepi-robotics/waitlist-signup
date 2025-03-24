"use server"

import { z } from "zod"
import { Resend } from "resend"
import { redis } from "../lib/redis"
import { headers } from "next/headers"
import { nanoid } from "nanoid"

// Update the schema to include referral code field
const surveySchema = z
  .object({
    playFrequency: z.string().min(1, "Please select how often you play"),
    skillLevel: z.string().min(1, "Please select your skill level"),
    gender: z.string().min(1, "Please select your gender"),
    ageGroup: z.string().min(1, "Please select your age group"),
    playingExperience: z.string().min(1, "Please select how long you've been playing"),
    learningPainPoint: z.string().min(3, "Please share your experience"),
    usedBallMachine: z.string().min(1, "Please select an option"),

    // Fields for users who have used ball machines
    ballMachineFrequency: z.string().optional(),
    ballMachineOwnership: z.string().optional(),
    ballMachineBrand: z.string().optional(),
    ballMachineImprovement: z.string().optional(),

    // Fields for users who haven't used ball machines
    heardOfBallMachine: z.string().optional(),
    reasonForNotTrying: z.string().optional(),
    expectedCost: z.string().optional(),
    lobsterMachineImprovement: z.string().optional(),

    // New optional field for additional feedback
    additionalFeedback: z.string().optional(),

    desiredFeatures: z.array(z.string()).min(1, "Please select at least one feature"),

    // Make email optional
    email: z.string().email("Please enter a valid email address").optional(),

    // Hidden field for platform
    platform: z.string().optional(),

    // Referral code (if the user was referred)
    referredBy: z.string().optional(),
  })
  .refine(
    (data) => {
      // If user has used a ball machine, require the ball machine fields
      if (data.usedBallMachine === "yes") {
        return (
          !!data.ballMachineFrequency &&
          !!data.ballMachineOwnership &&
          !!data.ballMachineBrand &&
          !!data.ballMachineImprovement
        )
      }
      // If user hasn't used a ball machine, require the awareness fields
      else if (data.usedBallMachine === "no") {
        return !!data.heardOfBallMachine && !!data.reasonForNotTrying && !!data.expectedCost
        // Note: lobsterMachineImprovement is optional
      }
      return true
    },
    {
      message: "Please complete all required questions",
      path: ["ballMachineDetails"],
    },
  )

export type SurveyData = z.infer<typeof surveySchema>

// Update the submitSurvey function to handle referrals
export async function submitSurvey(formData: FormData) {
  try {
    // Detect platform based on user agent
    const headersList = headers()
    const userAgent = headersList.get("user-agent") || ""
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    const platform = isMobile ? "mobile" : "web"

    // Get referral code if present
    const referredBy = (formData.get("referredBy") as string) || ""

    // Extract data from form
    const surveyData = {
      playFrequency: formData.get("playFrequency") as string,
      skillLevel: formData.get("skillLevel") as string,
      gender: formData.get("gender") as string,
      ageGroup: formData.get("ageGroup") as string,
      playingExperience: formData.get("playingExperience") as string,
      learningPainPoint: formData.get("learningPainPoint") as string,
      usedBallMachine: formData.get("usedBallMachine") as string,

      // Fields for users who have used ball machines
      ballMachineFrequency: (formData.get("ballMachineFrequency") as string) || "",
      ballMachineOwnership: (formData.get("ballMachineOwnership") as string) || "",
      ballMachineBrand: (formData.get("ballMachineBrand") as string) || "",
      ballMachineImprovement: (formData.get("ballMachineImprovement") as string) || "",

      // Fields for users who haven't used ball machines
      heardOfBallMachine: (formData.get("heardOfBallMachine") as string) || "",
      reasonForNotTrying: (formData.get("reasonForNotTrying") as string) || "",
      expectedCost: (formData.get("expectedCost") as string) || "",
      lobsterMachineImprovement: (formData.get("lobsterMachineImprovement") as string) || "",

      // New optional field for additional feedback
      additionalFeedback: (formData.get("additionalFeedback") as string) || "",

      desiredFeatures: formData.getAll("desiredFeatures") as string[],

      // Make email truly optional
      email: (formData.get("email") as string) || "",

      // Add platform information
      platform: platform,

      // Add referral information
      referredBy: referredBy,
    }

    // Validate the data
    const result = surveySchema.safeParse(surveyData)

    if (!result.success) {
      return {
        success: false,
        message: "Please fill out all required fields correctly",
        errors: result.error.errors,
      }
    }

    // Prepare Redis data - ensure no undefined values
    const redisData: Record<string, string> = {
      ...Object.fromEntries(
        Object.entries(surveyData).filter(([key, value]) => {
          // Skip desiredFeatures as we'll handle it separately
          return key !== "desiredFeatures" && value !== undefined
        }),
      ),
      desiredFeatures: JSON.stringify(surveyData.desiredFeatures),
      submittedAt: new Date().toISOString(),
      platform: platform, // Add platform information
    }

    // Store survey data in Redis - always do this regardless of email
    const surveyId = `survey:${Date.now()}`
    await redis.hset(surveyId, redisData)

    // Process referral if present and valid
    if (referredBy) {
      // Check if the referral code exists
      const referrerExists = await redis.exists(`referral:${referredBy}`)

      if (referrerExists) {
        // Increment the referrer's count
        await redis.hincrby(`referral:${referredBy}`, "referralCount", 1)

        // Add this survey to the referrer's list of referrals
        await redis.sadd(`referral:${referredBy}:surveys`, surveyId)
      }
    }

    let referralCode = ""
    let referralUrl = ""

    // Only add to drawing participants and send email if email is provided and not empty
    if (surveyData.email && surveyData.email.trim() !== "") {
      const email = surveyData.email.trim()

      // Generate a unique referral code for this user
      referralCode = nanoid(8)

      // Store the referral code with the user's email
      await redis.hset(`referral:${referralCode}`, {
        email: email,
        createdAt: new Date().toISOString(),
        referralCount: 0,
      })

      // Associate the email with the referral code for lookup
      await redis.set(`email:${email}:referralCode`, referralCode)

      // Create the referral URL
      referralUrl = `https://rallie.tennis/survey?ref=${referralCode}`

      // Add email to drawing participants list
      await redis.sadd("drawing_participants", email)

      // Add email to waitlist if not already there
      await redis.sadd("waitlist_emails", email)

      // Send confirmation email with referral link
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: "Rallie Tennis <hello@updates.rallie.tennis>",
        to: email,
        subject: "Thanks for completing our survey!",
        html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Thanks for Completing Our Survey!</title>
          </head>
          <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; padding: 20px; background-color: #f5f5f5; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #042d62; font-size: 28px; margin-bottom: 10px;">Thank You for Your Feedback!</h1>
                <div style="height: 4px; width: 60px; background: linear-gradient(90deg, #c64f34, #ffd700); margin: 0 auto;"></div>
              </div>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
                We really appreciate you taking the time to complete our survey. Your feedback is invaluable as we develop our revolutionary tennis ball machine.
              </p>
              
              <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="color: #0c4a6e; font-size: 16px; margin: 0;">
                  <strong>Congratulations!</strong> You've been entered into our monthly drawing for a $100 Tennis Warehouse gift card. Winners are selected on the 1st of each month and notified via email.
                </p>
              </div>
              
              <div style="background-color: #f0fff4; border-left: 4px solid #4ade80; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="color: #0c4a6e; font-size: 16px; margin-bottom: 10px;">
                  <strong>Want to increase your chances of winning?</strong> Share your unique referral link with friends and tennis partners. For each person who completes the survey using your link, you'll get an additional entry in the drawing!
                </p>
                <div style="background-color: #e6e6e6; padding: 10px; border-radius: 4px; text-align: center; margin-bottom: 10px;">
                  <a href="${referralUrl}" style="color: #0ea5e9; word-break: break-all;">${referralUrl}</a>
                </div>
                <p style="color: #0c4a6e; font-size: 14px; margin: 0;">
                  Track your referrals and chances at: <a href="https://rallie.tennis/referrals/${referralCode}" style="color: #0ea5e9;">https://rallie.tennis/referrals/${referralCode}</a>
                </p>
              </div>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
                We've also added you to our waitlist to keep you updated on our progress. Here's what you can expect:
              </p>
              
              <ul style="color: #374151; font-size: 16px; margin-bottom: 24px; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Regular updates on our development progress</li>
                <li style="margin-bottom: 8px;">Early access to product information</li>
                <li style="margin-bottom: 8px;">Exclusive pre-order opportunities</li>
                <li style="margin-bottom: 8px;">Special pricing for our waitlist members</li>
              </ul>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
                <strong>Don't worry about spam</strong> - we'll only email you about once per month with important updates. If you'd like more frequent news about our progress, please follow us on social media.
              </p>
              
              <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="color: #0c4a6e; font-size: 16px; margin: 0;">
                  Follow our journey on <a href="https://x.com/sophie_taco" style="color: #0ea5e9; text-decoration: underline;">X</a>, <a href="https://discord.gg/ptaTkcbQ" style="color: #0ea5e9; text-decoration: underline;">Discord</a>, and <a href="https://www.facebook.com/groups/963981362613884" style="color: #0ea5e9; text-decoration: underline;">Facebook</a>.
                </p>
              </div>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 8px;">Best regards,</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500;">Sophie Luo<br>Creator of Rallie Tennis</p>
            </div>
            
            <div style="max-width: 600px; margin: 20px auto 0; text-align: center; color: #6b7280; font-size: 14px;">
              <p style="margin-bottom: 10px;">© 2025 Rallie Tennis. All rights reserved.</p>
              <p>
                If you didn't complete this survey, you can safely ignore this email.
              </p>
            </div>
          </body>
        </html>
      `,
      })

      return {
        success: true,
        message: "Survey submitted successfully! You've been entered into our drawing and added to our waitlist.",
        hasEmail: true,
        referralCode,
        referralUrl,
      }
    } else {
      // Return success but indicate no email was provided
      return {
        success: true,
        message:
          "Survey submitted successfully! However, without an email, you won't be entered into our drawing or added to our waitlist.",
        hasEmail: false,
      }
    }
  } catch (error) {
    console.error("Error submitting survey:", error)
    return {
      success: false,
      message: "An error occurred while submitting your survey. Please try again.",
    }
  }
}

export async function getDrawingParticipantCount() {
  try {
    return await redis.scard("drawing_participants")
  } catch (error) {
    console.error("Error getting participant count:", error)
    return 0
  }
}

// New function to get referral stats
export async function getReferralStats(referralCode: string) {
  try {
    // Check if the referral code exists
    const exists = await redis.exists(`referral:${referralCode}`)

    if (!exists) {
      return {
        success: false,
        message: "Invalid referral code",
      }
    }

    // Get referral data
    const referralData = await redis.hgetall(`referral:${referralCode}`)

    // Get list of referred surveys
    const referredSurveys = await redis.smembers(`referral:${referralCode}:surveys`)

    return {
      success: true,
      email: referralData.email,
      createdAt: referralData.createdAt,
      referralCount: Number.parseInt(referralData.referralCount || "0"),
      referredSurveys,
    }
  } catch (error) {
    console.error("Error getting referral stats:", error)
    return {
      success: false,
      message: "An error occurred while fetching referral stats",
    }
  }
}

