"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Target, Users, Zap, ArrowRight, Mail } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { joinWaitlist } from "@/app/actions/waitlist"

export default function BrandStoryPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage("")

    try {
      const formData = new FormData()
      formData.append("email", email)
      const result = await joinWaitlist(null, formData)

      if (result.success) {
        setMessage("Thanks for joining! We'll be in touch soon.")
        setEmail("")
      } else {
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800">OUR STORY</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Revolutionizing tennis training through AI coaching and intelligent ball machines
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Founder Story */}
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800">Founder Story</Badge>
                  <h2 className="text-3xl font-bold mb-6">
                    Hi, I'm Sophie — and I started Rallie because I couldn't find what I needed.
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A year ago, I got really into tennis. I was hooked — but also frustrated.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Coaching was crazy expensive. Hitting partners flaked. And ball machines? The ones I tried felt like
                    relics from the 90s.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">So I decided to build it myself.</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    My background is in AI and robotics. I studied computer science at UPenn, and I've always been a
                    builder — from side projects in personal robotics to leading product at an AI + AR glasses startup
                    that eventually became a unicorn. I took that product from prototype to mass production, working
                    with amazing partners like Foxconn and Flex.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">But Rallie is different. This one is personal.</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I started alone in March 2025 — hacking together early prototypes, writing code, and 3D-printing
                    parts on my living room floor. Now, I'm joined by an incredible team of engineers who are just as
                    obsessed as I am about building something that actually thinks, adapts, and helps you improve.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Because players don't need a glorified ball launcher. We need a partner. A coach. A system that pays
                    attention, gives feedback, and evolves with us.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    That's what we're building with Rallie — and we're just getting started.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/images/sophie-founder-collage.png"
                    alt="Sophie, Founder of Rallie"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize access to world-class tennis coaching through AI technology, making expert training
                  available to every player.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every tennis player can reach their full potential with personalized, intelligent
                  coaching that adapts to their unique style.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, accessibility, and player-first design drive everything we do. We believe technology
                  should enhance, not replace, the joy of tennis.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technology Approach */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Technology</Badge>
                <h3 className="text-3xl font-bold mb-4">How Rallie Works</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our integrated system combines AI-powered analysis with intelligent hardware to create a complete
                  tennis training solution that thinks, learns, and adapts.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Capture</h4>
                  <p className="text-gray-600 text-sm">
                    Computer vision tracks your movement, posture, footwork and ball trajectory in real-time
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Analyze</h4>
                  <p className="text-gray-600 text-sm">
                    AI analyzes your technique and hitting patterns, identifies weaknesses, and determines optimal
                    training patterns
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Adapt</h4>
                  <p className="text-gray-600 text-sm">
                    Smart ball machine adjusts speed, spin, and placement based on AI recommendations in real time
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">4</span>
                  </div>
                  <h4 className="font-bold mb-2">Improve</h4>
                  <p className="text-gray-600 text-sm">
                    You receive personalized feedback post-training and targeted practice sessions
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-6 text-center">Integrated Hardware + Software</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold mb-3 text-emerald-600">AI Software</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Computer vision for movement tracking</li>
                      <li>• Machine learning for technique analysis</li>
                      <li>• Adaptive training algorithms</li>
                      <li>• Real-time and post-game performance feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-emerald-600">Smart Hardware</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Precision ball delivery system</li>
                      <li>• Variable speed and spin control</li>
                      <li>• Intelligent court positioning</li>
                      <li>• Compact, durable and portable design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Join Us on This Journey</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're building the future of tennis training, and we want you to be part of it. Join our waitlist and
                help shape Rallie.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {message && (
                  <p className={`mt-3 text-sm ${message.includes("Thanks") ? "text-emerald-600" : "text-red-600"}`}>
                    {message}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
