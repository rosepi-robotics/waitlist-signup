"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Target, Users, Zap, ArrowRight, Mail } from "lucide-react"
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
    try {
      const result = await joinWaitlist(email)
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Revolutionizing tennis training through AI-powered coaching and personalized development
          </p>
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
                  <h2 className="text-3xl font-bold mb-6">Meet Sophie, Founder & CEO</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    As a former collegiate tennis player and coach, Sophie experienced firsthand the limitations of
                    traditional tennis training. Despite having access to top coaches, she noticed that personalized
                    feedback was often inconsistent and expensive.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    After completing her degree in Computer Science and AI, Sophie realized that technology could bridge
                    this gap. She envisioned a world where every tennis player, regardless of skill level or budget,
                    could access world-class coaching.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    That vision became Rallie - an AI-powered tennis coach that provides instant, personalized feedback
                    to help players improve faster than ever before.
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

          {/* Problem & Solution */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Badge className="mb-4 bg-red-100 text-red-800">The Problem</Badge>
                  <h3 className="text-2xl font-bold mb-6">Traditional Tennis Training Challenges</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Expensive private coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Inconsistent feedback between sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Limited access to expert-level analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Difficulty tracking long-term progress</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Solution</Badge>
                  <h3 className="text-2xl font-bold mb-6">AI-Powered Tennis Coaching</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">24/7 available AI coach for instant feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Consistent, data-driven analysis every session</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Professional-level insights at an affordable price</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Comprehensive progress tracking and analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Approach */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Technology</Badge>
                <h3 className="text-3xl font-bold mb-4">How Rallie Works</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our AI combines computer vision, machine learning, and tennis expertise to provide real-time analysis
                  and personalized coaching recommendations.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Capture</h4>
                  <p className="text-gray-600 text-sm">Record your tennis sessions using any smartphone or camera</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Analyze</h4>
                  <p className="text-gray-600 text-sm">
                    AI analyzes your technique, form, and performance in real-time
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Improve</h4>
                  <p className="text-gray-600 text-sm">Receive personalized feedback and training recommendations</p>
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
