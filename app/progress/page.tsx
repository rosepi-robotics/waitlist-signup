"use client"

import { Calendar, Youtube, Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { WaitlistForm } from "../components/waitlist-form"

export default function ProgressPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Set initial value
    handleResize()

    // Listen for window resize events
    window.addEventListener("resize", handleResize)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="bg-gray-800 min-h-screen text-white relative overflow-hidden">
      {/* Organic flowing shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <Navbar />
      <main className="container relative flex flex-col lg:flex-row gap-6 py-8">
        <div className="absolute -left-10 top-1/2 z-10 -translate-y-1/2 rounded-full bg-orange-500/20 p-2 hidden lg:block">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="font-semibold text-3xl text-white">Progress Updates</h1>
          <p className="text-white/70">Stay up-to-date on our progress as we build the future of tennis training.</p>

          {/* June Update - NEW */}
          <section className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-white/70">June 23, 2025</span>
              <span className="text-sm text-white/70">•</span>
              <span className="text-sm text-white/70">5 min read</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              June Update: First Field Test Success, New Logo, and AI Progress
            </h2>

            {/* Field Test Success with Video */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🎾 First Field Test - Complete Success!
              </h3>
              <p className="text-white/80 mb-4">
                We did our first field test and the results exceeded our expectations! The system is working perfectly,
                creating incredibly fast and strong balls with its compact body. We've also tested topspin and backspin
                - both worked flawlessly!
              </p>

              {/* Field Test Video */}
              <div className="mb-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <video
                    src="/videos/rallie-field-test.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-white/60">First field test footage - June 2025</p>
              </div>

              <p className="text-white/80 mb-4">
                We'll be posting comparison videos of Rallie vs. other machines' top speed on YouTube. Be sure to
                subscribe to our channel to catch all the action!
              </p>
              <a
                href="https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Youtube className="h-4 w-4" />
                Subscribe to our YouTube Channel
              </a>
            </div>

            {/* New Logo */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                ✨ Rallie Got a New Logo!
              </h3>
              <div className="bg-white/5 rounded-lg p-6 mb-4">
                <img src="/images/rallie-logo-black.png" alt="New Rallie Logo" className="h-20 mx-auto mb-4" />
                <p className="text-white/60 text-center text-sm">Our fresh new logo design</p>
              </div>

              {/* Placeholder spots for more assets */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-lg p-8 border-2 border-dashed border-white/20 flex items-center justify-center">
                  <p className="text-white/40 text-sm text-center">More assets coming soon...</p>
                </div>
                <div className="bg-white/5 rounded-lg p-8 border-2 border-dashed border-white/20 flex items-center justify-center">
                  <p className="text-white/40 text-sm text-center">More assets coming soon...</p>
                </div>
              </div>
            </div>

            {/* AI Algorithm Progress */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🤖 AI Algorithm Taking Shape
              </h3>
              <p className="text-white/80 mb-4">
                Our AI player tracking system is making incredible progress. Check out this demo of our player detection
                and tracking algorithm in action:
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-white/20">
                  <div className="text-center">
                    <div className="animate-pulse mb-2">🎯</div>
                    <p className="text-white/60 text-sm">Player Tracking Demo GIF</p>
                    <p className="text-white/40 text-xs">(Coming soon)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Next */}
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">🔮 What to Expect Next</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Pitch & Oscillation Testing</h4>
                    <p className="text-white/70 text-sm">
                      Next week we'll be testing the pitch and oscillation features. It's designed to cover the full
                      court and produce smashes up to 8 meters! Keep an eye on our YouTube channel and newsletter for
                      test videos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Industrial Design Process</h4>
                    <p className="text-white/70 text-sm">
                      We just started the Industrial Design process! Currently we're in the ideation stage. We'll post a
                      survey on ID preferences in early July to get your input on the final design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* May Update */}
          <section className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-white/70">May 15, 2025</span>
              <span className="text-sm text-white/70">•</span>
              <span className="text-sm text-white/70">3 min read</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">May Update: Prototype V1 Complete and Testing Begins</h2>

            {/* Prototype Complete */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                ✅ Prototype V1 Complete!
              </h3>
              <p className="text-white/80 mb-4">
                We're thrilled to announce that Prototype V1 is officially complete! This marks a major milestone in our
                journey to revolutionize tennis training.
              </p>
              <p className="text-white/80 mb-4">
                The prototype includes all core functionalities: ball feeding mechanism, speed control, and basic
                trajectory adjustments.
              </p>
            </div>

            {/* Testing Phase */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🧪 Testing Phase Underway
              </h3>
              <p className="text-white/80 mb-4">
                We've kicked off the testing phase with a series of rigorous trials. Our team is analyzing performance
                metrics, identifying areas for improvement, and fine-tuning the system for optimal performance.
              </p>
              <p className="text-white/80 mb-4">
                Initial results are promising, and we're excited to share more detailed findings in our next update.
              </p>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">🚀 Next Steps</h3>
              <ul className="list-disc pl-5 text-white/80">
                <li>Refine ball feeding mechanism for increased reliability.</li>
                <li>Implement advanced trajectory control algorithms.</li>
                <li>Design user-friendly interface for seamless operation.</li>
              </ul>
            </div>
          </section>

          {/* March Update */}
          <section className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-white/70">March 1, 2025</span>
              <span className="text-sm text-white/70">•</span>
              <span className="text-sm text-white/70">2 min read</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">March Update: Project Kickoff and Initial Planning</h2>

            {/* Project Kickoff */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🚀 Project Rallie: Let's Go!
              </h3>
              <p className="text-white/80 mb-4">
                We're officially underway! The team is assembled, and we've laid out the initial project roadmap.
                Exciting times ahead as we embark on this journey to revolutionize tennis training.
              </p>
              <p className="text-white/80 mb-4">
                Our primary focus for March is finalizing the design specifications and sourcing key components.
              </p>
            </div>

            {/* Initial Planning */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🗺️ Initial Planning and Design
              </h3>
              <p className="text-white/80 mb-4">
                We're currently in the process of designing the first prototype. This includes finalizing the mechanical
                design, electrical schematics, and software architecture.
              </p>
              <p className="text-white/80 mb-4">
                We're also exploring different materials and manufacturing processes to ensure the highest quality and
                performance.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Join the Waitlist</h3>
            <p className="text-white/70 mb-4">
              Be the first to know when Rallie is available and get exclusive early bird discounts.
            </p>
            <WaitlistForm />
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Our Journey</h3>
            <p className="text-white/70 mb-4">
              Stay connected with us on social media for real-time updates, behind-the-scenes content, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
