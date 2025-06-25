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
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
      `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Organic Flowing Shapes with Bright Colors */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[500px] blur-3xl animate-slow-pulse opacity-30 transform rotate-12"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 30% 40%, 
        rgba(251, 146, 60, 1.0) 0%, 
        rgba(59, 130, 246, 0.8) 45%, 
        rgba(34, 197, 94, 0.8) 100%)`,
          borderRadius: "60% 40% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/3 right-1/6 w-[600px] h-[400px] blur-3xl opacity-40 transform -rotate-45"
        style={{
          background: `radial-gradient(ellipse 70% 90% at 60% 30%, 
        rgba(59, 130, 246, 1.0) 0%, 
        rgba(251, 146, 60, 1.0) 60%, 
        rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "30% 70% 70% 30%",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] blur-3xl animate-slow-pulse opacity-30 transform rotate-45"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 40% 60%, 
        rgba(34, 197, 94, 1.0) 0%, 
        rgba(59, 130, 246, 0.8) 50%, 
        rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "40% 60% 60% 40%",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[480px] h-[380px] blur-3xl opacity-30 transform -rotate-30"
        style={{
          background: `radial-gradient(ellipse 75% 85% at 50% 70%, 
        rgba(251, 146, 60, 1.0) 0%, 
        rgba(34, 197, 94, 0.8) 40%, 
        rgba(59, 130, 246, 0.8) 100%)`,
          borderRadius: "70% 30% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/2 left-0 w-[420px] h-[350px] blur-3xl animate-slow-pulse opacity-30 transform rotate-75"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 20% 50%, 
        rgba(168, 85, 247, 1.0) 0%, 
        rgba(251, 146, 60, 1.0) 80%)`,
          borderRadius: "50% 50% 80% 20%",
        }}
      />

      <div
        className="absolute bottom-1/2 right-0 w-[460px] h-[320px] blur-3xl opacity-30 transform -rotate-60"
        style={{
          background: `radial-gradient(ellipse 80% 95% at 70% 30%, 
        rgba(34, 197, 94, 1.0) 0%, 
        rgba(59, 130, 246, 0.8) 70%)`,
          borderRadius: "20% 80% 40% 60%",
        }}
      />

      <div
        className="absolute top-3/4 left-1/2 w-[380px] h-[280px] blur-3xl animate-slow-pulse opacity-30 transform rotate-15"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 60% 40%, 
        rgba(251, 146, 60, 1.0) 0%, 
        rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "80% 20% 60% 40%",
        }}
      />

      <div
        className="absolute top-1/6 right-1/2 w-[340px] h-[260px] blur-3xl opacity-30 transform -rotate-75"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 40% 60%, 
        rgba(59, 130, 246, 0.8) 0%, 
        rgba(34, 197, 94, 1.0) 50%, 
        rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "60% 40% 20% 80%",
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row gap-6 py-8">
        <div className="absolute -left-2 lg:-left-10 top-1/2 z-10 -translate-y-1/2 rounded-full bg-orange-500/20 p-2 hidden lg:block">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="font-semibold text-3xl text-gray-900">Progress Updates</h1>
          <p className="text-gray-600">Stay up-to-date on our progress as we build the future of tennis training.</p>

          {/* June Update - NEW */}
          <section className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-gray-600">June 23, 2025</span>
              <span className="text-sm text-gray-600">•</span>
              <span className="text-sm text-gray-600">5 min read</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              June Update: First Field Test Success, New Logo, and AI Progress
            </h2>

            {/* Field Test Success with Video */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🎾 First Field Test - Complete Success!
              </h3>
              <p className="text-gray-700 mb-4">
                We did our first field test and the results exceeded our expectations! The system is working perfectly,
                creating incredibly fast and strong balls with its compact body. We've also tested topspin and backspin
                - both worked flawlessly!
              </p>

              {/* Field Test Video */}
              <div className="mb-6">
                <div className="bg-white/5 rounded-lg p-4 border border-gray-200">
                  <video
                    src="/videos/rallie-field-test.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-gray-500">First field test footage - June 2025</p>
              </div>

              <p className="text-gray-700 mb-4">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                ✨ Rallie Got a New Logo!
              </h3>
              <div className="bg-white/5 rounded-lg p-6 mb-4">
                <img src="/images/rallie-logo-black.png" alt="New Rallie Logo" className="h-20 mx-auto mb-4" />
                <p className="text-gray-500 text-center text-sm">Our fresh new logo design</p>
              </div>

              {/* Placeholder spots for more assets */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-lg p-8 border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <p className="text-gray-400 text-sm text-center">More assets coming soon...</p>
                </div>
                <div className="bg-white/5 rounded-lg p-8 border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <p className="text-gray-400 text-sm text-center">More assets coming soon...</p>
                </div>
              </div>
            </div>

            {/* AI Algorithm Progress */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🤖 AI Algorithm Taking Shape
              </h3>
              <p className="text-gray-700 mb-4">
                Our AI player tracking system is making incredible progress. Check out this demo of our player detection
                and tracking algorithm in action:
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <div className="animate-pulse mb-2">🎯</div>
                    <p className="text-gray-500 text-sm">Player Tracking Demo GIF</p>
                    <p className="text-gray-400 text-xs">(Coming soon)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Next */}
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🔮 What to Expect Next
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Pitch & Oscillation Testing</h4>
                    <p className="text-gray-600 text-sm">
                      Next week we'll be testing the pitch and oscillation features. It's designed to cover the full
                      court and produce smashes up to 8 meters! Keep an eye on our YouTube channel and newsletter for
                      test videos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Industrial Design Process</h4>
                    <p className="text-gray-600 text-sm">
                      We just started the Industrial Design process! Currently we're in the ideation stage. We'll post a
                      survey on ID preferences in early July to get your input on the final design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* May Update */}
          <section className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-gray-600">May 15, 2025</span>
              <span className="text-sm text-gray-600">•</span>
              <span className="text-sm text-gray-600">3 min read</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              May Update: Prototype V1 Complete and Testing Begins
            </h2>

            {/* Prototype Complete */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                ✅ Prototype V1 Complete!
              </h3>
              <p className="text-gray-700 mb-4">
                We're thrilled to announce that Prototype V1 is officially complete! This marks a major milestone in our
                journey to revolutionize tennis training.
              </p>
              <p className="text-gray-700 mb-4">
                The prototype includes all core functionalities: ball feeding mechanism, speed control, and basic
                trajectory adjustments.
              </p>
            </div>

            {/* Testing Phase */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🧪 Testing Phase Underway
              </h3>
              <p className="text-gray-700 mb-4">
                We've kicked off the testing phase with a series of rigorous trials. Our team is analyzing performance
                metrics, identifying areas for improvement, and fine-tuning the system for optimal performance.
              </p>
              <p className="text-gray-700 mb-4">
                Initial results are promising, and we're excited to share more detailed findings in our next update.
              </p>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">🚀 Next Steps</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Refine ball feeding mechanism for increased reliability.</li>
                <li>Implement advanced trajectory control algorithms.</li>
                <li>Design user-friendly interface for seamless operation.</li>
              </ul>
            </div>
          </section>

          {/* March Update */}
          <section className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-gray-600">March 1, 2025</span>
              <span className="text-sm text-gray-600">•</span>
              <span className="text-sm text-gray-600">2 min read</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              March Update: Project Kickoff and Initial Planning
            </h2>

            {/* Project Kickoff */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🚀 Project Rallie: Let's Go!
              </h3>
              <p className="text-gray-700 mb-4">
                We're officially underway! The team is assembled, and we've laid out the initial project roadmap.
                Exciting times ahead as we embark on this journey to revolutionize tennis training.
              </p>
              <p className="text-gray-700 mb-4">
                Our primary focus for March is finalizing the design specifications and sourcing key components.
              </p>
            </div>

            {/* Initial Planning */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🗺️ Initial Planning and Design
              </h3>
              <p className="text-gray-700 mb-4">
                We're currently in the process of designing the first prototype. This includes finalizing the mechanical
                design, electrical schematics, and software architecture.
              </p>
              <p className="text-gray-700 mb-4">
                We're also exploring different materials and manufacturing processes to ensure the highest quality and
                performance.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Join the Waitlist</h3>
            <p className="text-gray-600 mb-4">
              Be the first to know when Rallie is available and get exclusive early bird discounts.
            </p>
            <WaitlistForm />
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Our Journey</h3>
            <p className="text-gray-600 mb-4">
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
