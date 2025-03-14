"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Rajdhani } from "next/font/google"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-black/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className={`${rajdhani.className} text-white font-bold text-2xl`}>
          Rallie
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/brand-story" className="text-white text-sm hover:text-white/80 transition-colors">
            Brand Story
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              href="/brand-story"
              className="text-white text-sm hover:text-white/80 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Brand Story
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

