"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Mail, User } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { joinWaitlist } from "@/app/actions/waitlist"

export default function UpdatesPage() {
  const [activeTab, setActiveTab] = useState("all")
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

  const insights = [
    {
      id: "ai-tennis-coach",
      title: "The Future of Tennis Coaching: How AI is Revolutionizing the Game",
      excerpt:
        "Discover how artificial intelligence and robotics is transforming tennis training, making professional-level coaching accessible to players of all skill levels.",
      date: "2025-06-28",
      readTime: "5 min read",
      author: "Sophie Luo",
      category: "insights",
      slug: "/insights/ai-tennis-coach",
    },
  ]

  const progress = [
    {
      id: "first-field-test",
      title: "First Field Test Success + New Logo Reveal",
      excerpt:
        "We did our first field test and the results exceeded expectations! The system is working perfectly, creating incredibly fast and strong balls with its compact design. Plus, we're revealing our new logo.",
      date: "2025-06-23",
      readTime: "8 min read",
      author: "Development Team",
      category: "progress",
      slug: "/progress/first-field-test",
    },
  ]

  const allUpdates = [...insights, ...progress].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const getFilteredUpdates = () => {
    switch (activeTab) {
      case "insights":
        return insights
      case "progress":
        return progress
      default:
        return allUpdates
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Updates</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Insights, progress updates, and behind-the-scenes content from the Rallie team
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-1 shadow-sm border">
            <div className="flex">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "all" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                All Updates
              </button>
              <button
                onClick={() => setActiveTab("insights")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "insights" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Insights
              </button>
              <button
                onClick={() => setActiveTab("progress")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "progress" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {getFilteredUpdates().map((update) => (
              <Card key={update.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge
                        className={
                          update.category === "insights" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                        }
                      >
                        {update.category.toUpperCase()}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(update.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {update.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {update.author}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-gray-900">{update.title}</h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">{update.excerpt}</p>

                    <Link href={update.slug}>
                      <Button variant="outline" className="group bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {getFilteredUpdates().length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No updates found for this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be the first to know about new features, insights, and progress updates. Join our waitlist to stay in
                the loop.
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
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {message && (
                  <p className={`mt-3 text-sm ${message.includes("Thanks") ? "text-indigo-600" : "text-red-600"}`}>
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
