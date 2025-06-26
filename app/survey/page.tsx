"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Gift, Calendar, Award, ArrowRight, Loader2, Clock, Share2 } from "lucide-react"
import { submitSurvey } from "../actions/survey"
import { joinWaitlist } from "../actions/waitlist"
import { useToast } from "@/components/ui/use-toast"

// Import the trackEvent function at the top of the file
import { trackEvent } from "../utils/analytics"

export default function Survey() {
  const searchParams = useSearchParams()
  const referralCode = searchParams.get("ref")

  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [participantCount, setParticipantCount] = useState<number | null>(null)
  const [referralUrl, setReferralUrl] = useState<string | null>(null)
  const [referralSuccess, setReferralSuccess] = useState(false)
  const { toast } = useToast()

  // Add this state at the top with other states
  const [copyButtonText, setCopyButtonText] = useState("Copy")
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false)

  // Update the formData state to include the new additionalFeedback field
  const [formData, setFormData] = useState({
    playFrequency: "",
    skillLevel: "",
    gender: "",
    ageGroup: "",
    playingExperience: "",
    learningPainPoint: "",
    usedBallMachine: "",
    // Fields for users who have used ball machines
    ballMachineFrequency: "",
    ballMachineOwnership: "",
    ballMachineBrand: "",
    ballMachineImprovement: "",
    // Fields for users who haven't used ball machines
    heardOfBallMachine: "",
    reasonForNotTrying: "",
    expectedCost: "",
    lobsterMachineImprovement: "",
    // New optional field for additional feedback
    additionalFeedback: "",
    desiredFeatures: [] as string[],
    email: "",
    // Add referral code if present
    referredBy: referralCode || "",
  })

  const [errors, setErrors] = useState<{
    [key: string]: string
  }>({})

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)

    // If there's a referral code, show a toast
    if (referralCode) {
      toast({
        title: "Referral Link Detected",
        description: "You're helping a friend increase their chances of winning!",
        duration: 5000,
      })
    }
  }, [referralCode, toast])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => {
      const newFeatures = checked
        ? [...prev.desiredFeatures, value]
        : prev.desiredFeatures.filter((item) => item !== value)

      // Clear error when field is edited
      if (errors.desiredFeatures && newFeatures.length > 0) {
        setErrors((prev) => ({ ...prev, desiredFeatures: "" }))
      }

      return { ...prev, desiredFeatures: newFeatures }
    })
  }

  // Update the validateStep function to make email optional
  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (step === 1) {
      if (!formData.playFrequency) newErrors.playFrequency = "Please select how often you play"
      if (!formData.skillLevel) newErrors.skillLevel = "Please select your skill level"
      if (!formData.gender) newErrors.gender = "Please select your gender"
      if (!formData.ageGroup) newErrors.ageGroup = "Please select your age group"
      if (!formData.playingExperience) newErrors.playingExperience = "Please select how long you've been playing"
      if (!formData.learningPainPoint.trim()) newErrors.learningPainPoint = "Please share your experience"
    } else if (step === 2) {
      if (!formData.usedBallMachine) newErrors.usedBallMachine = "Please select an option"

      // Validate fields for users who have used ball machines
      if (formData.usedBallMachine === "yes") {
        if (!formData.ballMachineFrequency)
          newErrors.ballMachineFrequency = "Please select how often you use a ball machine"
        if (!formData.ballMachineOwnership)
          newErrors.ballMachineOwnership = "Please select how you access a ball machine"
        if (!formData.ballMachineBrand.trim()) newErrors.ballMachineBrand = "Please provide brand information"
        if (!formData.ballMachineImprovement.trim()) newErrors.ballMachineImprovement = "Please share your thoughts"
      }
      // Validate fields for users who haven't used ball machines
      else if (formData.usedBallMachine === "no") {
        if (!formData.heardOfBallMachine) newErrors.heardOfBallMachine = "Please select an option"
        if (!formData.reasonForNotTrying.trim()) newErrors.reasonForNotTrying = "Please share your thoughts"
        if (!formData.expectedCost.trim()) newErrors.expectedCost = "Please provide your estimate"
        // Note: lobsterMachineImprovement is optional, so no validation needed
      }
    } else if (step === 3) {
      if (formData.desiredFeatures.length === 0) newErrors.desiredFeatures = "Please select at least one feature"

      // Email is now optional, but if provided, it must be valid
      if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  // Update the handleCopyReferralLink function:
  const handleCopyReferralLink = () => {
    if (referralUrl) {
      navigator.clipboard.writeText(referralUrl)
      setCopyButtonText("Copied!")
      toast({
        title: "Link copied!",
        description: "Your referral link has been copied to clipboard.",
        duration: 3000,
      })

      // Reset button text after 2 seconds
      setTimeout(() => {
        setCopyButtonText("Copy")
      }, 2000)
    }
  }

  const handleShare = async () => {
    if (referralUrl) {
      const shareData = {
        title: "Rallie Tennis Survey",
        text: "Help shape the future of tennis training and get a chance to win a $100 Tennis Warehouse gift card!",
        url: referralUrl,
      }

      if (navigator.share) {
        try {
          await navigator.share(shareData)
        } catch (err) {
          console.error("Error sharing:", err)
        }
      } else {
        handleCopyReferralLink()
      }
    }
  }

  // Find the handleSubmit function and update it to track submissions:

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(3)) return

    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      formDataObj.append("playFrequency", formData.playFrequency)
      formDataObj.append("skillLevel", formData.skillLevel)
      formDataObj.append("gender", formData.gender)
      formDataObj.append("ageGroup", formData.ageGroup)
      formDataObj.append("playingExperience", formData.playingExperience)
      formDataObj.append("learningPainPoint", formData.learningPainPoint)
      formDataObj.append("usedBallMachine", formData.usedBallMachine)

      // Only include relevant fields based on ball machine usage
      if (formData.usedBallMachine === "yes") {
        formDataObj.append("ballMachineFrequency", formData.ballMachineFrequency)
        formDataObj.append("ballMachineOwnership", formData.ballMachineOwnership)
        formDataObj.append("ballMachineBrand", formData.ballMachineBrand)
        formDataObj.append("ballMachineImprovement", formData.ballMachineImprovement)
      } else if (formData.usedBallMachine === "no") {
        formDataObj.append("heardOfBallMachine", formData.heardOfBallMachine)
        formDataObj.append("reasonForNotTrying", formData.reasonForNotTrying)
        formDataObj.append("expectedCost", formData.expectedCost)
        // Only include if the user provided a response (optional field)
        if (formData.lobsterMachineImprovement.trim()) {
          formDataObj.append("lobsterMachineImprovement", formData.lobsterMachineImprovement)
        }
      }

      // Include the new additional feedback field if provided
      if (formData.additionalFeedback.trim()) {
        formDataObj.append("additionalFeedback", formData.additionalFeedback)
      }

      formData.desiredFeatures.forEach((feature) => {
        formDataObj.append("desiredFeatures", feature)
      })

      // Include email if provided
      if (formData.email.trim()) {
        formDataObj.append("email", formData.email)
      }

      // Include referral code if present
      if (formData.referredBy) {
        formDataObj.append("referredBy", formData.referredBy)
      }

      const result = await submitSurvey(formDataObj)

      if (result.success) {
        // Track successful submission
        trackEvent("form_submit", "survey", "success", 1)

        toast({
          title: "Survey Submitted!",
          description: result.message,
          duration: 5000,
        })

        // If the user provided an email and got a referral code
        if (result.referralCode && result.referralUrl) {
          setReferralUrl(result.referralUrl)
          setReferralSuccess(true)
        }

        setCurrentStep(4)
        window.scrollTo(0, 0)
      } else {
        // Track failed submission
        trackEvent("form_submit", "survey", "error", 0)

        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
          duration: 5000,
        })

        // Set field-specific errors if available
        if (result.errors) {
          const fieldErrors: { [key: string]: string } = {}
          result.errors.forEach((error: any) => {
            fieldErrors[error.path[0]] = error.message
          })
          setErrors(fieldErrors)
        }
      }
    } catch (error) {
      // Track exception
      trackEvent("form_submit", "survey", "exception", 0)

      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!waitlistEmail.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
        duration: 3000,
      })
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(waitlistEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 3000,
      })
      return
    }

    setWaitlistSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("email", waitlistEmail)

      const result = await joinWaitlist(null, formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          duration: 5000,
        })
        setWaitlistEmail("")
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setWaitlistSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Organic Flowing Shapes with Bright Colors - Same as homepage */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[500px] blur-3xl animate-slow-pulse opacity-80 transform rotate-12"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 30% 40%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 45%, 
            rgba(34, 197, 94, 0.8) 100%)`,
          borderRadius: "60% 40% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/3 right-1/6 w-[600px] h-[400px] blur-3xl opacity-85 transform -rotate-45"
        style={{
          background: `radial-gradient(ellipse 70% 90% at 60% 30%, 
            rgba(59, 130, 246, 1.0) 0%, 
            rgba(251, 146, 60, 1.0) 60%, 
            rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "30% 70% 70% 30%",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] blur-3xl animate-slow-pulse opacity-75 transform rotate-45"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 40% 60%, 
            rgba(34, 197, 94, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 50%, 
            rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "40% 60% 60% 40%",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[480px] h-[380px] blur-3xl opacity-80 transform -rotate-30"
        style={{
          background: `radial-gradient(ellipse 75% 85% at 50% 70%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(34, 197, 94, 0.8) 40%, 
            rgba(59, 130, 246, 0.8) 100%)`,
          borderRadius: "70% 30% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/2 left-0 w-[420px] h-[350px] blur-3xl animate-slow-pulse opacity-70 transform rotate-75"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 20% 50%, 
            rgba(168, 85, 247, 1.0) 0%, 
            rgba(251, 146, 60, 1.0) 80%)`,
          borderRadius: "50% 50% 80% 20%",
        }}
      />

      <div
        className="absolute bottom-1/2 right-0 w-[460px] h-[320px] blur-3xl opacity-75 transform -rotate-60"
        style={{
          background: `radial-gradient(ellipse 80% 95% at 70% 30%, 
            rgba(34, 197, 94, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 70%)`,
          borderRadius: "20% 80% 40% 60%",
        }}
      />

      <div
        className="absolute top-3/4 left-1/2 w-[380px] h-[280px] blur-3xl animate-slow-pulse opacity-70 transform rotate-15"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 60% 40%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "80% 20% 60% 40%",
        }}
      />

      <div
        className="absolute top-1/6 right-1/2 w-[340px] h-[260px] blur-3xl opacity-75 transform -rotate-75"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 40% 60%, 
            rgba(59, 130, 246, 0.8) 0%, 
            rgba(34, 197, 94, 1.0) 50%, 
            rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "60% 40% 20% 80%",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extralight text-gray-700 mb-6">Join Our Tennis Revolution</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Help us build the perfect tennis ball machine and be part of our community
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Waitlist Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-200 shadow-sm">
            <div className="text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Join Our Waitlist</h2>

              <p className="text-lg text-gray-600 mb-8">
                Be the first to know when we launch! Join our waitlist to get:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 bg-white/50 rounded-lg p-4 border border-gray-200">
                  <Calendar className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">Exclusive progress updates</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/50 rounded-lg p-4 border border-gray-200">
                  <Gift className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">Early-bird discounts when we launch</span>
                </div>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-4 rounded-lg bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  disabled={waitlistSubmitting}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                  disabled={waitlistSubmitting}
                >
                  {waitlistSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Survey Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Help Us Build the Perfect Tennis Ball Machine</h2>

              <div className="flex items-center justify-center mb-6 text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <p>This survey takes only 2-3 minutes to complete</p>
              </div>

              <p className="text-lg text-gray-600 mb-6">Want to help shape our product and get an extra reward?</p>

              <div className="bg-yellow-100/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-yellow-600 mr-3" />
                  <span className="font-bold text-xl text-gray-900">Bonus Reward!</span>
                </div>
                <p className="text-gray-800 mb-2">
                  Complete this survey to enter our <span className="font-semibold">monthly drawing</span> for a
                  <span className="font-semibold text-yellow-700"> $100 Tennis Warehouse gift card</span>!
                </p>
                <p className="text-sm text-gray-600">
                  Drawing runs monthly until our launch in December 2025. The sooner you enter, the higher your chances!
                </p>
              </div>

              {currentStep < 4 && (
                <Button
                  onClick={() => setCurrentStep(1)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg"
                >
                  Start Survey & Enter Drawing
                </Button>
              )}
            </div>

            {/* Survey Steps - only show when survey is started */}
            {currentStep >= 1 && (
              <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <p className="text-lg text-center text-gray-600">
                      Your feedback will directly influence our product development.
                      <br />
                      Thank you for helping us create the best tennis ball machine possible!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="playFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                          How often do you play tennis? *
                        </label>
                        <select
                          id="playFrequency"
                          name="playFrequency"
                          value={formData.playFrequency}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.playFrequency ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
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
                        {errors.playFrequency && <p className="text-red-500 text-sm mt-1">{errors.playFrequency}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 mb-1">
                          What's your skill level? *
                        </label>
                        <select
                          id="skillLevel"
                          name="skillLevel"
                          value={formData.skillLevel}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.skillLevel ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
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
                        {errors.skillLevel && <p className="text-red-500 text-sm mt-1">{errors.skillLevel}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                          What's your gender? *
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.gender ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="nonbinary">Non-binary</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
                          What's your age group? *
                        </label>
                        <select
                          id="ageGroup"
                          name="ageGroup"
                          value={formData.ageGroup}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.ageGroup ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="under-18">Under 18</option>
                          <option value="18-24">18-24</option>
                          <option value="25-34">25-34</option>
                          <option value="35-44">35-44</option>
                          <option value="45-54">45-54</option>
                          <option value="55-64">55-64</option>
                          <option value="65+">65+</option>
                        </select>
                        {errors.ageGroup && <p className="text-red-500 text-sm mt-1">{errors.ageGroup}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="playingExperience" className="block text-sm font-medium text-gray-700 mb-1">
                          How long have you been playing tennis? *
                        </label>
                        <select
                          id="playingExperience"
                          name="playingExperience"
                          value={formData.playingExperience}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.playingExperience ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="less-than-1-year">Less than 1 year</option>
                          <option value="1-3-years">1-3 years</option>
                          <option value="3-5-years">3-5 years</option>
                          <option value="5-10-years">5-10 years</option>
                          <option value="10-plus-years">More than 10 years</option>
                          <option value="since-childhood">Since childhood</option>
                        </select>
                        {errors.playingExperience && (
                          <p className="text-red-500 text-sm mt-1">{errors.playingExperience}</p>
                        )}
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="learningPainPoint" className="block text-sm font-medium text-gray-700 mb-1">
                          What was your biggest pain point in learning and playing tennis? *
                        </label>
                        <textarea
                          id="learningPainPoint"
                          name="learningPainPoint"
                          value={formData.learningPainPoint}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="My biggest challenge was..."
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.learningPainPoint ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          required
                        />
                        {errors.learningPainPoint && (
                          <p className="text-red-500 text-sm mt-1">{errors.learningPainPoint}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <Button
                        onClick={handleNextStep}
                        className="bg-white text-black hover:bg-white/90 flex items-center"
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-8">
                    <p className="text-lg text-center text-gray-600 mb-6">
                      Tell us about your tennis practice and ball machine experience
                    </p>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="usedBallMachine" className="block text-sm font-medium text-gray-700 mb-1">
                          Have you ever used a tennis ball machine? *
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="usedBallMachine"
                              value="yes"
                              checked={formData.usedBallMachine === "yes"}
                              onChange={handleInputChange}
                              className="mr-2 h-4 w-4 text-blue-600"
                            />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="usedBallMachine"
                              value="no"
                              checked={formData.usedBallMachine === "no"}
                              onChange={handleInputChange}
                              className="mr-2 h-4 w-4 text-blue-600"
                            />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                        {errors.usedBallMachine && (
                          <p className="text-red-500 text-sm mt-1">{errors.usedBallMachine}</p>
                        )}
                      </div>

                      {/* Conditional questions for ball machine users */}
                      {formData.usedBallMachine === "yes" && (
                        <div className="space-y-6 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                          <h3 className="font-medium text-lg text-gray-900">
                            Tell us about your ball machine experience
                          </h3>

                          <div className="space-y-2">
                            <label
                              htmlFor="ballMachineFrequency"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              How frequently do you use a ball machine? *
                            </label>
                            <select
                              id="ballMachineFrequency"
                              name="ballMachineFrequency"
                              value={formData.ballMachineFrequency}
                              onChange={handleInputChange}
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.ballMachineFrequency ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            >
                              <option value="" disabled>
                                Select an option
                              </option>
                              <option value="weekly">Weekly or more</option>
                              <option value="monthly">Monthly</option>
                              <option value="quarterly">Every few months</option>
                              <option value="rarely">Rarely (once or twice a year)</option>
                              <option value="tried-once">I've only tried it once or twice</option>
                            </select>
                            {errors.ballMachineFrequency && (
                              <p className="text-red-500 text-sm mt-1">{errors.ballMachineFrequency}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="ballMachineOwnership"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              How do you access a ball machine? *
                            </label>
                            <select
                              id="ballMachineOwnership"
                              name="ballMachineOwnership"
                              value={formData.ballMachineOwnership}
                              onChange={handleInputChange}
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.ballMachineOwnership ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            >
                              <option value="" disabled>
                                Select an option
                              </option>
                              <option value="own">I own one</option>
                              <option value="rent">I rent one</option>
                              <option value="club">Provided by my tennis club/facility</option>
                              <option value="friend">I use a friend's machine</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.ballMachineOwnership && (
                              <p className="text-red-500 text-sm mt-1">{errors.ballMachineOwnership}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="ballMachineBrand" className="block text-sm font-medium text-gray-700 mb-1">
                              Which brand/model do you use, and why did you choose it? *
                            </label>
                            <textarea
                              id="ballMachineBrand"
                              name="ballMachineBrand"
                              value={formData.ballMachineBrand}
                              onChange={handleInputChange}
                              rows={2}
                              placeholder="I use a [brand/model] because..."
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.ballMachineBrand ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.ballMachineBrand && (
                              <p className="text-red-500 text-sm mt-1">{errors.ballMachineBrand}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="ballMachineImprovement"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              If you could change one thing about your current machine to make it better, what would it
                              be? *
                            </label>
                            <textarea
                              id="ballMachineImprovement"
                              name="ballMachineImprovement"
                              value={formData.ballMachineImprovement}
                              onChange={handleInputChange}
                              rows={3}
                              placeholder="I would improve..."
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.ballMachineImprovement ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.ballMachineImprovement && (
                              <p className="text-red-500 text-sm mt-1">{errors.ballMachineImprovement}</p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Conditional questions for non-users of ball machines */}
                      {formData.usedBallMachine === "no" && (
                        <div className="space-y-6 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                          <h3 className="font-medium text-lg text-gray-900">
                            Tell us about your awareness of ball machines
                          </h3>

                          <div className="space-y-2">
                            <label
                              htmlFor="heardOfBallMachine"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Have you heard of tennis ball machines or seen friends using one? *
                            </label>
                            <select
                              id="heardOfBallMachine"
                              name="heardOfBallMachine"
                              value={formData.heardOfBallMachine}
                              onChange={handleInputChange}
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.heardOfBallMachine ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            >
                              <option value="" disabled>
                                Select an option
                              </option>
                              <option value="yes-seen">Yes, I've seen them in use</option>
                              <option value="yes-heard">Yes, I've heard of them but never seen one</option>
                              <option value="no">No, I'm not familiar with them</option>
                            </select>
                            {errors.heardOfBallMachine && (
                              <p className="text-red-500 text-sm mt-1">{errors.heardOfBallMachine}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="reasonForNotTrying"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              What has prevented you from trying a ball machine? *
                            </label>
                            <textarea
                              id="reasonForNotTrying"
                              name="reasonForNotTrying"
                              value={formData.reasonForNotTrying}
                              onChange={handleInputChange}
                              rows={2}
                              placeholder="I haven't tried one because..."
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.reasonForNotTrying ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.reasonForNotTrying && (
                              <p className="text-red-500 text-sm mt-1">{errors.reasonForNotTrying}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="expectedCost" className="block text-sm font-medium text-gray-700 mb-1">
                              What do you think a good tennis ball machine should cost? *
                            </label>
                            <input
                              type="text"
                              id="expectedCost"
                              name="expectedCost"
                              value={formData.expectedCost}
                              onChange={handleInputChange}
                              placeholder="$..."
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.expectedCost ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.expectedCost && <p className="text-red-500 text-sm mt-1">{errors.expectedCost}</p>}
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="lobsterMachineImprovement"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              If you could change one thing about{" "}
                              <a
                                href="https://www.lobstersports.com/products/elite-two"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                this Lobster machine
                              </a>{" "}
                              that would make you want to try it, what would it be?
                            </label>
                            <textarea
                              id="lobsterMachineImprovement"
                              name="lobsterMachineImprovement"
                              value={formData.lobsterMachineImprovement}
                              onChange={handleInputChange}
                              rows={3}
                              placeholder="I would change... (optional)"
                              className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                                errors.lobsterMachineImprovement ? "border-red-500" : "border-gray-300"
                              } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            <p className="text-xs text-gray-500 mt-1">This question is optional</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 flex justify-between">
                      <Button
                        onClick={handlePrevStep}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleNextStep}
                        className="bg-white text-black hover:bg-white/90 flex items-center"
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <p className="text-lg text-center text-gray-600 mb-6">
                      Almost done! Just a few more details to help us build the perfect machine
                    </p>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="block text-sm font-medium text-gray-700 mb-2">
                          Which features would you value most in a tennis ball machine? (Select all that apply) *
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
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
                                className="mr-2 h-4 w-4 text-blue-600 rounded"
                              />
                              <label htmlFor={feature} className="text-gray-700">
                                {feature}
                              </label>
                            </div>
                          ))}
                        </div>
                        {errors.desiredFeatures && (
                          <p className="text-red-500 text-sm mt-1">{errors.desiredFeatures}</p>
                        )}
                      </div>

                      <div className="space-y-2 pt-4">
                        <label htmlFor="additionalFeedback" className="block text-sm font-medium text-gray-700 mb-1">
                          Anything else you want to share with us?
                        </label>
                        <textarea
                          id="additionalFeedback"
                          name="additionalFeedback"
                          value={formData.additionalFeedback}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="This can be anything about tennis ball machines, tennis, or even not about tennis..."
                          className="w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">This question is optional</p>
                      </div>

                      <div className="space-y-2 pt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email (for gift card drawing and product updates)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className={`w-full p-3 rounded-lg bg-white/70 backdrop-blur-sm border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {errors.email ? (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        ) : (
                          <p className="text-xs text-gray-500 mt-1">
                            We need your email to enter you in the gift card drawing and send product updates. If you
                            don't provide an email, you won't be eligible for the drawing. By providing your email,
                            you'll be automatically added to our waitlist. We'll never share your email with third
                            parties or spam you.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Back
                      </Button>
                      <Button type="submit" className="bg-white text-black hover:bg-white/90" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                          </>
                        ) : (
                          "Submit Survey"
                        )}
                      </Button>
                    </div>
                  </form>
                )}

                {currentStep === 4 && (
                  <div className="text-center py-10 space-y-6">
                    <div className="bg-green-100/80 backdrop-blur-sm rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 border border-green-200">
                      <Award className="h-10 w-10 text-green-600" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>

                    <p className="text-lg max-w-2xl mx-auto text-gray-600">
                      Your feedback is invaluable to us as we develop our tennis ball machine.
                      {formData.email
                        ? " You've been entered into our monthly drawing for a $100 Tennis Warehouse gift card and added to our waitlist!"
                        : " Unfortunately, without an email address, we couldn't enter you into our gift card drawing or add you to our waitlist."}
                    </p>

                    {referralSuccess && referralUrl && (
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 max-w-md mx-auto mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Increase Your Chances of Winning!</h3>
                        <p className="mb-4 text-gray-600">
                          Share your unique referral link with friends. For each person who completes the survey using
                          your link, you'll get an additional entry in the drawing!
                        </p>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4 flex items-center justify-between border border-gray-200">
                          <code className="text-sm overflow-x-auto whitespace-nowrap max-w-[calc(100%-80px)] text-gray-800">
                            {referralUrl}
                          </code>
                          <Button
                            onClick={handleCopyReferralLink}
                            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
                            size="sm"
                          >
                            {copyButtonText}
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          <Button onClick={handleShare} className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Share2 className="mr-2 h-4 w-4" /> Share
                          </Button>
                          <Link href={`/referrals/${referralUrl.split("ref=")[1]}`}>
                            <Button className="bg-green-600 hover:bg-green-700 text-white">
                              View Referral Dashboard
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}

                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 max-w-md mx-auto mt-8">
                      <p className="text-sm text-gray-600">
                        {formData.email
                          ? "Winners are selected on the 1st of each month and notified via email. Good luck!"
                          : "If you'd like to enter the drawing and join our waitlist, please take the survey again and include your email address."}
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link href="/">
                        <Button className="bg-white text-black hover:bg-white/90">Return to Home</Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Progress indicator */}
                {currentStep >= 1 && currentStep < 4 && (
                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Step {currentStep} of 3</span>
                      <span className="text-sm text-gray-500">
                        {currentStep === 1 ? "Basic Info" : currentStep === 2 ? "Experience" : "Preferences"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
