"use client"

import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Navbar } from "../components/navbar"

export default function BrandStory() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        {/* Article header */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Brand Story</h1>

          <div className="flex items-center text-white/80 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <time dateTime="2025-03-13">March 13, 2025</time>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>Founder & CEO</span>
            </div>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Tennis ball machine in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white space-y-6">
          <p className="text-xl font-medium">
            [Your compelling introduction will go here. This should capture the essence of your brand and why you
            started this journey.]
          </p>

          <h2 className="text-2xl font-bold mt-8">The Beginning</h2>
          <p>
            [Share the origin story of your tennis ball machine concept. What problem did you identify? What was your
            personal connection to tennis? What motivated you to create a better solution?]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Early prototype"
              className="rounded-xl w-full h-auto"
            />
            <img src="/placeholder.svg?height=300&width=400" alt="Testing phase" className="rounded-xl w-full h-auto" />
          </div>

          <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
          <p>
            [Explain your mission and vision. What are you trying to achieve with this product? How will it change the
            way people practice tennis? What values drive your brand?]
          </p>

          <h2 className="text-2xl font-bold mt-8">The Innovation</h2>
          <p>
            [Detail what makes your tennis ball machine unique. Discuss the technology, durability, power, and
            affordability aspects you mentioned. Explain the intelligent features that set it apart from competitors.]
          </p>

          <blockquote className="border-l-4 border-white/50 pl-4 italic my-8">
            "Your powerful quote about innovation or tennis or the importance of practice could go here."
          </blockquote>

          <h2 className="text-2xl font-bold mt-8">Looking Forward</h2>
          <p>
            [Share your vision for the future. What's next for your product? How do you see it evolving? What impact do
            you hope to make in the tennis world?]
          </p>

          <h2 className="text-2xl font-bold mt-8">Join Our Journey</h2>
          <p>
            We're excited to have you join us on this journey. By signing up for our waitlist, you'll be among the first
            to experience our revolutionary tennis ball machine and help shape the future of tennis practice.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-white/90 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

