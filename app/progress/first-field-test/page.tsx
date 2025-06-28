"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Mail, CheckCircle, Zap, Target } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { joinWaitlist } from "@/app/actions/waitlist"

export default function FirstFieldTestPage() {
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
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800">PROGRESS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">First Field Test Success + New Logo Reveal</h1>
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>6/23/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Development Team</span>
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
              <p className="text-xl font-medium text-gray-800">
                We did our first field test and the results exceeded expectations! The system is working great,
                creating incredibly fast and strong balls with its compact design. Plus, we're revealing our new logo.
              </p>

              <p>
                After months of engineering and development, seeing Rallie perform on an actual tennis court was an
                incredible milestone for our team. The field test validated our core engineering decisions, from the
                dual motor system to the servo-controlled oscillation mechanism.
              </p>

              <p>
                We achieved consistent ball speeds ranging from 10-80 MPH with precise spin control, demonstrating both
                topspin and backspin capabilities that rival much larger, more expensive machines. The compact 30-pound
                design proved its portability advantage while maintaining the power and precision needed for serious
                training.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Test Results</h2>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Speed Range</h3>
                    <p className="text-gray-600">10-80 MPH with consistent accuracy across all speeds</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Portability</h3>
                    <p className="text-gray-600">30 lbs total weight by design, with possibility to further reduce the weight</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Engineering Breakthroughs</h2>

              <p>
                The dual motor system we developed allows for independent control of ball speed and spin, something that
                traditional single-motor machines struggle with. Our servo-controlled oscillation mechanism provides
                smooth, precise movement patterns that can be programmed for specific training drills.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">New Logo Reveal</h2>

              <div className="bg-gray-50 rounded-lg p-8 my-8 text-center">
                <Image
                  src="/images/rallie-logo-black.png"
                  alt="New Rallie Logo"
                  width={200}
                  height={80}
                  className="mx-auto mb-4"
                />
                <p className="text-gray-600">
                  Our new logo reflects our commitment to precision, innovation, and the dynamic nature of tennis. The
                  clean, modern design represents the intersection of technology and sport.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What's Next</h2>

              <p>
                With the successful field test behind us, we're now focusing on integrating the AI coaching features
                that will set Rallie apart from traditional ball machines. The next phase involves implementing computer
                vision for real-time technique analysis and adaptive training algorithms.
              </p>

              <p>
                We're also working on the mobile app that will allow players to customize their training sessions, track
                progress, and receive personalized coaching insights. The app will seamlessly connect with the machine
                to create a complete training ecosystem.
              </p>

              <p>
                Our beta testing program will begin in Q3 2025, and we're looking for passionate tennis players to help
                us refine the experience. If you're interested in being part of this journey, join our waitlist below.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h3 className="text-lg font-bold mb-3">Beta Program Benefits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Early access to Rallie before public launch</li>
                  <li>Direct input on features and functionality</li>
                  <li>Exclusive pricing for beta participants</li>
                  <li>One-on-one support from our development team</li>
                </ul>
              </div>

              <p>
                The future of tennis training is here, and we're excited to share it with players who are as passionate
                about improvement as we are about innovation.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Join the Beta Program</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be among the first to experience Rallie's revolutionary AI tennis coaching. Join our beta program and
                help shape the future of tennis training.
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
