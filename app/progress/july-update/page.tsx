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

export default function JulyUpdatePage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bye Rallie, Hello Mavio!</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-8">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                7/28/2025
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
            <h1 className="text-3xl font-bold mb-6">New Name, New Test, New Growth</h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Big updates across the board—starting with a new name, another field test coming up, and continued team growth as we build toward the next chapter of AI-powered tennis.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Farewell Rallie, Hello Mavio</h2>
            
            <p className="mb-6">
              After discovering that the name Rallie was already in use (sad face), we needed to think of a new name.
            </p>
            
            <p className="mb-6">
              The choices were:
            </p>
            
            <ol className="list-decimal pl-6 mb-6">
              <li>Mavio</li>
              <li>Skory</li>
              <li>Bounza</li>
              <li>Rivoa</li>
              <li>Caelo</li>
            </ol>
            
            <p className="mb-6">
              Thanks to input from our beta program members and community surveys, we're excited to unveil our new name:
              <strong> Mavio</strong> — smart, reliable, and fun (happy face!).
            </p>
            
            <p className="mb-6">
              The name reflects our mission to combine precision engineering with playful, intuitive user experience. It's a fresh start with the same big ambition: to redefine how tennis players train.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Next Field Test Incoming</h2>
            
            <p className="mb-6">
              We're gearing up for our third field test this Tuesday!
            </p>
            
            <div className="mb-6 flex justify-center">
              <img
                src="/images/first_prototype.jpeg"
                alt="The First Mavio Prototype"
                className="max-w-sm mx-auto rounded-lg"
              />
            </div>
            
            <p className="mb-6">
              We've made significant hardware improvements since our last run—most notably, redesigning the launch wheels.
            </p>
            
            <p className="mb-6">
              We originally used PU (polyurethane) wheels because they're lightweight, helping us keep the machine as light as possible.
            </p>
            
            <div className="mb-6 flex justify-center">
              <img
                src="https://i.imgur.com/b649e9z.gif"
                alt="Successful test - tennis ball machine"
                className="max-w-sm mx-auto rounded-lg"
              />
            </div>
            
            <p className="mb-6">
              We knew there were risks with this choice, and expected that the high friction from ball launches might cause wear. But it was a calculated decision—we wanted to test the limits, knowing we could always switch back if needed.
            </p>
            
            <p className="mb-6">
              As expected, the wheels wore out quickly, so we're now moving forward with a more durable solution.
            </p>
            
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/images/worn-wheel.jpeg"
                    alt="Worn wheel showing damage from use"
                    className="w-full rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-500">WORN PU WHEEL AFTER TESTING</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/images/new-wheels.jpg"
                    alt="New durable wheel design"
                    className="w-full rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-500">NEW DURABLE WHEEL SOLUTION</p>
                </div>
              </div>
            </div>
            
            <p className="mb-6">
              We're optimistic about the performance improvements and can't wait to put them to the test on court.
              It will also be our first integration test between the machine and the AI app.
            </p>
            
            <p className="mb-6">
              Wish us luck!
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Team Update</h2>
            
            <p className="mb-6">
              The team continues to grow—and not just in size, but in capability. While we're still finalizing some details (and names to be announced soon), I'm thrilled to say that the team is growing stronger!
            </p>
            
            <p className="mb-6">
              We're bringing in exceptional people to accelerate both software and hardware development, and we're more committed than ever to creating the best AI tennis companion out there.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">What's Next</h2>
            
            <p className="mb-6">
              With the new name in place and another field test on the horizon, we're charging ahead. Our focus remains clear:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Fine-tune the launch system and hardware reliability</li>
              <li>Integrate real-time AI coaching features</li>
              <li>Grow our team and provide the best product for you!</li>
            </ul>
            
            <p className="mb-6">
              We're incredibly grateful for the continued support—and can't wait to share more soon.
            </p>
            
            <p className="mb-6">
              — The Mavio Team
            </p>

            <p className="mb-6">
              Ps: come follow our socials!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://x.com/hellomavio" className="flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X
              </a>
              <a href="https://www.youtube.com/channel/UCLx99nZ7ObZCuvc-55tfbgA" className="flex items-center text-red-600 hover:text-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                  <path d="M23.498 6.186a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                YouTube
              </a>
              <a href="https://www.linkedin.com/company/hellomavio" className="flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.235 2.064.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://www.tiktok.com/@hellomavio?lang=en" className="flex items-center text-gray-800 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                TikTok
              </a>
              <a href="https://www.facebook.com/groups/963981362613884/" className="flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Join the Beta Program</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be among the first to experience Mavio's AI-powered tennis coaching. Join our beta program and help
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
