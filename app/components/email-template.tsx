interface EmailTemplateProps {
  email: string
}

export default function EmailTemplate({ email }: EmailTemplateProps) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Welcome to the Rallie Tennis Waitlist</title>
  </head>
  <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; padding: 20px; background-color: #f5f5f5; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #042d62; font-size: 28px; margin-bottom: 10px;">Welcome to the Rallie Tennis Waitlist!</h1>
        <div style="height: 4px; width: 60px; background: linear-gradient(90deg, #c64f34, #ffd700); margin: 0 auto;"></div>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Thank you for joining our waitlist! We've received your email address (${email}) and will keep you updated on our progress as we develop the most compact, durable, and intelligent tennis ball machine ever.
      </p>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Here's what you can expect:
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
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        In the meantime, we'd love for you to take our <a href="https://rallie.tennis/survey" style="color: #0ea5e9; text-decoration: underline;">quick survey</a> to help us build a better product. You'll also be entered to win a $100 Tennis Warehouse gift card!
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
        If you didn't sign up for this waitlist, you can safely ignore this email.
      </p>
    </div>
  </body>
</html>
`
}
