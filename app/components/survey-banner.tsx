"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { trackEvent } from "../utils/analytics"

export function SurveyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Add useEffect to handle any initialization that needs the window object
  useEffect(() => {
    // Any client-side only code can go here
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 text-white py-6 px-6 z-50" style={{ backgroundColor: "#042d62" }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="hidden sm:inline mr-2 text-xl">🎾</span>
          <p className="text-base sm:text-lg font-medium">
            Help shape the future of tennis training! Take survey and win $100.
          </p>
        </div>
        <div className="flex items-center">
          <Link
            href="/survey"
            className="bg-white hover:bg-blue-50 transition-colors px-6 py-2 rounded-full text-base font-medium mr-3"
            style={{ color: "#042d62" }}
            onClick={() => trackEvent("button_click", "banner", "take_survey")}
          >
            Take Survey
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-blue-100 transition-colors"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

