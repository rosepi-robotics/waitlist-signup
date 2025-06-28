"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react"
import { FacebookIcon } from "../components/icons/facebook-icon"
import { InstagramIcon } from "../components/icons/instagram-icon"
import { YouTubeIcon } from "../components/icons/youtube-icon"
import { submitContactForm } from "../actions/contact"
import { joinWaitlist } from "../actions/waitlist"

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [isSubmittingWaitlist, setIsSubmittingWaitlist] = useState(false)
  const [contactMessage, setContactMessage] = useState("")
  const [waitlistMessage, setWaitlistMessage] = useState("")

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingContact(true)
    setContactMessage("")

    try {
      const formData = new FormData()
      formData.append("name", contactForm.name)
      formData.append("email", contactForm.email)
      formData.append("message", contactForm.message)

      const result = await submitContactForm(formData)

      if (result.success) {
        setContactMessage("Thanks for reaching out! We'll get back to you soon.")
        setContactForm({ name: "", email: "", message: "" })
      } else {
        setContactMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setContactMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmittingContact(false)
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!waitlistEmail) return

    setIsSubmittingWaitlist(true)
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
      setIsSubmittingWaitlist(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-purple-100 text-purple-800">CONTACT</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Have questions about Rallie? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us about your tennis goals and how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isSubmittingContact ? "Sending..." : "Send Message"}
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
              {/* Contact Details */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">hello@rallie.tennis</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Join Our Community */}
              <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-gray-600 mb-6">
                    Connect with other tennis players and stay updated on Rallie's development.
                  </p>

                  <div className="flex gap-3 mb-6">
                    <a
                      href="https://www.facebook.com/groups/rallietennis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <FacebookIcon className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href="https://www.instagram.com/rallie.tennis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <InstagramIcon className="w-5 h-5 text-pink-600" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <YouTubeIcon className="w-5 h-5 text-red-600" />
                    </a>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Join Facebook Group for community discussions</p>
                    <p>• Follow on Instagram for behind-the-scenes content</p>
                    <p>• Subscribe on YouTube for product demos and updates</p>
                  </div>
                </CardContent>
              </Card>

              {/* Waitlist CTA */}
              <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Join the Waitlist</h3>
                  <p className="text-gray-600 mb-6">
                    Be the first to know when Rallie becomes available and get exclusive early access.
                  </p>

                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
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
                        disabled={isSubmittingWaitlist}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6"
                      >
                        {isSubmittingWaitlist ? "Joining..." : "Join"}
                      </Button>
                    </div>
                    {waitlistMessage && (
                      <p
                        className={`text-sm ${waitlistMessage.includes("Thanks") ? "text-indigo-600" : "text-red-600"}`}
                      >
                        {waitlistMessage}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
