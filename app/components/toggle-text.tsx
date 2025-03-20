"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const messages = [
  "Frustrated with $100+ per hour tennis lessons?",
  "Tired of hitting partner no-shows?",
  "Sick of bulky, outdated ball machines that break down often?",
]

// Define the gradient style for the text
const textGradientStyle = {
  background: "linear-gradient(90deg, #4ade80 0%, #0ea5e9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
}

export function ToggleText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 4000) // Change message every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-4 w-full">
      {/* Increased height significantly for mobile to accommodate 4 lines */}
      <div className="h-36 sm:h-20 flex items-center justify-center sm:justify-start overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-2xl md:text-3xl font-medium text-center sm:text-left w-full px-4 sm:px-0 leading-tight"
            style={textGradientStyle}
          >
            {messages[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

