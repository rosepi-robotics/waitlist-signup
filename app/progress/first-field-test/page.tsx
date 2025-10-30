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
          <Link
            href="/updates"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Updates
          </Link>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800">PROGRESS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">First Field Test Success + New Logo Reveal</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-8">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                6/23/2025
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />8 min read
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Development Team
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We did our first field test and the results exceeded expectations! The system is working perfectly,
              creating incredibly fast and strong balls with its compact design. Plus, we're revealing our new logo.
            </p>

            <p className="mb-6">
              After months of engineering and development, seeing Rallie perform on an actual tennis court was an
              incredible milestone for our team.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Field Test Breakthrough</h2>

            <p className="mb-6">
              We did our first field test and the results exceeded expectations! The system is working perfectly,
              creating incredibly fast and strong balls with its compact design.
            </p>

            <div className="mb-6 flex justify-center">
              <img
                src="/images/design-mode/UNvBo5i.gif"
                alt="Rallie field test demonstration showing the tennis ball machine in action"
                className="max-w-sm mx-auto rounded-lg"
              />
            </div>
            <p className="text-xs text-center mt-2 text-gray-500 mb-8">FIRST FIELD TEST - JUNE 2025</p>

            <p className="mb-6">
              The field test validated our core engineering decisions, from the dual motor system to the
              servo-controlled oscillation mechanism. We achieved consistent ball speeds ranging from 10-80 MPH with
              precise spin control, demonstrating both topspin and backspin capabilities that exceeded our initial
              specifications.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Team Update</h2>

            <p className="mb-6">
              My team continues is growing! Finally it's not my one man shop anymore! I'm super excited to announce that
              I'm joined with incredibly talented engineers!
            </p>

            <p className="mb-6">
              <strong>Lisa Wang</strong> - Co-founder & AI/Computer Vision Lead: Lisa, a brilliant engineer and former
              Googler, is leading AI development at Rallie. Stay tuned—exciting AI feature demos are coming soon!
            </p>

            <p className="mb-6">
              <strong>Ray Shen</strong> - Hardware & Embedded Systems Engineering: A 15-year veteran in motor control
              and manufacturing, Ray brings deep expertise to Rallie's hardware development and will lead our path to
              scalable production.
            </p>

            <p className="mb-6">
              We're looking for 10 tennis facilities to participate in our beta program. Selected partners will receive
              early access to Rallie units and direct input into the final product design.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">What's Next</h2>

            <p className="mb-6">
              With the successful field test behind us, we're now focusing on refining the AI coaching algorithms and
              preparing for our beta program launch. The next few months will be crucial as we work toward bringing
              Rallie to tennis facilities and players worldwide.
            </p>

            <p className="mb-6">Key milestones ahead:</p>

            <ul className="mb-6 space-y-2">
              <li>• AI coaching system integration</li>
              <li>• Beta program launch with select tennis facilities</li>
              <li>• User interface and mobile app development</li>
              <li>• Production planning and manufacturing partnerships</li>
            </ul>

            <p className="mb-8">
              We're incredibly excited about what's coming next and grateful for the support from our growing community
              of tennis players and coaches who believe in the future of AI-powered training.
            </p>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Join the Beta Program</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be among the first to experience Rallie's AI-powered tennis coaching. Join our beta program and help
                shape the future of tennis training.
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
