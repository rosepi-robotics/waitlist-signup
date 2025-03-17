"use server"

import { z } from "zod"
import { Resend } from "resend"
import { redis } from "../lib/redis"

// Update the schema to make email optional and add additionalFeedback field
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

// Update the submitSurvey function to handle truly optional email
export async function submitSurvey(formData: FormData) {
  try {
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
    }

    // Store survey data in Redis - always do this regardless of email
    const surveyId = `survey:${Date.now()}`
    await redis.hset(surveyId, redisData)

    // Only add to drawing participants and send email if email is provided and not empty
    if (surveyData.email && surveyData.email.trim() !== "") {
      // Add email to drawing participants list
      await redis.sadd("drawing_participants", surveyData.email)

      // Add email to waitlist if not already there
      await redis.sadd("waitlist_emails", surveyData.email)

      // Send confirmation email
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: "Rallie Tennis <hello@rallie.com>",
        to: surveyData.email,
        subject: "Thanks for completing our survey!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1>Thank you for your feedback!</h1>
            <p>You've been entered into our monthly drawing for a $100 Tennis Warehouse gift card.</p>
            <p>Winners are selected on the 1st of each month and notified via email.</p>
            <p>We appreciate your input as we develop our revolutionary tennis ball machine.</p>
            <p>Best regards,<br>The Rallie Team</p>
          </div>
        `,
      })

      return {
        success: true,
        message: "Survey submitted successfully! You've been entered into our drawing.",
        hasEmail: true,
      }
    } else {
      // Return success but indicate no email was provided
      return {
        success: true,
        message: "Survey submitted successfully! However, without an email, you won't be entered into our drawing.",
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

