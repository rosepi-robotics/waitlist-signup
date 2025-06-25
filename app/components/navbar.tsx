"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "../utils/analytics"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrolledDown = currentScrollY > 20
      const scrollingUp = currentScrollY < lastScrollY

      setIsScrolled(scrolledDown)

      // Show logo when scrolled down AND scrolling up
      setShowLogo(scrolledDown && scrollingUp)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/rallie-logo-white.png" alt="Rallie" className="h-8 w-auto transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/brand-story"
              className="font-medium text-gray-300 hover:text-white transition-colors text-sm tracking-wide"
              onClick={() => trackEvent("button_click", "navigation", "story")}
            >
              STORY
            </Link>
            <Link
              href="/progress"
              className="font-medium text-gray-300 hover:text-white transition-colors text-sm tracking-wide"
              onClick={() => trackEvent("button_click", "navigation", "progress")}
            >
              PROGRESS
            </Link>
            <Link href="/survey" onClick={() => trackEvent("button_click", "navigation", "survey")}>
              <Button className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-2 rounded-none text-sm tracking-wide">
                JOIN BETA
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/brand-story"
                className="text-gray-300 hover:text-white font-medium px-4 py-2 text-sm tracking-wide"
                onClick={() => {
                  setIsMenuOpen(false)
                  trackEvent("button_click", "navigation_mobile", "story")
                }}
              >
                STORY
              </Link>
              <Link
                href="/progress"
                className="text-gray-300 hover:text-white font-medium px-4 py-2 text-sm tracking-wide"
                onClick={() => {
                  setIsMenuOpen(false)
                  trackEvent("button_click", "navigation_mobile", "progress")
                }}
              >
                PROGRESS
              </Link>
              <div className="px-4">
                <Link
                  href="/survey"
                  onClick={() => {
                    setIsMenuOpen(false)
                    trackEvent("button_click", "navigation_mobile", "survey")
                  }}
                >
                  <Button className="w-full bg-white text-black hover:bg-gray-100 font-medium rounded-none text-sm tracking-wide">
                    JOIN BETA PROGRAM
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
