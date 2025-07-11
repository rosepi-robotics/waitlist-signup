"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/images/mavio-logo-white.png" alt="Mavio" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/brand-story"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/updates"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Updates
              </Link>
              <Link
                href="/faq"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link href="/survey">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium">
                  Take Survey to Win $100
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-blue-400 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link
              href="/brand-story"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/updates"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Updates
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/survey" className="block px-3 py-2" onClick={() => setIsOpen(false)}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-sm font-medium">
                Take Survey to Win $100
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
