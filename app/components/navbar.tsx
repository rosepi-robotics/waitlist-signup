"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/rallie-logo-white.png" alt="Rallie" width={120} height={40} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/brand-story" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/updates" className="hover:text-blue-400 transition-colors">
              Updates
            </Link>
            <Link href="/faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link
              href="/survey"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Take Survey to Win $100
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/brand-story"
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/updates"
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Updates
              </Link>
              <Link href="/faq" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/survey"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors font-medium inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
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
