interface ProgressUpdateMayProps {
  unsubscribeUrl?: string
  isTest?: boolean
}

export default function ProgressUpdateMay({ unsubscribeUrl = "#", isTest = false }: ProgressUpdateMayProps) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rallie Tennis - May Progress Update</title>
  </head>
  <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; padding: 20px; background-color: #f5f5f5; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #042d62; font-size: 28px; margin-bottom: 10px;">Rallie Tennis - May Progress Update</h1>
        <div style="height: 4px; width: 60px; background: linear-gradient(90deg, #c64f34, #ffd700); margin: 0 auto;"></div>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Hello from Rallie Tennis! We've just published our May update on the progress page. Here are the highlights:
      </p>
      
      <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
        <h2 style="color: #0c4a6e; font-size: 20px; margin-top: 0; margin-bottom: 12px;">May Draw Winner Announcement</h2>
        <p style="color: #0c4a6e; font-size: 16px; margin: 0 0 12px 0;">
          Congratulations to <strong>Delice</strong> for winning our May $100 Tennis Warehouse gift card draw!
        </p>
        <div style="text-align: center; margin: 16px 0;">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12591746755395_.pic.jpg-JEH1lyUrF7nv5XFtCspSQFgwaFIyoa.jpeg" 
               alt="May drawing results showing Delice as the winner" 
               style="max-width: 100%; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">Drawing results from May 9, 2025</p>
        </div>
        <p style="color: #0c4a6e; font-size: 16px; margin: 0;">
          Thank you to everyone who participated in our survey and referred friends!
        </p>
      </div>
      
      <h2 style="color: #042d62; font-size: 20px; margin-top: 32px; margin-bottom: 16px;">Development Progress</h2>
      
      <h3 style="color: #042d62; font-size: 18px; margin-bottom: 12px;">Hardware</h3>
      <p style="color: #374151; font-size: 16px; margin-bottom: 16px;">
        We've successfully assembled our first prototype using RoboMaster motors and 3D printed parts to test our "dual flywheel launching" concept. The results are promising - we achieved launch speeds of ~75mph, confirming that our design direction is on the right track.
      </p>
      
      <div style="display: flex; gap: 16px; margin-bottom: 24px;">
        <div style="flex: 1;">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.22.54%E2%80%AFAM-ubPoz1qBnWwFqAIf3p0YHyEHsVZ9sh.png" 
               alt="3D model of our first prototype" 
               style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 8px;">First prototype design</p>
        </div>
        <div style="flex: 1;">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.23.14%E2%80%AFAM-vYx1ykFGdzHTxkcwfHMKTA09RwsZiN.png" 
               alt="Close-up of the dual flywheel launching system" 
               style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 8px;">Dual flywheel system</p>
        </div>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        Based on these learnings, we're now advancing to the next development phase with custom motors and a new flywheel design that promises to further reduce the overall volume and weight of the machine.
      </p>
      
      <h3 style="color: #042d62; font-size: 18px; margin-bottom: 12px;">Software</h3>
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        On the software front, we've developed a functional app that can detect player position and poses in real-time, and through our custom reasoning module, determine the optimal ball placement for your practice session.
      </p>
      
      <h3 style="color: #042d62; font-size: 18px; margin-bottom: 12px;">Other Updates</h3>
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        We expect to have several EVT (Engineering Verification Test) units ready by late July or early August. Once these are shipped to the States, we plan to host several user testing events in the Bay Area this summer.
      </p>
      
      <h2 style="color: #042d62; font-size: 20px; margin-top: 32px; margin-bottom: 16px;">My Thoughts on Acemate and Tenniix</h2>
      <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
        I've shared my analysis of the recent Kickstarter campaigns for tennis ball machines, including thoughts on their design choices, potential durability issues, and realistic expectations for the technology.
      </p>
      
      <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
        <p style="color: #0c4a6e; font-size: 16px; margin: 0 0 12px 0;">
          <strong>Read the full update on our website:</strong>
        </p>
        <a href="https://rallie.tennis/progress" 
           style="display: inline-block; background-color: #0ea5e9; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">
          View Full Update
        </a>
      </div>
      
      <p style="color: #374151; font-size: 16px; margin-bottom: 8px;">Best regards,</p>
      <p style="color: #111827; font-size: 16px; font-weight: 500;">Sophie Luo<br>Creator of Rallie Tennis</p>
    </div>
    
    <div style="max-width: 600px; margin: 20px auto 0; text-align: center; color: #6b7280; font-size: 14px;">
      <p style="margin-bottom: 10px;">© 2025 Rallie Tennis. All rights reserved.</p>
      <p>
        If you'd prefer not to receive these updates, you can <a href="${unsubscribeUrl}" style="color: #0ea5e9; text-decoration: underline;">unsubscribe</a>.
      </p>
    </div>
  </body>
</html>
  `
}
