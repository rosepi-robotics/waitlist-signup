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
  Target,
  Smartphone,
  Award,
  Users,
  TrendingUp,
  Play,
  Calendar,
  Clock,
  Cpu,
  Code,
  ChevronDown,
  ChevronUp,
  Layers,
  Settings,
} from "lucide-react"
import { trackEvent } from "./utils/analytics"

export default function Home() {
  const [waitlistCount, setWaitlistCount] = useState(1247)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 1200)
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
    <main className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Organic Flowing Shapes with Blended Orange & Blue */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[500px] blur-3xl animate-slow-pulse opacity-70 transform rotate-12"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 30% 40%, 
            rgba(251, 146, 60, 0.8) 0%, 
            rgba(59, 130, 246, 0.6) 45%, 
            rgba(251, 146, 60, 0.4) 100%)`,
          borderRadius: "60% 40% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/3 right-1/6 w-[600px] h-[400px] blur-3xl opacity-75 transform -rotate-45"
        style={{
          background: `radial-gradient(ellipse 70% 90% at 60% 30%, 
            rgba(59, 130, 246, 0.7) 0%, 
            rgba(251, 146, 60, 0.8) 60%, 
            rgba(147, 51, 234, 0.3) 100%)`,
          borderRadius: "30% 70% 70% 30%",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] blur-3xl animate-slow-pulse opacity-65 transform rotate-45"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 40% 60%, 
            rgba(249, 115, 22, 0.9) 0%, 
            rgba(29, 78, 216, 0.6) 50%, 
            rgba(251, 146, 60, 0.4) 100%)`,
          borderRadius: "40% 60% 60% 40%",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[480px] h-[380px] blur-3xl opacity-70 transform -rotate-30"
        style={{
          background: `radial-gradient(ellipse 75% 85% at 50% 70%, 
            rgba(251, 146, 60, 0.8) 0%, 
            rgba(29, 78, 216, 0.7) 40%, 
            rgba(249, 115, 22, 0.5) 100%)`,
          borderRadius: "70% 30% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/2 left-0 w-[420px] h-[350px] blur-3xl animate-slow-pulse opacity-60 transform rotate-75"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 20% 50%, 
            rgba(59, 130, 246, 0.7) 0%, 
            rgba(251, 146, 60, 0.8) 80%)`,
          borderRadius: "50% 50% 80% 20%",
        }}
      />

      <div
        className="absolute bottom-1/2 right-0 w-[460px] h-[320px] blur-3xl opacity-65 transform -rotate-60"
        style={{
          background: `radial-gradient(ellipse 80% 95% at 70% 30%, 
            rgba(249, 115, 22, 0.8) 0%, 
            rgba(29, 78, 216, 0.6) 70%)`,
          borderRadius: "20% 80% 40% 60%",
        }}
      />

      <div
        className="absolute top-3/4 left-1/2 w-[380px] h-[280px] blur-3xl animate-slow-pulse opacity-55 transform rotate-15"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 60% 40%, 
            rgba(251, 146, 60, 0.7) 0%, 
            rgba(59, 130, 246, 0.6) 100%)`,
          borderRadius: "80% 20% 60% 40%",
        }}
      />

      <div
        className="absolute top-1/6 right-1/2 w-[340px] h-[260px] blur-3xl opacity-60 transform -rotate-75"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 40% 60%, 
            rgba(29, 78, 216, 0.6) 0%, 
            rgba(251, 146, 60, 0.7) 50%, 
            rgba(249, 115, 22, 0.4) 100%)`,
          borderRadius: "60% 40% 20% 80%",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Logo */}
                <div className="mb-4">
                  <img src="/images/rallie-logo-white.png" alt="Rallie" className="h-24 w-auto" />
                </div>

                <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
                  <span className="block text-3xl lg:text-4xl font-extralight text-gray-400 mt-10">
                    Intelligent Tennis Training System
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Precision-engineered robotics meets artificial intelligence. Experience the future of autonomous
                  tennis training.
                </p>
              </div>

              {/* Technical Specs */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="text-3xl font-light text-white">80</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">MPH Launch Speed</div>
                </div>
                <div className="space-y-2 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="text-3xl font-light text-white">360°</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Ball Placement</div>
                </div>
                <div className="space-y-2 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="text-3xl font-light text-white">AI</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Computer Vision</div>
                </div>
                <div className="space-y-2 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="text-3xl font-light text-white">30%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Lighter Design</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/survey">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300"
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
                    className="border border-white/30 text-white hover:bg-white/5 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300"
                    onClick={() => trackEvent("button_click", "hero", "learn_more")}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    WATCH DEMO
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span>{waitlistCount.toLocaleString()}+ EARLY ADOPTERS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span>UC BERKELEY ENGINEERED</span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Showcase */}
            <div className="relative">
              <div className="relative">
                {/* Main Product Demo Video - Smaller Size */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-white/10 max-w-md mx-auto">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1534_1750669964-WSfygZRfUBIFFQ2sB8pqh6P7g4dfHJ.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-lg object-cover max-h-80"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">75 MPH</div>
                      <div className="text-xs text-gray-400">ACHIEVED</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">±2cm</div>
                      <div className="text-xs text-gray-400">PRECISION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">ADVANCED ENGINEERING</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Breakthrough innovations in robotics, AI, and precision manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">TRIO-MOTOR SYSTEM</h3>
              <p className="text-gray-400 leading-relaxed">
                Independent motor control for topspin, backspin, and sidespin generation. Professional-grade accuracy
                with variable speed control up to 80 MPH.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">AI VISION SYSTEM</h3>
              <p className="text-gray-400 leading-relaxed">
                Real-time computer vision tracks player position and movement patterns. Adaptive algorithms optimize
                ball placement for personalized training.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">COMPACT ARCHITECTURE</h3>
              <p className="text-gray-400 leading-relaxed">
                Internal oscillation system eliminates external moving parts. 30% reduction in size and weight compared
                to traditional machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Sophie Luo, Founder & Chief Engineer"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-light text-white mb-4">ENGINEERED BY EXPERTS</h2>
                <p className="text-xl text-gray-400">Sophie Luo, Robotics Engineer & Tennis Enthusiast</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">UC Berkeley & UPenn Robotics Engineering</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Former Product Manager, Rokid (AR/AI Unicorn)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Founded RosePi Robotics (Autonomous Systems)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Manufacturing partnerships: Foxconn, Flextronics, Goertek</span>
                </div>
              </div>

              <blockquote className="border-l-2 border-orange-500 pl-6 italic text-gray-300 text-lg">
                "Existing solutions failed to meet the precision and reliability standards required for serious
                training. Rallie represents a complete reimagining of tennis ball machine technology."
              </blockquote>

              <Link href="/brand-story">
                <Button
                  variant="outline"
                  className="border border-white/30 text-white hover:bg-white/5 font-medium rounded-none"
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
      <section id="progress" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">DEVELOPMENT STATUS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time updates on engineering progress and prototype testing.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            {/* Latest Update - May 9 */}
            <div className="pb-10 border-b border-white/10">
              <div className="flex items-center text-gray-400 mb-4 space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                  <time dateTime="2025-05-09">MAY 9, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-blue-500" />
                  <span>4 MIN READ</span>
                </div>
              </div>

              <h3 className="text-2xl font-light text-white mb-6">PROTOTYPE TESTING: 75 MPH ACHIEVED</h3>

              {/* May Draw Winner Section */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center text-white">
                  <Award className="mr-2 h-5 w-5 text-orange-500" />
                  BETA PROGRAM WINNER
                </h4>
                <div className="bg-black/40 rounded-lg p-6 border border-white/10">
                  <p className="mb-4 text-gray-300">
                    Congratulations to <span className="font-semibold text-orange-500">Delice</span> - May winner of our
                    $100 Tennis Warehouse gift card.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12591746755395_.pic.jpg-JEH1lyUrF7nv5XFtCspSQFgwaFIyoa.jpeg"
                        alt="Beta program drawing results"
                        className="w-full rounded-lg"
                      />
                      <p className="text-xs text-center mt-2 text-gray-500">DRAWING RESULTS - MAY 9, 2025</p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%209.41.29%E2%80%AFAM-x6glsozlin4v7c89FpzPF0qW73BLYL.png"
                        alt="Tennis Warehouse Gift Card"
                        className="w-full rounded-lg"
                      />
                      <p className="text-xs text-center mt-2 text-gray-500">$100 TENNIS WAREHOUSE GIFT CARD</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsible Content */}
              <div className={`relative ${!isExpanded ? "max-h-[400px] overflow-hidden" : ""}`}>
                {/* Development Update Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4 flex items-center text-white">
                    <Settings className="mr-2 h-5 w-5 text-blue-500" />
                    ENGINEERING PROGRESS
                  </h4>

                  {/* Hardware Section */}
                  <div className="bg-black/40 rounded-lg p-6 mb-6 border border-white/10">
                    <h5 className="text-base font-medium mb-3 flex items-center text-white">
                      <Cpu className="mr-2 h-4 w-4 text-orange-500" />
                      HARDWARE SYSTEMS
                    </h5>

                    <div className="space-y-4 text-gray-300">
                      <p>
                        First prototype assembly completed using RoboMaster motor systems and precision-machined
                        components. Dual flywheel launching mechanism achieved target velocity of 75 MPH in initial
                        testing.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.22.54%E2%80%AFAM-ubPoz1qBnWwFqAIf3p0YHyEHsVZ9sh.png"
                            alt="Prototype CAD model showing motor assembly"
                            className="w-full h-auto"
                          />
                          <p className="p-3 text-xs text-center text-gray-500">PROTOTYPE CAD MODEL - MOTOR ASSEMBLY</p>
                        </div>
                        <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.23.14%E2%80%AFAM-vYx1ykFGdzHTxkcwfHMKTA09RwsZiN.png"
                            alt="Dual flywheel mechanism close-up"
                            className="w-full h-auto"
                          />
                          <p className="p-3 text-xs text-center text-gray-500">DUAL FLYWHEEL LAUNCHING SYSTEM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Software Section */}
                  <div className="bg-black/40 rounded-lg p-6 mb-6 border border-white/10">
                    <h5 className="text-base font-medium mb-3 flex items-center text-white">
                      <Code className="mr-2 h-4 w-4 text-blue-500" />
                      AI SOFTWARE STACK
                    </h5>

                    <div className="space-y-4 text-gray-300">
                      <p>
                        Computer vision pipeline operational with real-time player tracking and pose estimation. Custom
                        neural networks trained for optimal ball placement prediction across varying court conditions.
                      </p>

                      <p>
                        Advanced model training in progress to enhance performance across diverse lighting conditions
                        and camera positioning scenarios.
                      </p>
                    </div>
                  </div>
                </div>

                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
                )}
              </div>

              {/* Continue Reading Button */}
              <div id="continue-reading-button" className="flex justify-center mt-6">
                <button
                  onClick={toggleExpand}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg text-white font-medium border border-white/20"
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
            </div>

            {/* Call to action for full progress */}
            <div className="pt-8 text-center">
              <Link href="/progress">
                <Button
                  variant="outline"
                  className="border border-white/30 text-white hover:bg-white/5 font-medium rounded-none"
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
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">JOIN THE BETA PROGRAM</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Limited access to early testing phase. Summer 2025 deployment.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto border border-white/10">
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-white mb-2">EARLY ACCESS</h3>
              <p className="text-gray-400">Exclusive updates and beta testing opportunities</p>
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
                className="border border-white/30 text-white hover:bg-white/5 font-medium px-8 py-3 rounded-none"
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
