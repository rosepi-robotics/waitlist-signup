/**
 * Returns the full HTML for the "Welcome to the Rallie Tennis Waitlist" email.
 * This MUST be a raw string because the Resend SDK only accepts a string in
 * the `html` field.
 */
export interface EmailTemplateProps {
  email: string
}

export default function EmailTemplate({ email }: EmailTemplateProps): string {
  return /* html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to the Rallie Tennis Waitlist!</title>
    <style>
      /* === Utility styles (kept inline for email-client safety) ============= */
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif;
        background: #f5f5f5;
        color: #374151;
        line-height: 1.55;
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
        padding: 40px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 24px;
      }
      .card {
        background: #ffffff;
        border-radius: 16px;
        padding: 40px 32px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      }
      .title {
        margin: 0;
        font-size: 28px;
        font-weight: 700;
        color: #042d62;
      }
      .underline {
        height: 4px;
        width: 70px;
        background: linear-gradient(90deg, #f59e0b, #f97316);
        border-radius: 2px;
        margin: 16px auto 0;
      }
      .expect {
        background: #f0f9ff;
        border-radius: 12px;
        padding: 24px;
        margin: 32px 0;
      }
      .warn {
        background: #fef3c7;
        border-left: 4px solid #f59e0b;
        border-radius: 8px;
        padding: 20px;
        margin: 32px 0;
        font-size: 14px;
        color: #92400e;
      }
      .chips {
        background: #f8fafc;
        border-radius: 12px;
        padding: 24px;
        text-align: center;
      }
      .chip {
        display: inline-block;
        margin: 4px 6px;
        padding: 8px 16px;
        border-radius: 24px;
        background: #ffffff;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }
      .facebook { color: #1877f2; }
      .instagram { color: #e4405f; }
      .youtube { color: #ff0000; }
      a { color: #2563eb; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="wrapper">

      <!-- 1️⃣  Header -->
      <div class="card" style="text-align:center; margin-bottom:30px;">
        <h1 class="title">Welcome to the Rallie Tennis Waitlist!</h1>
        <div class="underline"></div>
      </div>

      <!-- 2️⃣  Main content -->
      <div class="card">

        <p style="font-size:16px; margin-bottom:24px;">
          Thank you for joining our waitlist! We’ve received your email address
          <strong style="color:#2563eb;">${email}</strong> and will keep you updated as we
          develop the most compact, durable, and intelligent tennis ball machine ever.
        </p>

        <div class="expect">
          <h3 style="margin:0 0 16px;font-size:18px;font-weight:600;color:#042d62;">
            Here’s what you can expect:
          </h3>
          <ul style="padding-left:20px;margin:0;font-size:16px;">
            <li style="margin-bottom:8px;">Regular updates on our development progress</li>
            <li style="margin-bottom:8px;">Early access to product information</li>
            <li style="margin-bottom:8px;">Exclusive pre-order opportunities</li>
            <li>Special pricing for our waitlist members</li>
          </ul>
        </div>

        <div class="warn">
          <strong>Don’t worry about spam —</strong> we’ll only email you about once per
          month with important updates. For more frequent news follow us on social media.
        </div>

        <p style="font-size:16px;margin-bottom:24px;">
          In the meantime, we’d love for you to take our
          <a href="https://rallie.tennis/survey">quick survey</a>. You’ll also be entered
          to win a $100 Tennis Warehouse gift card!
        </p>

        <!-- 3️⃣  Social links -->
        <div class="chips">
          <p style="margin:0 0 12px;font-size:16px;font-weight:500;color:#374151;">
            Follow our journey
          </p>
          <a class="chip facebook"
             href="https://www.facebook.com/groups/963981362613884">
            Facebook Community
          </a>
          <a class="chip instagram"
             href="https://www.instagram.com/rallie.tennis/">
            Instagram
          </a>
          <a class="chip youtube"
             href="https://www.youtube.com/@rallietennis">
            YouTube
          </a>
        </div>

        <!-- 4️⃣  Signature -->
        <div style="border-top:1px solid #e5e7eb;margin-top:32px;padding-top:24px;font-size:16px;">
          <p style="margin:0 0 4px;">Best regards,</p>
          <p style="margin:0 0 4px;font-weight:600;">Sophie Luo</p>
          <p style="margin:0;font-size:14px;color:#6b7280;">Creator of Rallie Tennis</p>
        </div>
      </div>

      <!-- 5️⃣  Footer -->
      <p style="text-align:center;color:#ffffff;font-size:12px;margin:30px 0 0;">
        © 2025 Rallie Tennis. All rights reserved.
      </p>
    </div>
  </body>
</html>`
}
