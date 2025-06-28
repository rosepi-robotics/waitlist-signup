export interface ProgressUpdateJuneProps {
  unsubscribeUrl: string
  isTest?: boolean
}

export default function ProgressUpdateJune({ unsubscribeUrl, isTest = false }: ProgressUpdateJuneProps): string {
  const testPrefix = isTest ? "[TEST] " : ""

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${testPrefix}Rallie Progress Update - June 2025</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #374151;
        line-height: 1.6;
        min-height: 100vh;
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
        padding: 40px 20px;
      }
      .card {
        background: #ffffff;
        border-radius: 16px;
        padding: 40px 30px;
        margin-bottom: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      .header-card {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo {
        max-width: 200px;
        height: auto;
        margin-bottom: 20px;
      }
      .title {
        font-size: 28px;
        font-weight: bold;
        color: #1e3a8a;
        margin: 0 0 10px 0;
      }
      .underline {
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #f59e0b, #f97316);
        margin: 0 auto;
        border-radius: 2px;
      }
      .highlight-box {
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 30px;
      }
      .blue-box { background: #f0f9ff; }
      .green-box { background: #f0fdf4; }
      .yellow-box { 
        background: #fef3c7;
        border-left: 4px solid #f59e0b;
      }
      .purple-box { background: #faf5ff; }
      .section-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .blue-title { color: #1e40af; }
      .green-title { color: #166534; }
      .yellow-title { color: #92400e; }
      .purple-title { color: #7c3aed; }
      .checkmark-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .checkmark-item {
        margin-bottom: 10px;
        padding-left: 20px;
        position: relative;
      }
      .checkmark-item:last-child {
        margin-bottom: 0;
      }
      .checkmark {
        position: absolute;
        left: 0;
        top: 0;
        color: #10b981;
        font-weight: bold;
      }
      .video-container {
        text-align: center;
        margin: 20px 0;
      }
      .video-thumbnail {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        cursor: pointer;
      }
      .cta-button {
        display: inline-block;
        background: #2563eb;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
      }
      .social-section {
        background: #f8fafc;
        border-radius: 12px;
        padding: 25px;
        text-align: center;
        margin-bottom: 30px;
      }
      .social-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
      }
      .social-link {
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 6px;
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .facebook { color: #1877f2; }
      .instagram { color: #e4405f; }
      .youtube { color: #ff0000; }
      .signature {
        border-top: 1px solid #e5e7eb;
        padding-top: 20px;
        text-align: left;
      }
      .footer {
        text-align: center;
        color: rgba(255,255,255,0.8);
        font-size: 12px;
        margin-top: 30px;
      }
      .unsubscribe {
        text-align: center;
        font-size: 12px;
        color: rgba(255,255,255,0.6);
        margin-top: 10px;
      }
      .unsubscribe a {
        color: rgba(255,255,255,0.8);
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      
      <!-- Header with New Logo -->
      <div class="card header-card">
        <img src="https://rallie.tennis/images/rallie-logo-black.png" alt="Rallie Tennis" class="logo" />
        <h1 class="title">Progress Update - June 2025</h1>
        <div class="underline"></div>
      </div>

      <!-- Main Content -->
      <div class="card">
        <p style="font-size: 16px; margin-bottom: 30px;">
          Hi there! We're excited to share our latest progress on Rallie, your future AI-powered tennis training companion. This month has been incredible with major milestones reached!
        </p>

        <!-- Development Progress -->
        <div class="highlight-box blue-box">
          <h3 class="section-title blue-title">🚀 Development Highlights</h3>
          <ul class="checkmark-list">
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Completed hardware prototype testing with 95% accuracy
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              AI training algorithms now adapt to individual playing styles
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Mobile app beta version ready for testing
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Compact design achieved - 40% smaller than traditional machines
            </li>
          </ul>
        </div>

        <!-- Team Update -->
        <div class="highlight-box green-box">
          <h3 class="section-title green-title">👥 Team Growth</h3>
          <p style="margin: 0; font-size: 14px; color: #166534;">
            We've expanded our team with two new engineers specializing in AI and robotics, plus a new product designer who's helping us perfect the user experience. This addition accelerates our development timeline and enhances our technical capabilities significantly.
          </p>
        </div>

        <!-- First Field Test Update -->
        <div class="highlight-box purple-box">
          <h3 class="section-title purple-title">🎾 First Field Test Results</h3>
          <p style="margin: 0 0 20px 0; font-size: 14px; color: #7c3aed;">
            We conducted our first real-world field test at a local tennis club, and the results exceeded our expectations! Players loved the precision and adaptability of Rallie's ball delivery system.
          </p>
          
          <div class="video-container">
            <a href="https://www.youtube.com/@rallietennis" target="_blank">
              <img src="/placeholder.svg?height=300&width=500&text=Field+Test+Video" 
                   alt="Rallie Field Test Video" 
                   class="video-thumbnail" />
            </a>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #7c3aed;">
              Click to watch our first field test in action!
            </p>
          </div>
        </div>

        <!-- New Logo Announcement -->
        <div class="highlight-box yellow-box">
          <h3 class="section-title yellow-title">🎨 Brand Refresh</h3>
          <p style="margin: 0; font-size: 14px; color: #92400e;">
            You might have noticed our fresh new logo at the top of this email! We've refined our brand identity to better reflect Rallie's innovative and approachable nature. The new design represents precision, movement, and the joy of tennis.
          </p>
        </div>

        <!-- Beta Program -->
        <div class="highlight-box yellow-box">
          <h3 class="section-title yellow-title">🎾 Beta Program Launch - July 2025</h3>
          <p style="margin: 0; font-size: 14px; color: #92400e;">
            We're launching our beta program next month! Selected participants will receive early access to test Rallie and provide feedback that shapes the final product. Stay tuned for selection details.
          </p>
        </div>

        <!-- Survey CTA -->
        <div style="text-align: center; margin-bottom: 30px;">
          <p style="font-size: 16px; margin-bottom: 20px;">
            Haven't taken our survey yet? Complete it now to join the beta program and win a $100 Tennis Warehouse gift card!
          </p>
          <a href="https://rallie.tennis/survey" class="cta-button">
            Take Survey Now
          </a>
        </div>

        <!-- Social Media Section -->
        <div class="social-section">
          <p style="font-size: 16px; margin: 0 0 20px 0;">
            Follow our journey on social media for behind-the-scenes updates:
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/groups/963981362613884" class="social-link facebook">
              Facebook Community
            </a>
            <a href="https://www.instagram.com/rallie.tennis/" class="social-link instagram">
              Instagram
            </a>
            <a href="https://www.youtube.com/@rallietennis" class="social-link youtube">
              YouTube
            </a>
          </div>
        </div>

        <!-- Signature -->
        <div class="signature">
          <p style="margin: 0 0 5px 0; font-size: 16px;">
            Thanks for your continued support,
          </p>
          <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1f2937;">
            Sophie Luo
          </p>
          <p style="margin: 0; font-size: 14px; color: #6b7280;">
            Creator of Rallie Tennis
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p style="margin: 0;">© 2025 Rallie Tennis. All rights reserved.</p>
      </div>
      
      <!-- Unsubscribe -->
      <div class="unsubscribe">
        <p style="margin: 0;">
          <a href="${unsubscribeUrl}">Unsubscribe</a> from these updates
        </p>
      </div>
    </div>
  </body>
</html>`
}
