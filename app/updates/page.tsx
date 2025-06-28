"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { joinWaitlist } from "../actions/waitlist"

export default function UpdatesPage() {
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
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-orange-100 text-orange-800">UPDATES</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest Updates</h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Stay up to date with Rallie's progress, insights, and the future of AI-powered tennis training.
            </p>
          </div>
        </div>
      </div>

      {/* Updates Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Featured Updates */}
          <div className="space-y-8 mb-16">
            {/* Insights Card */}
            <Link href="/insights/ai-tennis-coach" className="block group">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-purple-100 text-purple-800">INSIGHTS</Badge>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        6/28/2025
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />3 min read
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Rallie Tennis
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Why Tennis Players Need a Ball Machine That Thinks</h2>

                  <p className="text-base font-medium text-gray-700 mb-6">
                    Most tennis ball machines today fall into two categories, but they all miss the mark in a fundamental
                    way.
                  </p>

                  <div className="space-y-4 text-gray-600 mb-6">
                    <p>
                      On one end, there are the affordable, static feeders — machines that shoot balls at regular
                      intervals, often with just topspin and minimal control. On the other end, you'll find more expensive
                      models with oscillation, multiple shot types, and even a handful of programmable drills.
                    </p>
                    <p>
                      Recently, a new class of machines has started to emerge: ones that claim to rally with you, move
                      around the court, or even collect balls automatically. They look futuristic. But let's be honest —
                      many of these are still in Kickstarter campaigns, and most tennis players haven't actually tried
                      them yet.
                    </p>
                  </div>

                  <Link
                    href="/insights/ai-tennis-coach"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </Link>

            {/* Progress Card */}
            <Link href="/insights/ai-tennis-coach" className="block group">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-100 text-blue-800">PROGRESS</Badge>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        6/23/2025
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />8 min read
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Development Team
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">First Field Test Success + New Logo Reveal</h2>

                  <p className="text-base font-medium text-gray-700 mb-6">
                    We did our first field test and the results exceeded expectations! The system is working perfectly,
                    creating incredibly fast and strong balls with its compact design.
                  </p>

                  <div className="space-y-4 text-gray-600 mb-6">
                    <p>
                      After months of engineering and development, seeing Rallie perform on an actual tennis court was an
                      incredible milestone for our team. The field test validated our core engineering decisions, from the
                      dual motor system to the servo-controlled oscillation mechanism.
                    </p>
                    <p>
                      We achieved consistent ball speeds ranging from 10-80 MPH with precise spin control, demonstrating
                      both topspin and backspin capabilities that exceeded our initial specifications. Plus, we're
                      revealing our new logo that reflects our commitment to precision and modern design.
                    </p>
                  </div>

                  <Link
                    href="/progress/first-field-test"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our waitlist to receive the latest updates on Rallie's development and be the first to know when we
                launch.
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
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {message && (
                  <p className={`mt-3 text-sm ${message.includes("Thanks") ? "text-orange-600" : "text-red-600"}`}>
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
