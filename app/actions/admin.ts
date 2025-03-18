"use server"

import { Resend } from "resend"
import { redis } from "@/app/lib/redis"

export async function runDrawing() {
  try {
    // Get all participants
    const participants = await redis.smembers("drawing_participants")

    if (participants.length === 0) {
      return { success: false, error: "No participants found" }
    }

    // Select a random winner
    const winnerIndex = Math.floor(Math.random() * participants.length)
    const winnerEmail = participants[winnerIndex]

    // Record the winner
    const drawingDate = new Date().toISOString().split("T")[0] // YYYY-MM-DD
    await redis.hset(`drawing:${drawingDate}`, {
      winnerEmail,
      totalParticipants: participants.length,
      drawDate: new Date().toISOString(),
    })

    // Send winner notification email
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      to: winnerEmail,
      subject: "Congratulations! You won the $100 Tennis Warehouse Gift Card!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Congratulations! 🎉</h1>
          <p>You've won our monthly drawing for a $100 Tennis Warehouse Gift Card!</p>
          <p>We'll be in touch shortly with details on how to claim your prize.</p>
          <p>Thank you for participating in our survey and helping us build a better tennis ball machine.</p>
          <p>Best regards,<br>The Rallie Team</p>
        </div>
      `,
    })

    // Send admin notification
    await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      to: "admin@rallie.com", // Change to your admin email
      subject: "Monthly Drawing Winner Selected",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Monthly Drawing Results</h1>
          <p>Winner: ${winnerEmail}</p>
          <p>Total Participants: ${participants.length}</p>
          <p>Drawing Date: ${new Date().toLocaleString()}</p>
        </div>
      `,
    })

    return {
      success: true,
      winner: winnerEmail,
      totalParticipants: participants.length,
    }
  } catch (error) {
    console.error("Error running drawing:", error)
    return { success: false, error: "Failed to run drawing" }
  }
}

