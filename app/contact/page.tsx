"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { submitContactForm } from "../actions/contact"
import { joinWaitlist } from "../actions/waitlist"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false)
  const [contactMessage, setContactMessage] = useState("")
  const [waitlistMessage, setWaitlistMessage] = useState("")

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsContactSubmitting(true)
    setContactMessage("")

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        setContactMessage("Thanks for reaching out! We'll get back to you soon.")
        setContactForm({ name: "", email: "", message: "" })
      } else {
        setContactMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setContactMessage("Something went wrong. Please try again.")
    } finally {
      setIsContactSubmitting(false)
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!waitlistEmail) return

    setIsWaitlistSubmitting(true)
    setWaitlistMessage("")

    try {
      const formData = new FormData()
      formData.append("email", waitlistEmail)
      const result = await joinWaitlist(formData)

      if (result.success) {
        setWaitlistMessage("Thanks for joining! We'll be in touch soon.")
        setWaitlistEmail("")
      } else {
        setWaitlistMessage(result.error || "Something went wrong. Please try again.")
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
      <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Have questions about Rallie? We'd love to hear from you and help you get started
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <Badge className="mb-4 bg-purple-100 text-purple-800">Contact</Badge>
                  <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your tennis goals and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isContactSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isContactSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>

                  {contactMessage && (
                    <p className={`text-sm ${contactMessage.includes("Thanks") ? "text-purple-600" : "text-red-600"}`}>
                      {contactMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">hello@rallie.tennis</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-gray-600">303 Twin Dolpine Drive, Redwood City, CA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-fuchsia-50 border-purple-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with other tennis players and stay updated on Rallie's development.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                    >
                      Join Discord Community
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                    >
                      Follow on Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Tennis Training?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of tennis players who are already part of the Rallie community and be the first to
                experience AI coaching.
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
                    className="bg-violet-600 hover:bg-violet-700 text-white px-6"
                  >
                    {isWaitlistSubmitting ? "Joining..." : "Join Waitlist"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {waitlistMessage && (
                  <p
                    className={`mt-3 text-sm ${waitlistMessage.includes("Thanks") ? "text-violet-600" : "text-red-600"}`}
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
