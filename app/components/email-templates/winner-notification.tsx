interface WinnerNotificationProps {
  winnerEmail?: string
  isTest?: boolean
}

export default function WinnerNotification({
  winnerEmail = "delice.wang@hotmail.com",
  isTest = false,
}: WinnerNotificationProps) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Congratulations! You've Won the Rallie Tennis Draw</title>
  </head>
  <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; padding: 20px; background-color: #f5f5f5; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #042d62; font-size: 28px; margin-bottom: 10px;">Congratulations, You're Our Winner! 🎉</h1>
        <div style="height: 4px; width: 60px; background: linear-gradient(90deg, #c64f34, #ffd700); margin: 0 auto;"></div>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Hello Delice,
      </p>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Great news! You've been selected as the winner of our May $100 Tennis Warehouse gift card draw. Congratulations! 🎾
      </p>
      
      <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
        <p style="color: #0c4a6e; font-size: 16px; margin: 0 0 12px 0;">
          <strong>Your Prize: $100 Tennis Warehouse Gift Card</strong>
        </p>
        <p style="color: #0c4a6e; font-size: 16px; margin: 0;">
          Please confirm if we should send the virtual gift card to this email address: <strong>${winnerEmail}</strong>
        </p>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Your entry was selected from all participants who completed our survey. Thank you for taking the time to provide your valuable feedback - it's helping us build a better tennis ball machine!
      </p>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        We'd be thrilled if you could share this news with your friends or on social media. It would help spread the word about Rallie Tennis and our mission to revolutionize tennis training.
      </p>
      
      <div style="text-align: center; margin: 32px 0;">
        <a href="https://rallie.tennis/progress" 
           style="display: inline-block; background-color: #0ea5e9; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">
          Check Out Our Latest Progress
        </a>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Simply reply to this email at <strong>hello@rallie.tennis</strong> to confirm your email address, and we'll send your gift card right away.
      </p>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 8px;">Best regards,</p>
      <p style="color: #111827; font-size: 16px; font-weight: 500;">Sophie Luo<br>Creator of Rallie Tennis</p>
    </div>
    
    <div style="max-width: 600px; margin: 20px auto 0; text-align: center; color: #6b7280; font-size: 14px;">
      <p style="margin-bottom: 10px;">© 2025 Rallie Tennis. All rights reserved.</p>
    </div>
  </body>
</html>
  `
}
