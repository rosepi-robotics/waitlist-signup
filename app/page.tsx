"use client"

import { useState, useEffect } from "react"
import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { SurveyBanner } from "./components/survey-banner"
import { WaitlistForm } from "./components/waitlist-form"
import { XIcon } from "./components/icons/x-icon"
import { InstagramIcon } from "./components/icons/instagram-icon"
import { DiscordIcon } from "./components/icons/discord-icon"
import { FacebookIcon } from "./components/icons/facebook-icon"
import Link from "next/link"
import { Rajdhani } from "next/font/google"
import {
  Mail,
  Gift,
  Calendar,
  Clock,
  ArrowRight,
  Award,
  PenToolIcon as Tool,
  Search,
  Cpu,
  Code,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { ScrollToTop } from "./components/scroll-to-top"

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

const backgroundStyle = `
.tennis-ball {
  position: fixed;
  top: 12%;
  right: 9%;
  width: 300px;
  height: 300px;
  background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-26_at_6.05.43_PM-removebg-preview-Y5RhkcjuDaaicvGMYVNuiu6F64cnma.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  pointer-events: none;
  z-index: 0;
  animation: float 6s ease-in-out infinite;
}

.green-blob {
  position: fixed;
  bottom: 15%;
  left: 5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, rgba(74, 222, 128, 0) 70%);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

.green-blob-2 {
  position: fixed;
  top: 30%;
  right: 15%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0) 70%);
  border-radius: 50%;
  filter: blur(30px);
  pointer-events: none;
  z-index: 0;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.content {
  position: relative;
  z-index: 2;
  padding-top: 6rem;
}

.progress-section {
  position: relative;
  z-index: 2;
  padding-top: 3rem;
  padding-bottom: 6rem;
}

.content-fade {
  position: relative;
}

.content-fade::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, rgba(4, 45, 98, 0), rgba(4, 45, 98, 0.9) 80%, rgba(4, 45, 98, 1));
  pointer-events: none;
}
`

export default function Home() {
  const [waitlistCount, setWaitlistCount] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 100)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)

    // If expanding, scroll to the continue reading button position
    if (!isExpanded) {
      setTimeout(() => {
        const expandButton = document.getElementById("continue-reading-button")
        if (expandButton) {
          const yOffset = -100 // Offset to position the content slightly above the button
          const y = expandButton.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 55%, #4ade80 100%)",
      }}
    >
      <style jsx global>
        {backgroundStyle}
      </style>
      <Navbar />
      <div className="tennis-ball"></div>
      <div className="green-blob"></div>
      <div className="green-blob-2"></div>
      <div className="content container mx-auto px-6 lg:px-8">
        <WaitlistSignup />
      </div>

      {/* Progress Section */}
      <div id="progress" className="progress-section container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main content container */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Development Progress</h1>

            <p className="text-white text-lg mb-8">
              Follow along as we build the most compact, durable, and intelligent tennis ball machine ever. I'll be
              posting regular updates about our development process, challenges, and milestones.
            </p>

            {/* Progress Updates Section */}
            <div className="space-y-12 mb-12">
              {/* Latest Update - May 9 */}
              <div className="pb-10 border-b border-white/10">
                <div className="flex items-center text-white/80 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime="2025-05-09">May 9, 2025</time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>4 min read</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  May Update: Draw Winner, Development Progress, and My Take on the New Kickstarter Campaigns (AceMate,
                  Tenniix)
                </h2>

                {/* May Draw Winner Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-yellow-400" />
                    May Draw Winner Announcement
                  </h3>
                  <div className="bg-white/10 rounded-xl p-5 mb-4">
                    <p className="mb-3">
                      Congratulations to <span className="font-bold text-green-400">Delice</span> for winning our May
                      $100 Tennis Warehouse gift card draw!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12591746755395_.pic.jpg-JEH1lyUrF7nv5XFtCspSQFgwaFIyoa.jpeg"
                          alt="May drawing results showing Delice as the winner"
                          className="w-full rounded-lg border border-white/10"
                        />
                        <p className="text-xs text-center mt-2 text-white/70">Drawing results from May 9, 2025</p>
                      </div>

                      <div className="bg-white/5 p-3 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%209.41.29%E2%80%AFAM-x6glsozlin4v7c89FpzPF0qW73BLYL.png"
                          alt="Tennis Warehouse Gift Card"
                          className="w-full rounded-lg border border-white/10"
                        />
                        <p className="text-xs text-center mt-2 text-white/70">$100 Tennis Warehouse Gift Card</p>
                      </div>
                    </div>

                    <p className="mb-3">
                      Delice, I will reach out to you in a separate email and have this gift card sent to your email.
                    </p>

                    <p>
                      Thank you to everyone who participated in our survey and referred friends! Your feedback is
                      invaluable as we continue to develop our tennis ball machine.
                    </p>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className={`relative ${!isExpanded ? "content-fade max-h-[600px] overflow-hidden" : ""}`}>
                  {/* Development Update Section */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Tool className="mr-2 h-5 w-5 text-blue-400" />
                      Development Progress
                    </h3>

                    {/* Hardware Section */}
                    <div className="bg-white/5 rounded-xl p-5 mb-6">
                      <h4 className="text-lg font-medium mb-3 flex items-center">
                        <Cpu className="mr-2 h-4 w-4 text-green-400" />
                        Hardware
                      </h4>

                      <div className="space-y-4">
                        <p>We're making exciting progress on the hardware front!</p>

                        <p>
                          We've successfully assembled our first prototype using RoboMaster motors and 3D printed parts
                          to test our "dual flywheel launching" concept. The results are promising - we achieved launch
                          speeds of ~75mph, confirming that our design direction is on the right track. For the pitch
                          and oscillation mechanisms, we implemented custom-designed and 3D-printed gears, though we did
                          identify some durability challenges that need to be addressed.
                        </p>

                        <p>
                          Based on these learnings, we're now advancing to the next development phase. Instead of
                          continuing with off-the-shelf motors (like the RM 3508), we've designed custom motors and sent
                          the specifications to a specialized manufacturer. On the mechanical side, one key improvement
                          is the implementation of a worm gear shaft system, which should significantly enhance
                          durability and control precision. Additionally, we're testing a new flywheel design that
                          promises to further reduce the overall volume and weight of the machine - making it even more
                          portable and user-friendly.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-white/10 rounded-xl overflow-hidden">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.22.54%E2%80%AFAM-ubPoz1qBnWwFqAIf3p0YHyEHsVZ9sh.png"
                              alt="3D model of our first prototype showing RoboMaster motors and gear assembly"
                              className="w-full h-auto"
                            />
                            <p className="p-3 text-sm text-center">
                              First prototype design with RoboMaster motors and custom gears
                            </p>
                          </div>
                          <div className="bg-white/10 rounded-xl overflow-hidden">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.23.14%E2%80%AFAM-vYx1ykFGdzHTxkcwfHMKTA09RwsZiN.png"
                              alt="Close-up view of the dual flywheel launching mechanism"
                              className="w-full h-auto"
                            />
                            <p className="p-3 text-sm text-center">Close-up of the dual flywheel launching system</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Software Section */}
                    <div className="bg-white/5 rounded-xl p-5 mb-6">
                      <h4 className="text-lg font-medium mb-3 flex items-center">
                        <Code className="mr-2 h-4 w-4 text-blue-400" />
                        Software
                      </h4>

                      <div className="space-y-4">
                        <p>
                          On the software front, we've made significant progress! We've developed a functional app that
                          can detect player position and poses in real-time, and through our custom reasoning module,
                          determine the optimal ball placement for your practice session.
                        </p>

                        <p>
                          We've also started experimenting with training custom models to better adapt to various
                          lighting conditions and camera positions, which will ensure consistent performance whether
                          you're playing indoors, outdoors, or in changing weather conditions. If you have expertise in
                          computer vision, I'd love to connect and discuss potential collaborations!
                        </p>

                        <p>
                          Now that the core functionalities of phase 1 are developed and being tested, our next focus is
                          enhancing the user interface and experience. If you're interested in being an early tester,
                          please reach out and I can add you to our TestFlight (sorry it has minimal UI for now).
                        </p>

                        <p>
                          I've been monitoring feedback from users of other ball machines, and features like offline
                          editing mode and real-time ball speed and spin data displaying on app are often requested.
                          Don't worry, these will all be standard features in our app - we are the only team on the
                          market that understands both technology and tennis.
                        </p>
                      </div>
                    </div>

                    {/* Other Updates Section */}
                    <div className="bg-white/5 rounded-xl p-5">
                      <h4 className="text-lg font-medium mb-3 flex items-center">
                        <MoreHorizontal className="mr-2 h-4 w-4 text-purple-400" />
                        Other Updates
                      </h4>

                      <div className="space-y-4">
                        <p>
                          We expect to have several EVT (Engineering Verification Test) units ready by late July or
                          early August. Once these are shipped to the States, we plan to host several user testing
                          events in the Bay Area this summer. If you're local and interested in being among the first to
                          try our prototype, please email us at{" "}
                          <a href="mailto:hello@rallie.tennis" className="text-blue-300 hover:underline">
                            hello@rallie.tennis
                          </a>
                          . We're particularly looking for players across different skill levels (from beginners to
                          advanced) to provide diverse feedback.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Competitor Analysis Section - Shortened for homepage */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Search className="mr-2 h-5 w-5 text-purple-400" />
                      My Thoughts on Acemate and Tenniix
                    </h3>

                    <div className="space-y-4">
                      <p>
                        As some of you might have noticed, there are two projects that recently launched Kickstarter
                        campaigns: AceMate and Tenniix. Both feature autonomous mobility for "rallying style" playing.
                      </p>

                      <p>
                        From what I'm seeing in the pictures, both products present significant risks in terms of
                        durability, battery limitations, and potentially overadvertised capabilities. As someone who's
                        been working on autonomous robotics, I don't see a real rallying robot that's durable on outdoor
                        courts with compact design and 4+ hours of battery life coming in the next 2 years.
                      </p>

                      <p>
                        <Link href="/progress" className="text-blue-300 hover:underline">
                          Read my full analysis on the Progress page →
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Development</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Giveaway</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Competitor Analysis</span>
                  </div>
                </div>

                {/* Continue Reading Button */}
                <div id="continue-reading-button" className="flex justify-center mt-6">
                  <button
                    onClick={toggleExpand}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-xl text-white font-medium"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Continue Reading <ChevronDown className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Previous Updates - Shortened */}
              <div className="pb-10 border-b border-white/10">
                <div className="flex items-center text-white/80 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime="2025-03-22">March 22, 2025</time>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Development Update 3/22 - 3D printed parts, motors and other issues
                </h2>

                <p className="mb-4">
                  The 3D printed parts have arrived! There's some issue with the precision of these components,
                  particularly the section for ball ejection. We'll need to reprint these parts to ensure a proper fit
                  and function.
                </p>

                <p className="mb-4">
                  <Link href="/progress" className="text-blue-300 hover:underline">
                    Read more about our March updates →
                  </Link>
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Assembly</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">3D Printing</span>
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
                  Be the first to know when our revolutionary tennis ball machine launches. Enter your email below to
                  join our waitlist and receive exclusive updates.
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
      </div>

      <Footer />
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(23 23 23)",
            color: "white",
            border: "1px solid rgb(63 63 70)",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
      <SurveyBanner />
      <ScrollToTop />
    </main>
  )
}
