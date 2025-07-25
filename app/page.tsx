"use client"

import { useState, useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, TrendingUp, Calendar, Clock, Layers, Zap, Settings, Brain } from "lucide-react"
import { trackEvent } from "./utils/analytics"
import { getWaitlistCount, joinWaitlist } from "./actions/waitlist"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)
  const [heroEmail, setHeroEmail] = useState("")
  const [aiCtaEmail, setAiCtaEmail] = useState("")
  const [finalCtaEmail, setFinalCtaEmail] = useState("")
  const [heroLoading, setHeroLoading] = useState(false)
  const [aiCtaLoading, setAiCtaLoading] = useState(false)
  const [finalCtaLoading, setFinalCtaLoading] = useState(false)
  const [heroMessage, setHeroMessage] = useState("")
  const [aiCtaMessage, setAiCtaMessage] = useState("")
  const [finalCtaMessage, setFinalCtaMessage] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Load actual waitlist count
    const loadWaitlistCount = async () => {
      try {
        const count = await getWaitlistCount()
        setWaitlistCount(count || 0) // Use 0 as fallback instead of 247
      } catch (error) {
        console.error("Failed to load waitlist count:", error)
        setWaitlistCount(0) // Set to 0 on error
      }
    }

    loadWaitlistCount()
  }, [])

  const handleWaitlistSubmit = async (
    email: string,
    setEmail: (email: string) => void,
    setLoading: (loading: boolean) => void,
    setMessage: (message: string) => void,
    source: string,
  ) => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setMessage("")
    try {
      const formData = new FormData()
      formData.append("email", email)

      const result = await joinWaitlist(null, formData)

      if (result.success) {
        setMessage("Thanks for joining! We'll be in touch soon.")
        setEmail("")
        if (result.count) {
          setWaitlistCount(result.count)
        }
        trackEvent("waitlist_join", source, email)
      } else {
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
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
                  Meet your new tennis coach.
                  <div>AI-native. Always ready.</div>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
                  <div>
                    The first AI tennis coach that knows your game, adapts to your skill and style - and actually helps
                    you level up.
                  </div>
                </p>
              </div>

              {/* CTA with Email Input */}
              <div className="flex flex-col items-center pt-4 space-y-4">
                <div className="flex flex-col gap-3 w-full max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    className="w-full"
                  />
                  <Button
                    size="lg"
                    className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg w-full"
                    onClick={() =>
                      handleWaitlistSubmit(heroEmail, setHeroEmail, setHeroLoading, setHeroMessage, "hero")
                    }
                    disabled={heroLoading}
                  >
                    {heroLoading ? "JOINING..." : "JOIN BETA PROGRAM"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  {heroMessage && (
                    <p className={`text-sm ${heroMessage.includes("Thanks") ? "text-orange-600" : "text-red-600"}`}>
                      {heroMessage}
                    </p>
                  )}
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center space-x-8 pt-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  {waitlistCount === null ? (
                    <span>Loading waitlist count...</span>
                  ) : (
                    <span>{waitlistCount.toLocaleString()} tennis players are already on the waitlist</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond a Ball Machine Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">BEYOND A BALL MACHINE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ball machines should help you train & improve your game in a systematic way, not just headlessly shoot
              balls at you are just move around and return your balls.
            </p>
          </div>

          <div className="space-y-20">
            {/* Point 1: mavio. observes - Image left, text right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-1">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mavio observes your position, poses, and footwork"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6 order-2">
                <div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4 flex items-center">
                    <img src="/images/mavio-logo.png" alt="Mavio" className="h-8 w-auto mr-3" />
                    OBSERVES
                  </h3>
                  <p className="text-xl text-gray-600">Real-time analysis of your tennis technique</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Player position and court movement patterns</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Swing mechanics and body positioning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Footwork timing and balance points</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 2: mavio. analyzes - Text left, image right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-1 lg:order-2 lg:pl-16">
                <div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4 flex items-center">
                    <img src="/images/mavio-logo.png" alt="Mavio" className="h-8 w-auto mr-3" />
                    ANALYZES
                  </h3>
                  <p className="text-xl text-gray-600">Deep insights into your playing patterns</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Identifies strengths and improvement areas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tracks performance trends over time</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Compares against skill level benchmarks</span>
                  </div>
                </div>
              </div>
              <div className="relative order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mavio analyzes your patterns and performance"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Point 3: mavio. acts - Image left, text right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-1">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mavio acts with smart adaptive drills"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6 order-2">
                <div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4 flex items-center">
                    <img src="/images/mavio-logo.png" alt="Mavio" className="h-8 w-auto mr-3" />
                    ACTS
                  </h3>
                  <p className="text-xl text-gray-600">Intelligent training that adapts in real-time</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Dynamic drill adjustment based on real time performance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Personalized shot placement and timing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Progressive difficulty scaling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 4: mavio. summarizes - Text left, image right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-1 lg:order-2 lg:pl-16">
                <div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4 flex items-center">
                    <img src="/images/mavio-logo.png" alt="Mavio" className="h-8 w-auto mr-3" />
                    SUMMARIZES
                  </h3>
                  <p className="text-xl text-gray-600">Comprehensive insights and future planning</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Detailed session statistics and progress reports</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Personalized training recommendations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Long-term skill development roadmap</span>
                  </div>
                </div>
                <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-700 text-lg">
                  "Every session builds on the last, creating a systematic path to tennis mastery."
                </blockquote>
              </div>
              <div className="relative order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mavio summarizes your progress and plans next steps"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Divider */}
      <section className="py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600 mb-6">Follow our journey</p>
          <div className="flex justify-center items-center space-x-8">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors cursor-pointer z-10 relative"
              onClick={() => trackEvent("social_click", "youtube", "homepage_divider")}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">ADVANCED ENGINEERING</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Besides all the AI features, Mavio is a solid, high-performance, beatiful machine engineered by the best
              talents in mechanical engineering and motor control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Ultra-Portable Design */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-orange-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">ULTRA-PORTABLE DESIGN</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-orange-600">30 lbs (13kg)</span> total weight with
                <span className="font-semibold text-orange-600"> 150-ball capacity</span>. The most portable
                high-performance ball machine on the market.
              </p>
            </div>

            {/* 2. Precision Motor System */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-orange-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">DUAL MOTOR SYSTEM</h3>
              <p className="text-gray-600 leading-relaxed">
                Twin brushless DC motors with <span className="font-semibold text-orange-600">6600 RPM max speed</span>.
                Variable spin control: flat, topspin, backspin, slice. Speed range
                <span className="font-semibold text-orange-600"> 10-80 MPH</span>.
              </p>
            </div>

            {/* 3. Precision Ball Placement */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">SERVO-CONTROLLED OSCILLATION</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-orange-600"> ±45° horizontal</span> and
                <span className="font-semibold text-orange-600"> 5° - 50° vertical</span> range. No random oscilation.
                Full court coverage from baseline position.
              </p>
            </div>

            {/* 4. Smart Control System */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:border-green-300 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">PROGRAMMABLE CONTROL</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-orange-600">Unlimited programmable drills. </span> Choose from
                pre-set NTRP training drills, edit your own, or try a community-shared drill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 border-t border-gray-200 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Tennis meets real AI</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your real AI coach should be able to know you, to see you in real time, to understand how to help you
              improve, and to launch that best ball to you at the right time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
            <div className="space-y-6">
              <p className="text-lg text-white font-medium leading-relaxed">
                We are early in our journey. Mavio is rapidly evolving. Join us in shaping the future of tennis
                training.
              </p>

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={aiCtaEmail}
                  onChange={(e) => setAiCtaEmail(e.target.value)}
                  className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-600"
                />
                <Button
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg w-full"
                  onClick={() =>
                    handleWaitlistSubmit(aiCtaEmail, setAiCtaEmail, setAiCtaLoading, setAiCtaMessage, "ai_cta")
                  }
                  disabled={aiCtaLoading}
                >
                  {aiCtaLoading ? "JOINING..." : "JOIN WAITLIST"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                {aiCtaMessage && (
                  <p className={`text-sm ${aiCtaMessage.includes("Thanks") ? "text-white" : "text-red-200"}`}>
                    {aiCtaMessage}
                  </p>
                )}
              </div>
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

              <h3 className="text-2xl font-light text-gray-900 mb-6">TEAM ADDITION + FIRST FIELD TEST SUCCESS</h3>

              {/* Team Update Section */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                  <Users className="mr-2 h-5 w-5 text-blue-500" />
                  TEAM UPDATE
                </h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="mb-6 text-gray-700">
                    My team is growing! Finally it's not my one man shop anymore! I'm super excited to announce that I'm
                    joined with incredibly talented engineers!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/70 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-semibold text-lg">LW</span>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-gray-900">Lisa Wang</h5>
                          <p className="text-sm text-gray-600">Co-founder & AI/Computer Vision Lead</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Lisa, a brilliant engineer and ex-Googler, is leading AI development at Mavio. Stay
                        tuned—exciting AI feature demos are coming soon!
                      </p>
                    </div>

                    <div className="bg-white/70 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-orange-600 font-semibold text-lg">RS</span>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-gray-900">Ray Shen</h5>
                          <p className="text-sm text-gray-600">Hardware & Embedded Systems Engineering</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        A 15-year veteran in motor control and manufacturing, Ray brings deep expertise to Mavio's
                        hardware development and will lead our path to scalable production.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    We're also excited to announce partnerships with local tennis clubs for beta testing. If you're
                    interested in hosting a beta test at your facility,
                    <a href="/contact" className="text-orange-500 hover:text-orange-600 ml-1 underline">
                      reach out to us
                    </a>
                    !
                  </p>
                </div>
              </div>

              {/* Field Test Success */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  FIELD TEST BREAKTHROUGH
                </h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="mb-6 text-gray-700">
                    We did our first field test and the results exceeded expectations! The system is working well,
                    creating incredibly fast and strong balls with its compact design. However, the test also revealed
                    some areas for improvement, including noise levels that were higher than expected and some
                    structural components that need refinement.
                  </p>

                  {/* YouTube Field Test Video */}
                  <div className="mb-6 flex justify-center">
                    <iframe
                      src="https://www.youtube.com/embed/3w82jRrf7nw"
                      title="Mavio Tennis Ball Machine First Test"
                      className="w-full max-w-[300px] mx-auto rounded-lg aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500">FIRST FIELD TEST - JUNE 2025</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
                    <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-2">✅ Topspin</div>
                      <div className="text-sm text-gray-600">Great spin generation</div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-2">✅ Backspin</div>
                      <div className="text-sm text-gray-600">Precise control achieved</div>
                    </div>
                  </div>

                  <div className="mt-6 mb-4">
                    <h5 className="text-gray-900 font-medium mb-3">Areas for Improvement</h5>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-gray-700 text-sm">
                            <strong>Noise Reduction:</strong> Current prototype operates louder than target levels
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-gray-700 text-sm">
                            <strong>Structural Refinements:</strong> Some components need optimization for durability
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Good news:</strong> We already have solid engineering plans to address these issues. Our
                      team is confident these improvements will be implemented well before Fall 2025 beta testing
                      begins.
                    </p>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {"We'll be posting comparison videos of Mavio vs. other machines' top speed on YouTube."}
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

            {/* Call to action for full progress */}
            <div className="pt-8 text-center">
              <Link href="/updates">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg bg-transparent"
                  onClick={() => trackEvent("button_click", "progress", "view_all")}
                >
                  VIEW ALL UPDATES
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">JOIN THE BETA PROGRAM</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Limited access to early testing phase. Fall 2025 deployment.
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-gray-900 mb-2">EARLY ACCESS</h3>
              <p className="text-gray-600 mb-6">Exclusive updates and beta testing opportunities</p>

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={finalCtaEmail}
                  onChange={(e) => setFinalCtaEmail(e.target.value)}
                />
                <Button
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg w-full"
                  onClick={() =>
                    handleWaitlistSubmit(
                      finalCtaEmail,
                      setFinalCtaEmail,
                      setFinalCtaLoading,
                      setFinalCtaMessage,
                      "final_cta",
                    )
                  }
                  disabled={finalCtaLoading}
                >
                  {finalCtaLoading ? "JOINING..." : "JOIN WAITLIST"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                {finalCtaMessage && (
                  <p className={`text-sm ${finalCtaMessage.includes("Thanks") ? "text-orange-600" : "text-red-600"}`}>
                    {finalCtaMessage}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-500 font-medium text-sm">
                {waitlistCount === null ? (
                  <span>Loading waitlist count...</span>
                ) : (
                  <span>{waitlistCount.toLocaleString()} TENNIS ENTHUSIASTS REGISTERED</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  )
}
