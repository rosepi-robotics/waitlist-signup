"use client"

import { useState, useEffect } from "react"
import { Mail, MessageCircle, Gift } from "lucide-react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { XIcon } from "../components/icons/x-icon"
import { InstagramIcon } from "../components/icons/instagram-icon"
import { DiscordIcon } from "../components/icons/discord-icon"
import { FacebookIcon } from "../components/icons/facebook-icon"
import { WaitlistForm } from "../components/waitlist-form"

export default function Progress() {
  const [waitlistCount, setWaitlistCount] = useState(0)

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 100)
  }

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-52 pb-12 sm:px-6 lg:px-8">
        {/* Connect content */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Follow Our Progress</h1>

          <p className="text-white text-lg mb-8">
            Join our waitlist to stay updated on our journey to build the most compact, durable, and intelligent tennis
            ball machine ever. Connect with us on social media or reach out directly through our contact channels.
          </p>

          {/* Waitlist Section */}
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Join Our Waitlist</h2>
            <p className="text-white/80 mb-6">
              Be the first to know when our revolutionary tennis ball machine launches. Enter your email below to join
              our waitlist and receive exclusive updates.
            </p>

            <WaitlistForm onSuccess={handleSuccess} />

            {waitlistCount > 0 && (
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {/* Social Media Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a
                  href="https://x.com/sophie_taco"
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
                  href="https://www.facebook.com/groups/963981362613884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FacebookIcon className="w-6 h-6 mr-3" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://discord.gg/ptaTkcbQ"
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
          </div>
        </div>

        {/* Why Join Section */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h2 className="text-2xl font-semibold mb-4">Why Join Our Waitlist?</h2>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-6">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <Gift className="mr-2 h-5 w-5 text-green-400" />
              Exclusive Benefits
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Be the first to know when our product launches</li>
              <li>Get exclusive early-bird pricing</li>
              <li>Receive insider updates on product development</li>
              <li>Opportunity to provide feedback and shape the final product</li>
            </ul>
          </div>

          <p className="mb-6">
            We're building a community of tennis players who are passionate about improving their game. Join our
            waitlist to be part of this exciting journey.
          </p>

          <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-white/10 flex items-center justify-center">
            <p className="text-lg font-medium">Community Forum Coming Soon</p>
          </div>

          <p>
            Connect with other tennis enthusiasts, share tips, and be the first to hear about our product updates and
            special offers.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

