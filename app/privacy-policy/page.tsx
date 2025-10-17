// Privacy Policy page (server component)

import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Mavio",
  description:
    "Learn how Mavio collects, uses, stores, and shares personal information. This privacy policy covers cookies, analytics, advertising, email marketing (Klaviyo), and your rights.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 17, 2025"

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {lastUpdated}</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <p>
              This Privacy Policy explains how Mavio ("we", "us", or "our") collects, uses, stores, and shares
              information about visitors to our website and individuals who interact with our services, including our
              waitlist and newsletter sign-ups. By using our website, you agree to the practices described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Information you provide directly:</span> name, email address, and any
                information you share via forms (e.g., waitlist signup, contact messages, surveys).
              </li>
              <li>
                <span className="font-medium">Information collected automatically:</span> device information, IP address,
                approximate location, and usage data collected through cookies and similar technologies.
              </li>
              <li>
                <span className="font-medium">Information from service providers:</span> we use tools such as Klaviyo (for
                email and subscriber management), Google Analytics (for analytics/measurement), and Google Ads (for
                advertising and conversions), which may collect data in accordance with their own privacy policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our website, products, and services.</li>
              <li>To manage waitlist and newsletter sign-ups, and to communicate with you.</li>
              <li>To personalize content, measure engagement, and perform analytics.</li>
              <li>To market our products and measure ad performance (including via Google Ads).</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Cookies and Tracking Technologies</h2>
            <p className="mb-2">
              We use cookies and similar technologies to operate the site, analyze traffic, remember preferences, and
              measure marketing performance. You can control cookies through your browser settings. Disabling cookies may
              limit certain features of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Email Marketing (Klaviyo)</h2>
            <p className="mb-2">
              We use Klaviyo to manage email sign-ups, deliver email communications, and analyze performance. If you
              subscribe, you may receive emails such as updates, product news, and promotions. You can unsubscribe at any
              time by using the link included in our emails or by contacting us. Klaviyo may process your data in
              accordance with its own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Analytics and Advertising</h2>
            <p className="mb-2">
              We use Google Analytics to understand how visitors use our site and Google Ads to measure conversions and
              improve advertising performance. These services may use cookies or similar technologies to collect data
              about your interactions with our site and other websites. You can learn more about how Google uses
              information here: https://policies.google.com/technologies/partner-sites and opt out of Google Analytics
              here: https://tools.google.com/dlpage/gaoptout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">How We Share Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With service providers that help us operate our business (e.g., hosting, analytics, advertising, email
                delivery, and customer communications such as Klaviyo, Google Analytics, and Google Ads).
              </li>
              <li>With professional advisors, authorities, or as required by law.</li>
              <li>In connection with a business transaction (e.g., merger, acquisition, or sale of assets).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
              comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Your Choices and Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may unsubscribe from marketing emails at any time using the link in our emails.</li>
              <li>You may request access to, correction of, or deletion of your personal information, subject to limits under applicable law.</li>
              <li>You can control cookies through your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures designed to protect personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">International Data Transfers</h2>
            <p>
              Your information may be stored and processed in countries other than your own, where data protection laws
              may differ. We take steps to ensure appropriate safeguards are in place when transferring personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Children’s Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13, and we do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page and
              update the “Last updated” date above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us via our
              <Link href="/contact" className="text-blue-600 hover:underline"> contact page</Link>.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
