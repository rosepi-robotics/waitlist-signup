import { Resend } from "resend"

// Replace with your actual Resend API key
const resendApiKey = process.env.RESEND_API_KEY || "YOUR_RESEND_API_KEY"
// Replace with your email address
const yourEmail = "your-email@example.com"

const resend = new Resend(resendApiKey)

async function sendTestEmail() {
  try {
    // Create HTML content for the email
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rallie Tennis - May Progress Update</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 { color: #042d62; font-size: 24px; margin-bottom: 20px; }
    h2 { color: #042d62; font-size: 20px; margin-top: 30px; margin-bottom: 15px; }
    h3 { color: #042d62; font-size: 18px; margin-top: 25px; margin-bottom: 10px; }
    img { max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0; }
    .highlight { background-color: #f0f9ff; padding: 15px; border-left: 4px solid #0ea5e9; margin: 20px 0; }
    .footer { margin-top: 40px; font-size: 14px; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
    a { color: #0ea5e9; text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Rallie Tennis - May Progress Update</h1>
  
  <p>Hello from Rallie Tennis!</p>
  
  <p>We've just published our May update on the progress page. Here are the highlights:</p>
  
  <h2>May Draw Winner Announcement</h2>
  <p>Congratulations to <strong>Delice</strong> for winning our May $100 Tennis Warehouse gift card draw!</p>
  <p>Thank you to everyone who participated in our survey and referred friends! Your feedback is invaluable as we continue to develop our tennis ball machine.</p>
  
  <h2>Development Progress</h2>
  
  <h3>Hardware</h3>
  <p>We're making exciting progress on the hardware front!</p>
  <p>We've successfully assembled our first prototype using RoboMaster motors and 3D printed parts to test our "dual flywheel launching" concept. The results are promising - we achieved launch speeds of ~75mph, confirming that our design direction is on the right track.</p>
  <p>Based on these learnings, we're now advancing to the next development phase with custom motors and a new flywheel design that promises to further reduce the overall volume and weight of the machine.</p>
  
  <h3>Software</h3>
  <p>On the software front, we've developed a functional app that can detect player position and poses in real-time, and through our custom reasoning module, determine the optimal ball placement for your practice session.</p>
  <p>We've also started experimenting with training custom models to better adapt to various lighting conditions and camera positions.</p>
  
  <h3>Other Updates</h3>
  <p>We expect to have several EVT (Engineering Verification Test) units ready by late July or early August. Once these are shipped to the States, we plan to host several user testing events in the Bay Area this summer.</p>
  
  <h2>My Thoughts on Acemate and Tenniix</h2>
  <p>I've shared my analysis of the recent Kickstarter campaigns for tennis ball machines, including thoughts on their design choices, potential durability issues, and realistic expectations for the technology.</p>
  
  <div class="highlight">
    <p><strong>Read the full update on our website:</strong></p>
    <p><a href="https://rallie.tennis/progress">https://rallie.tennis/progress</a></p>
  </div>
  
  <p>Thank you for your continued support and interest in Rallie Tennis!</p>
  
  <p>Best regards,<br>Sophie Luo<br>Creator of Rallie Tennis</p>
  
  <div class="footer">
    <p>© 2025 Rallie Tennis. All rights reserved.</p>
    <p>If you'd prefer not to receive these updates, you can <a href="#">unsubscribe</a>.</p>
  </div>
</body>
</html>
    `

    // Send the test email
    const { data, error } = await resend.emails.send({
      from: "Rallie Tennis <hello@updates.rallie.tennis>",
      to: yourEmail,
      subject: "[TEST] Rallie Tennis - May Progress Update",
      html: emailHtml,
    })

    if (error) {
      console.error("Error sending email:", error)
      return
    }

    console.log("Test email sent successfully!")
    console.log("Email ID:", data?.id)
  } catch (error) {
    console.error("Exception occurred:", error)
  }
}

sendTestEmail()
