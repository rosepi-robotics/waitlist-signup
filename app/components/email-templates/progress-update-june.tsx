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
        font-size: 56px;
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
        background: #f3f4f6;
        padding: 48px 32px;
        text-align: center;
        margin-top: 64px;
      }
      .cta-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 32px 0;
        color: #4b5563;
      }
      .social-links {
        display: flex;
        justify-content: center;
        gap: 48px;
        flex-wrap: wrap;
        align-items: center;
      }
      .social-link {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        color: #4b5563;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        transition: color 0.2s;
        padding: 8px;
      }
      .social-link:hover {
        color: #1f2937;
      }
      .social-icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
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
          font-size: 42px;
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
    
      <!-- Article Content -->
      <div class="article">
        <div class="article-container">
          <div class="prose">
            <p class="lead">
              Hi Rallie subscribers! Hope you are enjoying your summer as we are!  
            </p>
            </p>
              We have some exciting news to share! First, we had two important additions to the team, we also did our first field test and the results were encouraging! The system is working as expected, creating incredibly fast and strong balls with its compact design.
            </p>

            <h2>Team Update</h2>

            <p>
              Finally it's not my one man shop anymore! I'm super excited to announce that I'm joined with incredibly talented engineers!
            </p>

            <p>
              <strong>Lisa Wang</strong> - Co-founder & AI/Computer Vision Lead: Lisa is a talented engineer and ex-Googler, she will be leading AI development at Rallie. Stay tuned—exciting AI feature demos are coming soon!
            </p>

            <p>
              <strong>Ray Shen</strong> - Hardware & Embedded Systems Engineering: Ray bring his 15-year experience in mechanical & electrical engineering, motor control and manufacturing to the team. Ray will be the hardware lead at Rallie and will lead our path to scalable production.
            </p>

            <h2>Field Test Breakthrough</h2>

            <p>
              After months of struggling with stability issues of structural parts, we are finally confident that Rallie is launching consistent, high-quality, stable balls at a MEASURED top speed of 80 MPH. A balance between performance and portability is achieved.
            </p>

            <p>
              Below is the video of Rallie's very first ball launch a week ago. We will be sharing more videos on tests on real tennis courts, and comparisons with other machines.
            </p>

            <div class="image-section">
              <a href="https://www.youtube.com/watch?v=3w82jRrf7nw" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
                🎥 Watch Field Test Video
              </a>
            </div>
            <p class="image-caption">FIRST FIELD TEST - JUNE 2025</p>

            <h2>What's Next</h2>

            <p>
              We're now focusing on refining the AI coaching algorithms and preparing for our beta program launch. The next few months will be crucial as we work toward bringing Rallie to beta testers.
            </p>

            <p>Key milestones ahead:</p>

            <ul>
              <li>• ID Design</li>
              <li>• Continued testing (and making it even more portable)</li>
              <li>• AI coaching system integration</li>
              <li>• Beta program launch with select users</li>
              <li>• User interface and mobile app development</li>
              <li>• Production planning and manufacturing partnerships</li>
            </ul>

            <p>
              We're incredibly excited about what's coming next and grateful for the support from our growing community of tennis players and coaches who believe in the future of AI-powered training.
            </p>
          </div>

          <!-- CTA Section -->
          <div class="cta-section">
            <h3 class="cta-title">Follow our journey</h3>
            <div class="social-links">
              <a href="https://www.facebook.com/groups/963981362613884" class="social-link" target="_blank" rel="noopener noreferrer">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/rallie.tennis/" class="social-link" target="_blank" rel="noopener noreferrer">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.youtube.com/@rallietennis" class="social-link" target="_blank" rel="noopener noreferrer">
                <svg class="social-icon" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
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
