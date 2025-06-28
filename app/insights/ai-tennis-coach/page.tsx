"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Mail } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { joinWaitlist } from "@/app/actions/waitlist"

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
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-purple-100 text-purple-800">INSIGHTS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Tennis Players Need a Ball Machine That Thinks</h1>
            <div className="flex items-center gap-6 text-purple-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>6/28/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Rallie Tennis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Most tennis ball machines today fall into two categories. On one end, there are the affordable, static
                feeders — machines that shoot balls at regular intervals, often with just topspin and minimal control.
                On the other end, you'll find more expensive models with oscillation, multiple shot types, and even a
                handful of programmable drills.
              </p>

              <p>
                Recently, a new class of machines has started to emerge: ones that claim to rally with you, move around
                the court, or even collect balls automatically. They look futuristic. But let's be honest — many of
                these are still in Kickstarter campaigns, and most tennis players haven't actually tried them yet.
              </p>

              <p>While these machines may feel like progress, they still miss the mark in a fundamental way.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Problem: Automation ≠ Coaching</h2>

              <p>
                All of these machines — from simple feeders to mobile robots — still treat training as a logistics
                problem. They focus on brute force repetition. None of that helps you fix your swing, break out of bad
                habits, or continuously improve.
              </p>

              <p>They don't actually watch you.</p>
              <p>They don't adapt.</p>
              <p>They don't coach.</p>

              <p>
                Imagine if a human coach stood silently on the sideline, headlessly feeding balls without paying
                attention to your form, your timing, or your progress. That's what ball machines are doing today.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Players Actually Need</h2>

              <p>
                Players don't want a glorified launcher that's good at spraying balls around the court. They want a
                training partner that understands their game — and helps them improve.
              </p>

              <p>What they actually need is:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time feedback on their technique</li>
                <li>Adjustments based on performance</li>
                <li>Reinforcement of good form</li>
                <li>A system that adapts with them, rep by rep</li>
              </ul>

              <p>The goal isn't just more practice. It's smarter practice.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Rethinking the Ball Machine: From Repetition to Real Coaching
              </h2>

              <p>One of the best ways to understand the gap is to think about what a real coach does:</p>

              <p>They watch you hit, analyze your timing and positioning, and adjust what happens next.</p>

              <p>
                If you're hitting late, they slow the feed. If your footwork is off, they prompt you to move more
                quickly. If you start getting comfortable, they push you with harder balls or change the angle.
              </p>

              <p>A machine should do the same.</p>

              <p>Let's say you're working on your topspin forehand. You should be able to say:</p>

              <p className="italic">"I want to improve my topspin forehand."</p>

              <p>And the machine should respond by:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Launching a tailored sequence of feeds</li>
                <li>Tracking your position and swing timing</li>
                <li>Slowing down when you're late</li>
                <li>Ramping up as you find your rhythm</li>
                <li>
                  Giving insightful feedback afterward to reinforce what you're doing well, and what needs more work
                </li>
              </ul>

              <p>That's not automation. That's real intelligence.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">It's Time for Real AI, Not Fluff</h2>

              <p>
                Some newer machines advertise "AI" because they can move around to catch your balls or "rally" with you.
                But that's not real coaching.
              </p>

              <p>Real AI means understanding why you're struggling, and adjusting accordingly.</p>

              <p>
                It should feel like your coach is inside the machine: watching, thinking, reacting, and guiding you. Not
                just feeding balls faster or moving around aimlessly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">This Is What We're Building at Rallie</h2>

              <p>
                Our team at Rallie is developing a new kind of tennis ball machine — one that doesn't just launch balls,
                but actually thinks.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>It adapts to your performance.</li>
                <li>It gives feedback that matters.</li>
                <li>And it's designed to help you improve — not just sweat.</li>
              </ul>

              <p>We're still in development, but we'd love for you to follow along.</p>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <p className="mb-2">💡 Visit rallie.tennis</p>
                <p className="mb-2">📲 Follow us on Instagram: https://www.instagram.com/rallie.tennis/</p>
                <p>📺 Subscribe on YouTube: https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA</p>
              </div>

              <p>
                We believe the future of tennis training isn't about more automation — it's about true intelligence.
              </p>

              <p className="font-semibold">Let's build it together.</p>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 mt-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Join the Beta Program</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be among the first to experience the future of tennis training. Get early access to Rallie and help us
                build the smartest ball machine ever created.
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
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                  >
                    {isSubmitting ? "Joining..." : "Join Beta"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {message && (
                  <p className={`mt-3 text-sm ${message.includes("Thanks") ? "text-purple-600" : "text-red-600"}`}>
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
