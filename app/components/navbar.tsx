"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-black/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
              <Image
                src="/images/rallie-logo-white.png"
                alt="Rallie logo"
                width={100}
                height={24}
                priority
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/brand-story"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Story
              </Link>
              <Link
                href="/contact"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/survey"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Take Survey to Win $100
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-white/20 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              <Link
                href="/"
                className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/brand-story"
                className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Story
              </Link>
              <Link
                href="/contact"
                className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/survey"
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2"
                onClick={closeMenu}
              >
                Take Survey to Win $100
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
