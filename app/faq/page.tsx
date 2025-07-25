"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { joinWaitlist } from "../actions/waitlist"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight, HelpCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false)
  const [waitlistMessage, setWaitlistMessage] = useState("")

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!waitlistEmail) return

    setIsWaitlistSubmitting(true)
    setWaitlistMessage("")

    try {
      const formData = new FormData()
      formData.append("email", waitlistEmail)
      const result = await joinWaitlist(null, formData)

      if (result.success) {
        setWaitlistMessage("Thanks for joining! We'll be in touch soon.")
        setWaitlistEmail("")
      } else {
        setWaitlistMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setWaitlistMessage("Something went wrong. Please try again.")
    } finally {
      setIsWaitlistSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-amber-100 text-amber-800">FAQ</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">FAQ</h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Frequently asked questions about Mavio and AI tennis coaching
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Coming Soon Section */}
          <Card>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <Badge className="mb-4 bg-orange-100 text-orange-800">Coming Soon</Badge>
                <HelpCircle className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">FAQ Section Coming Soon</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're currently compiling the most frequently asked questions about Mavio and AI tennis coaching.
                  This section will be available soon with comprehensive answers to help you understand how Mavio can
                  transform your tennis training.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-8">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">What to Expect</h3>
                <div className="text-left max-w-md mx-auto space-y-2 text-gray-600">
                  <p>• How Mavio's AI coaching works</p>
                  <p>• Equipment and setup requirements</p>
                  <p>• Pricing and availability information</p>
                  <p>• Technical specifications</p>
                  <p>• Training programs and skill levels</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                  asChild
                >
                  <a href="/contact">Ask a Question</a>
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <a href="/updates">Read Latest Updates</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/brand-story">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Story</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn about the founding story and mission behind Mavio.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/updates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Latest Updates</h4>
                  <p className="text-gray-600 text-sm mb-4">Stay updated with our progress and latest insights.</p>
                  <Button variant="outline" size="sm">
                    View Updates
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h4>
                  <p className="text-gray-600 text-sm mb-4">Have specific questions? Reach out to our team directly.</p>
                  <Button variant="outline" size="sm">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Game?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of tennis players who are already improving their game with AI tennis coaching. Be among
                the first to experience the future of tennis training.
              </p>

              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isWaitlistSubmitting}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6"
                  >
                    {isWaitlistSubmitting ? "Joining..." : "Join Waitlist"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {waitlistMessage && (
                  <p
                    className={`mt-3 text-sm ${waitlistMessage.includes("Thanks") ? "text-amber-600" : "text-red-600"}`}
                  >
                    {waitlistMessage}
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
