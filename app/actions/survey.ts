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
        subject: "Thanks for helping shape the future of tennis training!",
        html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Thanks for Completing Our Survey!</title>
          </head>
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
