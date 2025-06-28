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
    <title>${testPrefix}First Field Test Success + New Logo Reveal</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f9fafb;
        color: #1f2937;
        line-height: 1.6;
      }
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      
      /* Hero Section */
      .hero {
        background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%);
        color: white;
        padding: 96px 16px;
        text-align: center;
      }
      .hero-container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 16px;
      }
      .badge {
        display: inline-block;
        background: rgba(219, 234, 254, 1);
        color: #1e40af;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 24px;
      }
      .hero-title {
        font-size: 48px;
        font-weight: 700;
        margin: 0 0 24px 0;
        line-height: 1.1;
      }
      .hero-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px;
        justify-content: center;
        color: rgba(219, 234, 254, 1);
        margin-bottom: 32px;
      }
      .meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      
      /* Article Content */
      .article {
        padding: 64px 16px;
        background: white;
      }
      .article-container {
        max-width: 1024px;
        margin: 0 auto;
      }
      .prose {
        max-width: none;
        font-size: 18px;
        line-height: 1.8;
      }
      .prose p {
        margin: 0 0 24px 0;
        color: #4b5563;
      }
      .prose .lead {
        font-size: 20px;
        color: #4b5563;
        margin-bottom: 32px;
        line-height: 1.6;
      }
      .prose h2 {
        font-size: 32px;
        font-weight: 700;
        color: #1f2937;
        margin: 48px 0 24px 0;
        line-height: 1.2;
      }
      .prose h2:first-of-type {
        margin-top: 48px;
      }
      .prose strong {
        font-weight: 600;
        color: #1f2937;
      }
      .prose ul {
        margin: 24px 0;
        padding-left: 0;
        list-style: none;
      }
      .prose li {
        margin-bottom: 8px;
        color: #4b5563;
      }
      
      /* Image sections */
      .image-section {
        margin: 24px 0;
        text-align: center;
      }
      .field-test-gif {
        max-width: 384px;
        margin: 0 auto;
        border-radius: 8px;
        width: 100%;
        height: auto;
      }
      .image-caption {
        font-size: 12px;
        text-align: center;
        margin-top: 8px;
        color: #6b7280;
        margin-bottom: 32px;
      }
      
      /* Logo section */
      .logo-section {
        display: flex;
        justify-content: center;
        gap: 32px;
        margin: 32px 0;
        flex-wrap: wrap;
      }
      .logo-item {
        text-align: center;
      }
      .logo-item img {
        height: 64px;
        margin: 0 auto 8px auto;
      }
      .logo-item.dark {
        background: #111827;
        padding: 16px;
        border-radius: 8px;
      }
      .logo-item p {
        font-size: 14px;
        color: #4b5563;
        margin: 0;
      }
      .logo-item.dark p {
        color: #d1d5db;
      }
      
      /* CTA Section */
      .cta-section {
        background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
        border: 1px solid #3b82f6;
        border-radius: 16px;
        padding: 64px 32px;
        text-align: center;
        margin-top: 64px;
      }
      .cta-title {
        font-size: 32px;
        font-weight: 700;
        margin: 0 0 16px 0;
        color: #1f2937;
      }
      .cta-text {
        color: #4b5563;
        margin: 0 0 32px 0;
        max-width: 512px;
        margin-left: auto;
        margin-right: auto;
        font-size: 16px;
      }
      .cta-form {
        max-width: 384px;
        margin: 0 auto;
      }
      .form-row {
        display: flex;
        gap: 12px;
      }
      .input-wrapper {
        flex: 1;
        position: relative;
      }
      .input-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
        width: 20px;
        height: 20px;
      }
      .email-input {
        width: 100%;
        padding: 12px 12px 12px 40px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 16px;
        background: white;
      }
      .submit-button {
        background: #2563eb;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }
      .submit-button:hover {
        background: #1d4ed8;
      }
      
      /* Footer */
      .footer {
        background: #f9fafb;
        padding: 40px 16px;
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
        color: #2563eb;
        text-decoration: underline;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .hero {
          padding: 64px 16px;
        }
        .hero-title {
          font-size: 36px;
        }
        .hero-meta {
          flex-direction: column;
          gap: 16px;
        }
        .article {
          padding: 48px 16px;
        }
        .prose h2 {
          font-size: 28px;
        }
        .cta-section {
          padding: 48px 24px;
        }
        .cta-title {
          font-size: 28px;
        }
        .form-row {
          flex-direction: column;
        }
        .logo-section {
          gap: 16px;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      
      <!-- Hero Section -->
      <div class="hero">
        <div class="hero-container">
          <div class="badge">PROGRESS</div>
          <h1 class="hero-title">First Field Test Success + New Logo Reveal</h1>
          <div class="hero-meta">
            <div class="meta-item">
              <span>📅</span>
              <span>6/23/2025</span>
            </div>
            <div class="meta-item">
              <span>⏱️</span>
              <span>8 min read</span>
            </div>
            <div class="meta-item">
              <span>👤</span>
              <span>Development Team</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Article Content -->
      <div class="article">
        <div class="article-container">
          <div class="prose">
            <p class="lead">
              We did our first field test and the results exceeded expectations! The system is working perfectly, creating incredibly fast and strong balls with its compact design. Plus, we're revealing our new logo.
            </p>

            <p>
              After months of engineering and development, seeing Rallie perform on an actual tennis court was an incredible milestone for our team.
            </p>

            <h2>Field Test Breakthrough</h2>

            <p>
              We did our first field test and the results exceeded expectations! The system is working perfectly, creating incredibly fast and strong balls with its compact design.
            </p>

            <div class="image-section">
              <img
                src="https://i.imgur.com/UNvBo5i.gif"
                alt="Rallie field test demonstration showing the tennis ball machine in action"
                class="field-test-gif"
              />
            </div>
            <p class="image-caption">FIRST FIELD TEST - JUNE 2025</p>

            <p>
              The field test validated our core engineering decisions, from the dual motor system to the servo-controlled oscillation mechanism. We achieved consistent ball speeds ranging from 10-80 MPH with precise spin control, demonstrating both topspin and backspin capabilities that exceeded our initial specifications.
            </p>

            <h2>Team Update</h2>

            <p>
              My team continues is growing! Finally it's not my one man shop anymore! I'm super excited to announce that I'm joined with incredibly talented engineers!
            </p>

            <p>
              <strong>Lisa Wang</strong> - Co-founder & AI/Computer Vision Lead: Lisa, a brilliant engineer and former Googler, is leading AI development at Rallie. Stay tuned—exciting AI feature demos are coming soon!
            </p>

            <p>
              <strong>Ray Shen</strong> - Hardware & Embedded Systems Engineering: A 15-year veteran in motor control and manufacturing, Ray brings deep expertise to Rallie's hardware development and will lead our path to scalable production.
            </p>

            <p>
              We're looking for 10 tennis facilities to participate in our beta program. Selected partners will receive early access to Rallie units and direct input into the final product design.
            </p>

            <h2>New Logo Reveal</h2>

            <p>
              Rallie got a fresh new look! Our updated logo reflects our commitment to precision and modern design.
            </p>

            <div class="logo-section">
              <div class="logo-item">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_q1CpWxAbZOTXYbEJi2fVA6Ta412C/gfGv-c3AmWb7kc4dcOZpuP/public/images/rallie-logo-black.png" alt="Rallie logo in black" />
                <p>Black version</p>
              </div>
              <div class="logo-item dark">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_q1CpWxAbZOTXYbEJi2fVA6Ta412C/xQRRbMXX7cUBtDQZ_SlGm7/public/images/rallie-logo-white.png" alt="Rallie logo in white" />
                <p>White version</p>
              </div>
            </div>

            <p>
              The new logo captures the dynamic energy of tennis while maintaining the clean, tech-forward aesthetic that represents our AI-powered approach to training.
            </p>

            <h2>What's Next</h2>

            <p>
              With the successful field test behind us, we're now focusing on refining the AI coaching algorithms and preparing for our beta program launch. The next few months will be crucial as we work toward bringing Rallie to tennis facilities and players worldwide.
            </p>

            <p>Key milestones ahead:</p>

            <ul>
              <li>• AI coaching system integration</li>
              <li>• Beta program launch with select tennis facilities</li>
              <li>• User interface and mobile app development</li>
              <li>• Production planning and manufacturing partnerships</li>
            </ul>

            <p>
              We're incredibly excited about what's coming next and grateful for the support from our growing community of tennis players and coaches who believe in the future of AI-powered training.
            </p>
          </div>

          <!-- CTA Section -->
          <div class="cta-section">
            <h3 class="cta-title">Join the Beta Program</h3>
            <p class="cta-text">
              Be among the first to experience Rallie's AI-powered tennis coaching. Join our beta program and help shape the future of tennis training.
            </p>

            <div class="cta-form">
              <div class="form-row">
                <div class="input-wrapper">
                  <span class="input-icon">✉️</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="email-input"
                    readonly
                  />
                </div>
                <button class="submit-button">
                  Join Beta
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
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
