"use client"

import { useState, useEffect } from "react"
import { Mail, Gift, Calendar, Clock, ArrowRight } from "lucide-react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { XIcon } from "../components/icons/x-icon"
import { InstagramIcon } from "../components/icons/instagram-icon"
import { DiscordIcon } from "../components/icons/discord-icon"
import { FacebookIcon } from "../components/icons/facebook-icon"
import { WaitlistForm } from "../components/waitlist-form"
import Link from "next/link"
import { Rajdhani } from "next/font/google"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

// Define the gradient style for the logo
const logoGradientStyle = {
  background: "linear-gradient(to right, #c64f34, #ffd700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
}

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
      <div className="max-w-5xl mx-auto px-4 pt-52 pb-12 sm:px-6 lg:px-8">
        {/* Main content container - increased max-width from 3xl to 5xl to match other pages */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Development Progress</h1>

          <p className="text-white text-lg mb-8">
            Follow along as we build the most compact, durable, and intelligent tennis ball machine ever. I'll be
            posting regular updates about our development process, challenges, and milestones.
          </p>

          {/* Progress Updates Section */}
          <div className="space-y-12 mb-12">
            {/* Latest Update - March 22 */}
            <div className="pb-10 border-b border-white/10">
              <div className="flex items-center text-white/80 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime="2025-03-22">March 22, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 min read</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Development Update 3/22 - 3D printed parts, motors and other issues</h2>

              <p className="mb-4">
                The 3D printed parts have arrived! (maybe it's time to buy a 3D printer. Anyone has suggestions?) There's some issue with th precision of these components, particularly the section ball ejection. We'll need reprint these parts to
                ensure a proper fit and function.
              </p>

              <p className="mb-4">
                Additionally, we've successfully installed the yaw and pitch to change height and get oscilation. However, since we used some second-hand motors (on a tight budget for the prototype), these motors exhibit significant backlash, affecting its control capabilities.
                Thie controller works fined though. Will need to buy some new motors.
              </p>

              <p className="mb-6">
                While we await the arrival of the newly printed parts, we will proceed with soldering
                the necessary wiring. We also plan to replace the problematic motor to ensure the machine operates
                smoothly and meets our standards for quality and performance.
              </p>

               <p className="mb-6">
                I'll get back soon with updates and hopefully some videos to show! Keep updated!
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Assembly</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">3D Printing</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Motors</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Troubleshooting</span>
              </div>
            </div>
            {/* Second Update */}
            <div className="pb-10">
              <div className="flex items-center text-white/80 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime="2025-03-15">March 15, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>1 min read</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Project Kickoff: The Journey Begins</h2>

              <p className="mb-4">
                Today marks the official kickoff of the{" "}
                <span className={`${rajdhani.className} font-bold`} style={logoGradientStyle}>
                  rallie
                </span>{" "}
                tennis ball machine project! After months of research, planning, and initial designs, we're finally
                ready to begin the development process in earnest.
              </p>

              <p className="mb-4">
                I've finalized the core specifications for our first prototype and placed orders for the custom
                components we'll need. Our goal is to create a machine that's not just another ball launcher, but a true
                training partner for tennis players of all levels.
              </p>

              <p className="mb-6">
                I've also set up this progress page where I'll be sharing regular updates about our development journey.
                From technical challenges to exciting breakthroughs, you'll get an inside look at what it takes to bring
                a new product to life.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Kickoff</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Planning</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Design</span>
              </div>
            </div>
          </div>

          {/* Call to action for survey */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-10">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <Gift className="mr-2 h-5 w-5 text-green-400" />
              Help Shape Our Product
            </h3>
            <p className="mb-4">
              Your feedback is invaluable as we develop our tennis ball machine. Take our survey to share your
              experiences and preferences - and you could win a $100 Tennis Warehouse gift card!
            </p>
            <Link
              href="/survey"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-white/90 transition-colors"
            >
              Take Survey and Win $100 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Sidebar content in a separate container */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Waitlist Section */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Join Our Waitlist</h2>
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

            {/* Social Media Section */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://x.com/sophie_taco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <XIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">X (Twitter)</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/groups/963981362613884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="https://discord.gg/ptaTkcbQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <DiscordIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">Discord</span>
                </a>
                <a
                  href="mailto:hello@rallie.com"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors col-span-2"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="text-sm">hello@rallie.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

