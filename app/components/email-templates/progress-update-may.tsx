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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rallie Tennis - May Progress Update</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 0;
        background-color: #f5f5f5;
      }
      .container {
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        margin: 20px auto;
      }
      .header {
        background: linear-gradient(165deg, #042d62 65%, #4ade80 100%);
        padding: 30px 20px;
        text-align: center;
      }
      .logo {
        font-family: 'Arial', sans-serif;
        font-weight: bold;
        font-size: 36px;
        color: white;
        margin: 0;
        background: linear-gradient(to right, #c64f34, #ffd700);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
      .content {
        padding: 30px 20px;
      }
      h1 { 
        color: #042d62; 
        font-size: 24px; 
        margin-bottom: 20px; 
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 10px;
      }
      h2 { 
        color: #042d62; 
        font-size: 20px; 
        margin-top: 30px; 
        margin-bottom: 15px; 
      }
      h3 { 
        color: #042d62; 
        font-size: 18px; 
        margin-top: 25px; 
        margin-bottom: 10px; 
      }
      img { 
        max-width: 100%; 
        height: auto; 
        border-radius: 8px; 
        margin: 15px 0; 
        border: 1px solid #eaeaea;
      }
      .highlight { 
        background-color: #f0f9ff; 
        padding: 15px; 
        border-left: 4px solid #0ea5e9; 
        margin: 20px 0; 
        border-radius: 0 8px 8px 0;
      }
      .footer { 
        margin-top: 40px; 
        font-size: 14px; 
        color: #666; 
        border-top: 1px solid #eee; 
        padding-top: 20px; 
        text-align: center;
      }
      a { 
        color: #0ea5e9; 
        text-decoration: underline; 
      }
      .button {
        display: inline-block;
        background-color: #042d62;
        color: white !important;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: bold;
        margin: 15px 0;
      }
      .image-container {
        background-color: #f8f8f8;
        padding: 15px;
        border-radius: 8px;
        margin: 20px 0;
        text-align: center;
      }
      .image-caption {
        font-size: 14px;
        color: #666;
        margin-top: 8px;
        text-align: center;
      }
      .winner-section {
        background-color: #fff9e6;
        border: 1px solid #ffe0b2;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
      }
      .winner-badge {
        background-color: #ffd700;
        color: #333;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .section {
        margin-bottom: 30px;
      }
      .two-column {
        display: inline-block;
        width: 48%;
        vertical-align: top;
      }
      .spacer {
        display: inline-block;
        width: 3%;
      }
      @media only screen and (max-width: 600px) {
        .two-column {
          width: 100%;
          display: block;
        }
        .spacer {
          display: none;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">rallie</div>
        <p style="color: white; margin-top: 10px;">Your Most Reliable Tennis Training Partner</p>
      </div>
      
      <div class="content">
        <h1>May Progress Update</h1>
        
        <p>Hello from Rallie Tennis!</p>
        
        <p>We've just published our May update on the progress page. Here are the highlights:</p>
        
        <div class="section winner-section">
          <div class="winner-badge">WINNER ANNOUNCEMENT</div>
          <h2 style="margin-top: 0;">May Draw Winner</h2>
          <p>Congratulations to <strong>Delice</strong> for winning our May $100 Tennis Warehouse gift card draw!</p>
          
          <div class="image-container">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12591746755395_.pic.jpg-JEH1lyUrF7nv5XFtCspSQFgwaFIyoa.jpeg" alt="May drawing results showing Delice as the winner" style="max-width: 100%;">
            <p class="image-caption">Drawing results from May 9, 2025</p>
          </div>
          
          <p>Thank you to everyone who participated in our survey and referred friends! Your feedback is invaluable as we continue to develop our tennis ball machine.</p>
        </div>
        
        <div class="section">
          <h2>Development Progress</h2>
          
          <h3>Hardware</h3>
          <p>We're making exciting progress on the hardware front!</p>
          <p>We've successfully assembled our first prototype using RoboMaster motors and 3D printed parts to test our "dual flywheel launching" concept. The results are promising - we achieved launch speeds of ~75mph, confirming that our design direction is on the right track.</p>
          
          <div class="image-container">
            <div class="two-column">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.22.54%E2%80%AFAM-ubPoz1qBnWwFqAIf3p0YHyEHsVZ9sh.png" alt="3D model of our first prototype">
              <p class="image-caption">First prototype design</p>
            </div>
            <div class="spacer"></div>
            <div class="two-column">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.23.14%E2%80%AFAM-vYx1ykFGdzHTxkcwfHMKTA09RwsZiN.png" alt="Close-up of the dual flywheel launching system">
              <p class="image-caption">Dual flywheel system</p>
            </div>
          </div>
          
          <p>Based on these learnings, we're now advancing to the next development phase with custom motors and a new flywheel design that promises to further reduce the overall volume and weight of the machine.</p>
        </div>
        
        <div class="section">
          <h3>Software</h3>
          <p>On the software front, we've developed a functional app that can detect player position and poses in real-time, and through our custom reasoning module, determine the optimal ball placement for your practice session.</p>
          <p>We've also started experimenting with training custom models to better adapt to various lighting conditions and camera positions.</p>
          
          <h3>Other Updates</h3>
          <p>We expect to have several EVT (Engineering Verification Test) units ready by late July or early August. Once these are shipped to the States, we plan to host several user testing events in the Bay Area this summer.</p>
        </div>
        
        <div class="section">
          <h2>My Thoughts on Acemate and Tenniix</h2>
          <p>I've shared my analysis of the recent Kickstarter campaigns for tennis ball machines, including thoughts on their design choices, potential durability issues, and realistic expectations for the technology.</p>
        </div>
        
        <div class="highlight">
          <p><strong>Read the full update on our website:</strong></p>
          <a href="https://rallie.tennis/progress" class="button">View Full Update</a>
        </div>
        
        <p>Thank you for your continued support and interest in Rallie Tennis!</p>
        
        <p>Best regards,<br>Sophie Luo<br>Creator of Rallie Tennis</p>
      </div>
      
      <div class="footer">
        <p>© 2025 Rallie Tennis. All rights reserved.</p>
        <p>If you'd prefer not to receive these updates, you can <a href="${unsubscribeUrl}">unsubscribe</a>.</p>
      </div>
    </div>
  </body>
</html>
  `
}
