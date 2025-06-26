"use client"

import { useState, useEffect } from "react"
import { WaitlistForm } from "./components/waitlist-form"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Award,
  Users,
  TrendingUp,
  Play,
  Calendar,
  Clock,
  Bot,
  Layers,
  ScanEye,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { trackEvent } from "./utils/analytics"

export default function Home() {
  const [waitlistCount, setWaitlistCount] = useState(247)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 200)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)

    if (!isExpanded) {
      setTimeout(() => {
        const expandButton = document.getElementById("continue-reading-button")
        if (expandButton) {
          const yOffset = -100
          const y = expandButton.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900 overflow-hidden relative">
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
        className="absolute top-0 left-1/4 w-[700px] h-[500px] blur-3xl animate-slow-pulse opacity-80 transform rotate-12"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 30% 40%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 45%, 
            rgba(34, 197, 94, 0.8) 100%)`,
          borderRadius: "60% 40% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/3 right-1/6 w-[600px] h-[400px] blur-3xl opacity-85 transform -rotate-45"
        style={{
          background: `radial-gradient(ellipse 70% 90% at 60% 30%, 
            rgba(59, 130, 246, 1.0) 0%, 
            rgba(251, 146, 60, 1.0) 60%, 
            rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "30% 70% 70% 30%",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] blur-3xl animate-slow-pulse opacity-75 transform rotate-45"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 40% 60%, 
            rgba(34, 197, 94, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 50%, 
            rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "40% 60% 60% 40%",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[480px] h-[380px] blur-3xl opacity-80 transform -rotate-30"
        style={{
          background: `radial-gradient(ellipse 75% 85% at 50% 70%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(34, 197, 94, 0.8) 40%, 
            rgba(59, 130, 246, 0.8) 100%)`,
          borderRadius: "70% 30% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/2 left-0 w-[420px] h-[350px] blur-3xl animate-slow-pulse opacity-70 transform rotate-75"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 20% 50%, 
            rgba(168, 85, 247, 1.0) 0%, 
            rgba(251, 146, 60, 1.0) 80%)`,
          borderRadius: "50% 50% 80% 20%",
        }}
      />

      <div
        className="absolute bottom-1/2 right-0 w-[460px] h-[320px] blur-3xl opacity-75 transform -rotate-60"
        style={{
          background: `radial-gradient(ellipse 80% 95% at 70% 30%, 
            rgba(34, 197, 94, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 70%)`,
          borderRadius: "20% 80% 40% 60%",
        }}
      />

      <div
        className="absolute top-3/4 left-1/2 w-[380px] h-[280px] blur-3xl animate-slow-pulse opacity-70 transform rotate-15"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 60% 40%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "80% 20% 60% 40%",
        }}
      />

      <div
        className="absolute top-1/6 right-1/2 w-[340px] h-[260px] blur-3xl opacity-75 transform -rotate-75"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 40% 60%, 
            rgba(59, 130, 246, 0.8) 0%, 
            rgba(34, 197, 94, 1.0) 50%, 
            rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "60% 40% 20% 80%",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center">
            {/* Left Column - Content */}
            <div className="space-y-8 max-w-4xl mx-auto text-center">
              <div className="space-y-6">
                <br></br>

                <h2 className="text-5xl lg:text-6xl font-extralight text-gray-700 text-center">
                  Intelligent Tennis Training System
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
                  Precision-engineered robotics meets artificial intelligence. Experience the future of tennis training.
                </p>
              </div>

              {/* Technical Specs */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-light text-gray-900">80</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">MPH Launch Speed</div>
                </div>
                <div className="space-y-2 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-light text-gray-900">Full Court</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Ball Placement Coverage</div>
                </div>
                <div className="space-y-2 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-light text-gray-900">8.1m</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Lob for Overhead Smashing</div>
                </div>
                <div className="space-y-2 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-light text-gray-900">30 lbs</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Lightweight and Portable </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link href="/survey">
                  <Button
                    size="lg"
                    className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg"
                    onClick={() => trackEvent("button_click", "hero", "survey_cta")}
                  >
                    JOIN BETA PROGRAM
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/brand-story">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                    onClick={() => trackEvent("button_click", "hero", "learn_more")}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    WATCH DEMO
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center space-x-8 pt-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span>{waitlistCount.toLocaleString()} ON THE WAITLIST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">ADVANCED ENGINEERING</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Breakthrough innovations in robotics, AI, and precision manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Multi-Motor System */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-orange-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">MULTI-MOTOR&nbsp;SYSTEM</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium brushless motors deliver ultra-precise topspin and backspin at speeds up to 80&nbsp;MPH —
                covering the full court in one second. Servo-driven oscillation ensures pinpoint ball placement anywhere
                on the court.
              </p>
            </div>

            {/* 2. Compact Architecture */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-orange-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">COMPACT ARCHITECTURE</h3>
              <p className="text-gray-600 leading-relaxed">
                30 % smaller and lighter than traditional machines—just 30 lbs&nbsp;(13 kg) with zero performance
                compromise. Rallie Potrero is the most portable high-performance tennis ball machine on the market.
              </p>
            </div>

            {/* 3. AI Vision System */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <ScanEye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">INTELLIGENT AI VISION&nbsp;SYSTEM</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time computer vision tracks player position and movement. Adaptive algorithms optimise ball
                placement for fully personalised training—<span className="font-medium">with no extra hardware.</span>
              </p>
            </div>

            {/* 4. Unlimited Drills */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-green-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">UNLIMITED CUSTOMIZABLE&nbsp;DRILLS</h3>
              <p className="text-gray-600 leading-relaxed">
                Access curated NTRP-level training programmes or build <em>your own</em> custom drills and share them
                with the community. Level-up together—beginner to pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/sophie-founder-collage.png"
                alt="Sophie Luo working on Rallie tennis ball machine development and testing"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">ENGINEERED BY EXPERTS</h2>
                <p className="text-xl text-gray-600">Sophie Luo, Robotics Engineer & Tennis Enthusiast</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">UC Berkeley & UPenn Robotics Engineering</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Early team member @ Rokid (AR/AI Unicorn)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Manufacturing partnerships: Foxconn, Flextronics, Goertek</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-700 text-lg">
                "Existing solutions failed to meet the precision and reliability standards required for serious
                training. Rallie represents a complete reimagining of tennis ball machine technology."
              </blockquote>

              <Link href="/brand-story">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg"
                  onClick={() => trackEvent("button_click", "founder", "read_story")}
                >
                  READ FULL STORY
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">DEVELOPMENT STATUS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time updates on engineering progress and prototype testing.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-sm">
            {/* Latest Update - June 23 */}
            <div className="pb-10 border-b border-gray-200 mb-10">
              <div className="flex items-center text-gray-500 mb-4 space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                  <time dateTime="2025-06-23">JUNE 23, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-blue-500" />
                  <span>5 MIN READ</span>
                </div>
              </div>

              <h3 className="text-2xl font-light text-gray-900 mb-6">FIRST FIELD TEST SUCCESS + NEW LOGO REVEAL</h3>

              {/* Field Test Success with Video */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  FIELD TEST BREAKTHROUGH
                </h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="mb-6 text-gray-700">
                    We did our first field test and the results exceeded expectations! The system is working perfectly,
                    creating incredibly fast and strong balls with its compact design.
                  </p>

                  {/* Field Test Video */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 border border-gray-200">
                      <video
                        src="/videos/rallie-field-test.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500">FIRST FIELD TEST - JUNE 2025</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-2">✅ Topspin</div>
                      <div className="text-sm text-gray-600">Perfect spin generation</div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-2">✅ Backspin</div>
                      <div className="text-sm text-gray-600">Precise control achieved</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {"We'll be posting comparison videos of Rallie vs. other machines' top speed on YouTube."}
                    <a
                      href="https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 ml-1 underline"
                    >
                      Subscribe to our channel
                    </a>{" "}
                    to see the results first!
                  </p>
                </div>
              </div>

              {/* New Logo Section */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                  <Award className="mr-2 h-5 w-5 text-orange-500" />
                  NEW LOGO REVEAL
                </h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="mb-6 text-gray-700">
                    Rallie got a fresh new look! Our updated logo reflects our commitment to precision and modern
                    design.
                  </p>
                  <div className="flex justify-center mb-6">
                    <div className="bg-white rounded-lg p-8 border border-gray-200">
                      <img src="/images/rallie-logo-black.png" alt="New Rallie Logo" className="h-16 w-auto" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/70 p-4 rounded-lg border border-gray-200 border-dashed">
                      <p className="text-center text-gray-500 text-sm">More assets coming soon...</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg border border-gray-200 border-dashed">
                      <p className="text-center text-gray-500 text-sm">More assets coming soon...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Algorithm Progress */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                  <Smartphone className="mr-2 h-5 w-5 text-blue-500" />
                  AI ALGORITHM DEVELOPMENT
                </h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="mb-4 text-gray-700">
                    The AI algorithm is taking shape! Our computer vision system can now track player movements in
                    real-time.
                  </p>
                  <div className="bg-white/70 p-4 rounded-lg border border-gray-200 border-dashed">
                    <p className="text-center text-gray-500 text-sm">Player tracking demo GIF coming soon...</p>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                  <TrendingUp className="mr-2 h-5 w-5 text-orange-500" />
                  {"WHAT'S NEXT"}
                </h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="text-gray-900 font-medium mb-1">Pitch & Oscillation Testing</h5>
                        <p className="text-gray-600 text-sm">
                          {
                            "Next week we'll test the full court coverage system, designed to produce smashes up to 8 meters. Watch our YouTube channel for test videos."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="text-gray-900 font-medium mb-1">Industrial Design Process</h5>
                        <p className="text-gray-600 text-sm">
                          {
                            "We've started the Industrial Design phase! Currently in ideation stage. Look for our ID preferences survey in early July."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Reading Button */}
            <div id="continue-reading-button" className="flex justify-center mt-6">
              <button
                onClick={toggleExpand}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors px-6 py-3 rounded-lg text-gray-700 font-medium border border-gray-200"
              >
                {isExpanded ? (
                  <>
                    SHOW LESS <ChevronUp className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    CONTINUE READING <ChevronDown className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>

            {/* Call to action for full progress */}
            <div className="pt-8 text-center">
              <Link href="/progress">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg"
                  onClick={() => trackEvent("button_click", "progress", "view_all")}
                >
                  VIEW ALL UPDATES
                  <ArrowRight className="ml-2 w-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">JOIN THE BETA PROGRAM</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Limited access to early testing phase. Summer 2025 deployment.
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-gray-900 mb-2">EARLY ACCESS</h3>
              <p className="text-gray-600">Exclusive updates and beta testing opportunities</p>
            </div>

            <WaitlistForm onSuccess={handleSuccess} />

            <div className="mt-4 text-center">
              <p className="text-gray-500 font-medium text-sm">{waitlistCount.toLocaleString()}+ REGISTERED</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/survey">
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg"
                onClick={() => trackEvent("button_click", "cta", "survey")}
              >
                COMPLETE SURVEY - WIN $100 GIFT CARD
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  )
}
