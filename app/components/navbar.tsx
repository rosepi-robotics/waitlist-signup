"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Rajdhani } from "next/font/google"
import { Button } from "@/components/ui/button"

// Import the trackEvent function at the top of the file
import { trackEvent } from "../utils/analytics"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

// Define the gradient style for the logo
const logoGradientStyle = {
  background: "linear-gradient(to right, #c64f34, #ffd700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide/show navbar based on scroll direction
      if (currentScrollY > 100) {
        // If scrolling down, hide the navbar
        if (currentScrollY > lastScrollY.current) {
          setVisible(false)
        } else {
          // If scrolling up, show the navbar
          setVisible(true)
        }
      } else {
        // Always show navbar at the top of the page
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-36 items-center justify-between">
          <div className="flex items-center pl-4 md:pl-8 pt-6">
            <Link
              href="/"
              className={`${rajdhani.className} font-bold text-5xl hover:opacity-90 transition-opacity`}
              style={logoGradientStyle}
            >
              rallie
            </Link>
          </div>

          {/* Desktop navigation - grouped in a rounded container */}
          <div className="hidden md:flex items-center">
            <div className="bg-black/80 backdrop-blur-md rounded-full px-5 py-3 flex items-center">
              <Link
                href="/brand-story"
                className="text-white text-sm hover:text-white/80 transition-all font-medium px-6 py-2"
                onClick={() => trackEvent("button_click", "navigation", "brand_story")}
              >
                The Rallie Story
              </Link>
              <Link
                href="/progress"
                className="text-white text-sm hover:text-white/80 transition-all font-medium px-6 py-2"
                onClick={() => trackEvent("button_click", "navigation", "progress")}
              >
                Follow Our Progress
              </Link>
              <Link href="/survey" onClick={() => trackEvent("button_click", "navigation", "survey")}>
                <Button className="bg-white hover:bg-white/90 text-black rounded-full font-medium ml-4 px-6 py-1 h-9 text-sm">
                  Take Survey and Win $100
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-36 left-0 right-0 bg-black/80 backdrop-blur-md p-4 shadow-md">
          <div className="container mx-auto px-6">
            <div className="flex flex-col space-y-4 py-2">
              <Link
                href="/brand-story"
                className="text-white text-sm hover:text-white/80 transition-colors px-4 py-2"
                onClick={() => {
                  setIsMenuOpen(false)
                  trackEvent("button_click", "navigation_mobile", "brand_story")
                }}
              >
                The Rallie Story
              </Link>
              <Link
                href="/progress"
                className="text-white text-sm hover:text-white/80 transition-colors px-4 py-2"
                onClick={() => {
                  setIsMenuOpen(false)
                  trackEvent("button_click", "navigation_mobile", "progress")
                }}
              >
                Follow Our Progress
              </Link>
              <div className="pt-2 border-t border-white/20">
                <Link
                  href="/survey"
                  className="block text-center bg-white hover:bg-white/90 text-black rounded-full font-medium px-6 py-2 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false)
                    trackEvent("button_click", "navigation_mobile", "survey")
                  }}
                >
                  Take Survey and Win $100
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

