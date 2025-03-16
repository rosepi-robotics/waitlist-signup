"use client"

import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle } from "lucide-react"
import { Navbar } from "../components/navbar"
import { XIcon } from "../components/icons/x-icon"
import { InstagramIcon } from "../components/icons/instagram-icon"
import { DiscordIcon } from "../components/icons/discord-icon"
import { FacebookIcon } from "../components/icons/facebook-icon"
import { LinkedInIcon } from "../components/icons/linkedin-icon"

export default function Connect() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Connect content */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Connect With Us</h1>

          <p className="text-white text-lg mb-8">
            We'd love to hear from you! Connect with us on social media or reach out directly through our contact
            channels.
          </p>

          <div className="space-y-8">
            {/* Social Media Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <XIcon className="w-6 h-6 mr-3" />
                  <span>X (Twitter)</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <InstagramIcon className="w-6 h-6 mr-3" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FacebookIcon className="w-6 h-6 mr-3" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <LinkedInIcon className="w-6 h-6 mr-3" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <DiscordIcon className="w-6 h-6 mr-3" />
                  <span>Discord</span>
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:hello@rallie.com"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  <span>hello@rallie.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <span>Live Chat (Coming Soon)</span>
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-2">Join Our Newsletter</h2>
              <p className="text-white/80 mb-4">Stay updated with our latest news, product updates, and tennis tips.</p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-white/90 transition-colors"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Connect with other tennis enthusiasts, share tips, and be the first to hear about our product updates and
            special offers.
          </p>

          <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-white/10 flex items-center justify-center">
            <p className="text-lg font-medium">Community Forum Coming Soon</p>
          </div>

          <p>
            We're building a community of tennis players who are passionate about improving their game. Sign up for our
            waitlist to be notified when our community forum launches.
          </p>
        </div>
      </div>
    </main>
  )
}

