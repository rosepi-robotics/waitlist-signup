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
        background-color: #ffffff;
        color: #1f2937;
        line-height: 1.6;
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      
      /* Header */
      .header {
        background: linear-gradient(135deg, #042d62 0%, #4ade80 100%);
        padding: 40px 30px;
        text-align: center;
        color: white;
      }
      .logo {
        max-width: 120px;
        height: auto;
        margin-bottom: 20px;
      }
      .header-title {
        font-size: 28px;
        font-weight: bold;
        margin: 0 0 10px 0;
        color: white;
      }
      .header-subtitle {
        font-size: 16px;
        margin: 0;
        color: #4ade80;
        opacity: 0.9;
      }
      
      /* Content */
      .content {
        padding: 40px 30px;
      }
      .intro {
        font-size: 16px;
        margin-bottom: 30px;
        color: #374151;
      }
      
      /* Sections */
      .section {
        margin-bottom: 30px;
      }
      .section-title {
        font-size: 20px;
        font-weight: 600;
        color: #042d62;
        margin: 0 0 15px 0;
        border-bottom: 2px solid #4ade80;
        padding-bottom: 8px;
      }
      
      /* Highlight boxes */
      .highlight-box {
        background: #f0fdf4;
        border-left: 4px solid #4ade80;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
      }
      .highlight-box h3 {
        color: #042d62;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 10px 0;
      }
      .highlight-box p {
        margin: 0;
        color: #374151;
        font-size: 14px;
      }
      
      /* Checkmark list */
      .checkmark-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .checkmark-item {
        margin-bottom: 8px;
        padding-left: 20px;
        position: relative;
        color: #374151;
        font-size: 14px;
      }
      .checkmark-item:last-child {
        margin-bottom: 0;
      }
      .checkmark {
        position: absolute;
        left: 0;
        top: 0;
        color: #4ade80;
        font-weight: bold;
      }
      
      /* Video container */
      .video-container {
        text-align: center;
        margin: 20px 0;
        background: #f8fafc;
        border-radius: 8px;
        padding: 20px;
      }
      .video-thumbnail {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        border: 2px solid #042d62;
        cursor: pointer;
        transition: transform 0.2s;
      }
      .video-thumbnail:hover {
        transform: scale(1.02);
      }
      .video-caption {
        margin: 10px 0 0 0;
        font-size: 12px;
        color: #042d62;
        font-weight: 500;
      }
      
      /* CTA Button */
      .cta-section {
        text-align: center;
        margin: 30px 0;
        padding: 25px;
        background: #f8fafc;
        border-radius: 8px;
      }
      .cta-button {
        display: inline-block;
        background: linear-gradient(135deg, #042d62 0%, #4ade80 100%);
        color: white;
        padding: 14px 28px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        transition: transform 0.2s;
      }
      .cta-button:hover {
        transform: translateY(-2px);
        color: white;
      }
      
      /* Social section */
      .social-section {
        background: #042d62;
        color: white;
        padding: 30px;
        text-align: center;
      }
      .social-title {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 15px 0;
        color: white;
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
        padding: 10px 16px;
        border-radius: 6px;
        background: rgba(255,255,255,0.1);
        color: #4ade80;
        transition: background 0.2s;
      }
      .social-link:hover {
        background: rgba(255,255,255,0.2);
        color: #4ade80;
      }
      
      /* Signature */
      .signature {
        border-top: 1px solid #e5e7eb;
        padding-top: 25px;
        margin-top: 30px;
      }
      .signature-name {
        font-size: 16px;
        font-weight: 600;
        color: #042d62;
        margin: 0 0 5px 0;
      }
      .signature-title {
        font-size: 14px;
        color: #6b7280;
        margin: 0;
      }
      
      /* Footer */
      .footer {
        background: #f8fafc;
        padding: 20px 30px;
        text-align: center;
        border-top: 1px solid #e5e7eb;
      }
      .footer-text {
        font-size: 12px;
        color: #6b7280;
        margin: 0 0 10px 0;
      }
      .unsubscribe-link {
        font-size: 12px;
        color: #042d62;
        text-decoration: underline;
      }
      
      /* Responsive */
      @media (max-width: 600px) {
        .header {
          padding: 30px 20px;
        }
        .content {
          padding: 30px 20px;
        }
        .social-section {
          padding: 25px 20px;
        }
        .footer {
          padding: 20px;
        }
        .social-links {
          flex-direction: column;
          gap: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      
      <!-- Header -->
      <div class="header">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_q1CpWxAbZOTXYbEJi2fVA6Ta412C/xQRRbMXX7cUBtDQZ_SlGm7/public/images/rallie-logo-white.png" alt="Rallie Tennis" class="logo" />
        <h1 class="header-title">🎾 June Update: Major Milestones!</h1>
        <p class="header-subtitle">First field test results, team growth, and our brand new look</p>
      </div>

      <!-- Content -->
      <div class="content">
        <p class="intro">
          Hi there! We're excited to share our latest progress on Rallie, your future AI-powered tennis training companion. This month has been incredible with major milestones reached!
        </p>

        <!-- New Logo Section -->
        <div class="section">
          <h2 class="section-title">🎨 Brand New Look</h2>
          <div class="highlight-box">
            <h3>We've got a fresh new logo!</h3>
            <p>After months of design work, we're excited to unveil Rallie's new visual identity. The sleek, modern design better represents our innovative approach to tennis training technology. You'll see this new logo across all our communications, website, and eventually on the Rallie device itself. What do you think? We'd love to hear your feedback!</p>
          </div>
        </div>

        <!-- First Field Test -->
        <div class="section">
          <h2 class="section-title">🏆 First Field Test Results</h2>
          <p>The moment we've all been waiting for - our first real-world field test is complete! We took Rallie to the courts and the results exceeded our expectations.</p>
          
          <div class="video-container">
            <a href="https://www.youtube.com/@rallietennis" target="_blank">
              <img src="/placeholder.svg?height=250&width=400&text=Field+Test+Video" 
                   alt="Rallie Field Test Video" 
                   class="video-thumbnail" />
            </a>
            <p class="video-caption">▶️ Click to watch our field test highlights on YouTube!</p>
          </div>

          <div class="highlight-box">
            <h3>Key Results:</h3>
            <ul class="checkmark-list">
              <li class="checkmark-item">
                <span class="checkmark">✓</span>
                <strong>95% shot accuracy</strong> - Rallie consistently hit target zones
              </li>
              <li class="checkmark-item">
                <span class="checkmark">✓</span>
                <strong>Seamless AI adaptation</strong> - The system learned player patterns in real-time
              </li>
              <li class="checkmark-item">
                <span class="checkmark">✓</span>
                <strong>30+ minute battery life</strong> - Exceeded our initial projections
              </li>
              <li class="checkmark-item">
                <span class="checkmark">✓</span>
                <strong>Easy setup</strong> - From box to court in under 5 minutes
              </li>
            </ul>
          </div>

          <p>The feedback from our test players was incredible. One player said, <em>"It's like having a personal coach that never gets tired and always knows exactly what shot I need to practice."</em></p>
        </div>

        <!-- Team Growth -->
        <div class="section">
          <h2 class="section-title">👥 Team Growth</h2>
          <p>Our team continues to grow with incredible talent! This month we welcomed:</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <h4 style="margin: 0 0 8px 0; color: #042d62; font-size: 14px;">🔧 Senior Hardware Engineer</h4>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">8+ years robotics experience</p>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <h4 style="margin: 0 0 8px 0; color: #042d62; font-size: 14px;">💻 AI/ML Engineer</h4>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">PhD in Computer Vision</p>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <h4 style="margin: 0 0 8px 0; color: #042d62; font-size: 14px;">🎨 Product Designer</h4>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">Award-winning UX designer</p>
            </div>
          </div>

          <p>With our expanded team, we're accelerating development and moving closer to bringing Rallie to courts everywhere!</p>
        </div>

        <!-- Development Highlights -->
        <div class="section">
          <h2 class="section-title">⚡ Development Highlights</h2>
          <ul class="checkmark-list">
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Completed first successful field test
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Improved ball trajectory algorithms by 40%
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Enhanced mobile app with new training modes
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Optimized power consumption for longer sessions
            </li>
            <li class="checkmark-item">
              <span class="checkmark">✓</span>
              Finalized manufacturing partnerships
            </li>
          </ul>
        </div>

        <!-- Beta Program -->
        <div class="section">
          <h2 class="section-title">🚀 Beta Program Coming Soon</h2>
          <p>Based on our successful field test, we're preparing to launch our exclusive beta program! Beta testers will get:</p>
          <ul style="margin: 15px 0; padding-left: 20px; color: #374151;">
            <li>Early access to Rallie devices</li>
            <li>Direct input on features and improvements</li>
            <li>Special beta tester pricing</li>
            <li>Exclusive community access</li>
          </ul>
          <p>Stay tuned for beta program applications opening soon!</p>
        </div>

        <!-- Survey CTA -->
        <div class="cta-section">
          <h2 style="color: #042d62; font-size: 18px; margin: 0 0 15px 0;">📋 Help Shape Rallie's Future</h2>
          <p style="margin: 0 0 20px 0; color: #374151;">Your feedback is crucial to making Rallie the best tennis training companion possible.</p>
          <a href="https://rallie.tennis/survey" class="cta-button">
            Take Our 2-Minute Survey
          </a>
          <p style="margin: 15px 0 0 0; font-size: 14px; color: #6b7280; font-style: italic;">Survey participants get priority access to beta testing!</p>
        </div>

        <!-- Signature -->
        <div class="signature">
          <p style="margin: 0 0 15px 0; color: #374151;">Thanks for your continued support,</p>
          <p class="signature-name">Sophie Luo</p>
          <p class="signature-title">Founder & CEO, Rallie</p>
          <p style="margin: 10px 0 0 0; font-size: 14px; color: #6b7280; font-style: italic;">Building the future of tennis training, one shot at a time</p>
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="social-section">
        <h3 class="social-title">🌟 Join Our Community</h3>
        <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9);">Connect with fellow tennis enthusiasts and stay updated on Rallie's journey:</p>
        
        <div class="social-links">
          <a href="https://www.facebook.com/groups/963981362613884" class="social-link">
            📘 Facebook Group
          </a>
          <a href="https://www.instagram.com/rallie.tennis/" class="social-link">
            📸 Instagram
          </a>
          <a href="https://www.youtube.com/@rallietennis" class="social-link">
            🎥 YouTube
          </a>
        </div>
        
        <p style="margin: 20px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.7);">
          <strong>Facebook Group:</strong> Share tips, ask questions, and connect with other players<br>
          <strong>Instagram:</strong> Behind-the-scenes content and development updates<br>
          <strong>YouTube:</strong> Field tests, tutorials, and product demonstrations
        </p>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p class="footer-text">You're receiving this email because you signed up for Rallie updates.</p>
        <a href="${unsubscribeUrl}" class="unsubscribe-link">Unsubscribe from these updates</a>
      </div>
    </div>
  </body>
</html>`
}
