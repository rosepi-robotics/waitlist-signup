"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, Clock, User, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { joinWaitlist } from "../../actions/waitlist"

export default function AITennisCoachPage() {
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
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-24">
        <div className="container mx-auto px-4">
          <Link
            href="/updates"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Updates
          </Link>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800">INSIGHTS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Tennis Players Need a Ball Machine That Thinks</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-8">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                6/28/2025
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />3 min read
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Rallie Tennis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Most tennis ball machines today fall into two categories. On one end, there are the affordable, static
              feeders — machines that shoot balls at regular intervals, often with just topspin and minimal control. On
              the other end, you'll find more expensive models with oscillation, multiple shot types, and even a handful
              of programmable drills.
            </p>

            <p className="mb-6">
              Recently, a new class of machines has started to emerge: ones that claim to rally with you, move around
              the court, or even collect balls automatically. They look futuristic. But let's be honest — many of these
              are still in Kickstarter campaigns, and most tennis players haven't actually tried them yet.
            </p>

            <p className="mb-6">
              While these machines may feel like progress, they still miss the mark in a fundamental way.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Problem: Automation ≠ Coaching</h2>

            <p className="mb-6">
              All of these machines — from simple feeders to mobile robots — still treat training as a logistics
              problem. They focus on brute force repetition. None of that helps you fix your swing, break out of bad
              habits, or continuously improve.
            </p>

            <p className="mb-6">They don't actually watch you.</p>

            <p className="mb-6">They don't adapt.</p>

            <p className="mb-6">They don't coach.</p>

            <p className="mb-6">
              Imagine if a human coach stood silently on the sideline, headlessly feeding balls without paying attention
              to your form, your timing, or your progress. That's what ball machines are doing today.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">What Players Actually Need</h2>

            <p className="mb-6">
              Players don't want a glorified launcher that's good at spraying balls around the court. They want a
              training partner that understands their game — and helps them improve.
            </p>

            <p className="mb-6">What they actually need is:</p>

            <ul className="mb-6 space-y-2">
              <li>• Real-time feedback on their technique</li>
              <li>• Adjustments based on performance</li>
              <li>• Reinforcement of good form</li>
              <li>• A system that adapts with them, rep by rep</li>
            </ul>

            <p className="mb-6">The goal isn't just more practice. It's smarter practice.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Rethinking the Ball Machine: From Repetition to Real Coaching
            </h2>

            <p className="mb-6">One of the best ways to understand the gap is to think about what a real coach does:</p>

            <p className="mb-6">
              They watch you hit, analyze your timing and positioning, and adjust what happens next.
            </p>

            <p className="mb-6">
              If you're hitting late, they slow the feed. If your footwork is off, they prompt you to move more quickly.
              If you start getting comfortable, they push you with harder balls or change the angle.
            </p>

            <p className="mb-6">A machine should do the same.</p>

            <p className="mb-6">Let's say you're working on your topspin forehand. You should be able to say:</p>

            <p className="mb-6">"I want to improve my topspin forehand."</p>

            <p className="mb-6">And the machine should respond by:</p>

            <ul className="mb-6 space-y-2">
              <li>• Launching a tailored sequence of feeds</li>
              <li>• Tracking your position and swing timing</li>
              <li>• Slowing down when you're late</li>
              <li>• Ramping up as you find your rhythm</li>
              <li>
                • Giving insightful feedback afterward to reinforce what you're doing well, and what needs more work
              </li>
            </ul>

            <p className="mb-6">That's not automation. That's real intelligence.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">It's Time for Real AI, Not Fluff</h2>

            <p className="mb-6">
              Some newer machines advertise "AI" because they can move around to catch your balls or "rally" with you.
              But that's not real coaching.
            </p>

            <p className="mb-6">Real AI means understanding why you're struggling, and adjusting accordingly.</p>

            <p className="mb-6">
              It should feel like your coach is inside the machine: watching, thinking, reacting, and guiding you. Not
              just feeding balls faster or moving around aimlessly.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">This Is What We're Building at Rallie</h2>

            <p className="mb-6">
              Our team at Rallie is developing a new kind of tennis ball machine — one that doesn't just launch balls,
              but actually thinks.
            </p>

            <ul className="mb-6 space-y-2">
              <li>• It adapts to your performance.</li>
              <li>• It gives feedback that matters.</li>
              <li>• And it's designed to help you improve — not just sweat.</li>
            </ul>

            <p className="mb-6">We're still in development, but we'd love for you to follow along.</p>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <p className="mb-2">
                💡{" "}
                <a
                  href="https://rallie.tennis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Visit rallie.tennis
                </a>
              </p>
              <p className="mb-2">
                📲 Follow us on Instagram:{" "}
                <a
                  href="https://www.instagram.com/rallie.tennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  https://www.instagram.com/rallie.tennis/
                </a>
              </p>
              <p>
                📺 Subscribe on YouTube:{" "}
                <a
                  href="https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA
                </a>
              </p>
            </div>

            <p className="mb-8">
              We believe the future of tennis training isn't about more automation — it's about true intelligence.
            </p>

            <p className="mb-8">Let's build it together.</p>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience AI Tennis Coaching?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the beta program and be among the first to experience the future of tennis training with Rallie's
                AI-powered coaching system.
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
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  >
                    {isSubmitting ? "Joining..." : "Join Beta"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {message && (
                  <p className={`mt-3 text-sm ${message.includes("Thanks") ? "text-blue-600" : "text-red-600"}`}>
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
