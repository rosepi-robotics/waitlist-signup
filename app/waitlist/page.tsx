"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "../components/navbar"
import { WaitlistForm } from "../components/waitlist-form"
import { useState } from "react"

export default function Waitlist() {
  const [waitlistCount, setWaitlistCount] = useState(0)

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 100)
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Waitlist container */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join Our Waitlist</h1>

          <p className="text-lg mb-8">
            Be the first to know when our revolutionary tennis ball machine launches. Enter your email below to join our
            waitlist and receive exclusive updates.
          </p>

          <WaitlistForm onSuccess={handleSuccess} />

          {waitlistCount > 0 && (
            <div className="mt-4 text-center">
              <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-white/20">
            <h2 className="text-2xl font-semibold mb-4">Why Join Our Waitlist?</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Be the first to know when our product launches</li>
              <li>Get exclusive early-bird pricing</li>
              <li>Receive insider updates on product development</li>
              <li>Opportunity to provide feedback and shape the final product</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

