"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      return { success: false, error: "All fields are required" }
    }

    // Send email to hello@rallie.tennis
    const { data, error } = await resend.emails.send({
      from: "Rallie Tennis Contact <hello@updates.rallie.tennis>",
      replyTo: email, // User's email as reply-to
      to: "hello@rallie.tennis",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            This message was sent from the Rallie Tennis contact form.
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending contact form email:", error)
      return { success: false, error: "Failed to send message. Please try again." }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
      messageId: data?.id,
    }
  } catch (error) {
    console.error("Exception in contact form submission:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
