"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "../components/navbar"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    playFrequency: "",
    skillLevel: "",
    currentPractice: "",
    painPoints: "",
    desiredFeatures: [],
    email: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => {
      if (checked) {
        return { ...prev, desiredFeatures: [...prev.desiredFeatures, value] }
      } else {
        return { ...prev, desiredFeatures: prev.desiredFeatures.filter((item) => item !== value) }
      }
    })
  }

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setCurrentStep(4) // Move to thank you step
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

        {/* Survey container */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Help Us Build the Perfect Tennis Ball Machine
          </h1>

          {currentStep === 1 && (
            <div className="space-y-6">
              <p className="text-lg">
                We're designing the next generation of tennis ball machines and would love your input. This survey will
                take about 2 minutes to complete.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="playFrequency" className="block text-sm font-medium mb-1">
                    How often do you play tennis?
                  </label>
                  <select
                    id="playFrequency"
                    name="playFrequency"
                    value={formData.playFrequency}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Several times a week</option>
                    <option value="monthly">A few times a month</option>
                    <option value="rarely">Rarely</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="skillLevel" className="block text-sm font-medium mb-1">
                    What's your skill level?
                  </label>
                  <select
                    id="skillLevel"
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button onClick={handleNextStep} className="bg-white text-black hover:bg-white/90">
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="currentPractice" className="block text-sm font-medium mb-1">
                  How do you currently practice when you don't have a partner?
                </label>
                <textarea
                  id="currentPractice"
                  name="currentPractice"
                  value={formData.currentPractice}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="painPoints" className="block text-sm font-medium mb-1">
                  What frustrates you most about existing tennis ball machines?
                </label>
                <textarea
                  id="painPoints"
                  name="painPoints"
                  value={formData.painPoints}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                  required
                />
              </div>

              <div className="pt-4 flex justify-between">
                <Button
                  onClick={handlePrevStep}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Back
                </Button>
                <Button onClick={handleNextStep} className="bg-white text-black hover:bg-white/90">
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="block text-sm font-medium mb-3">
                  Which features would you value most in a tennis ball machine? (Select all that apply)
                </p>
                <div className="space-y-2">
                  {[
                    "Portability",
                    "Battery life",
                    "Ball capacity",
                    "Speed control",
                    "Spin control",
                    "Remote control",
                    "Programmable drills",
                    "Mobile app control",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        id={feature}
                        name="desiredFeatures"
                        value={feature}
                        checked={formData.desiredFeatures.includes(feature)}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={feature}>{feature}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email (optional - for updates on our progress)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <Button
                  type="button"
                  onClick={handlePrevStep}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Back
                </Button>
                <Button type="submit" className="bg-white text-black hover:bg-white/90">
                  Submit
                </Button>
              </div>
            </form>
          )}

          {currentStep === 4 && (
            <div className="text-center py-8 space-y-6">
              <h2 className="text-2xl font-bold">Thank You!</h2>
              <p className="text-lg">
                Your feedback is invaluable to us as we develop our tennis ball machine. We appreciate you taking the
                time to share your thoughts.
              </p>
              <div className="pt-4">
                <Link href="/">
                  <Button className="bg-white text-black hover:bg-white/90">Return to Home</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

