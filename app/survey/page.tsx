"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "../components/navbar"
import { Button } from "@/components/ui/button"
import { Gift, Calendar, Award, ArrowRight, Loader2, Clock } from "lucide-react"
import { submitSurvey } from "../actions/survey"
import { useToast } from "@/components/ui/use-toast"

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [participantCount, setParticipantCount] = useState<number | null>(null)
  const { toast } = useToast()

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
  })

  const [errors, setErrors] = useState<{
    [key: string]: string
  }>({})

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

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

  // Update the handleSubmit function to include the new field
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

      const result = await submitSurvey(formDataObj)

      if (result.success) {
        toast({
          title: "Survey Submitted!",
          description: result.message,
          duration: 5000,
        })
        setCurrentStep(4)
        window.scrollTo(0, 0)
      } else {
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

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        {/* Survey container - increased max-width from 4xl to 5xl */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            🎾 Help Us Build the Perfect Tennis Ball Machine 🎾
          </h1>

          {/* Added time estimate - only show on steps 1-3 */}
          {currentStep < 4 && (
            <div className="flex items-center justify-center mb-6 text-white/80">
              <Clock className="w-4 h-4 mr-2" />
              <p>This survey takes only 2-3 minutes to complete</p>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-8">
              {/* Prize information in a highlighted box */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h2 className="text-xl font-semibold flex items-center mb-4">
                  <Gift className="mr-2 h-5 w-5 text-green-400" />
                  Win a $100 Tennis Warehouse Gift Card!
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="mr-3 h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p>
                      Complete this survey to enter our <span className="font-semibold">monthly drawing</span> for a
                      $100 Tennis Warehouse gift card—running from now until our launch in December 2025!
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Award className="mr-3 h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <p>
                      The sooner you enter, the <span className="font-semibold">higher your chances</span> of winning as
                      the participant pool grows over time.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-center">
                Your feedback will directly influence our product development.
                <br />
                Thank you for helping us create the best tennis ball machine possible!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <label htmlFor="playFrequency" className="block text-sm font-medium mb-1">
                    How often do you play tennis? *
                  </label>
                  <select
                    id="playFrequency"
                    name="playFrequency"
                    value={formData.playFrequency}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.playFrequency ? "border-red-500" : "border-white/20"
                    } text-white`}
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
                  {errors.playFrequency && <p className="text-red-400 text-sm mt-1">{errors.playFrequency}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="skillLevel" className="block text-sm font-medium mb-1">
                    What's your skill level? *
                  </label>
                  <select
                    id="skillLevel"
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.skillLevel ? "border-red-500" : "border-white/20"
                    } text-white`}
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
                  {errors.skillLevel && <p className="text-red-400 text-sm mt-1">{errors.skillLevel}</p>}
                </div>

                {/* Added gender question */}
                <div className="space-y-2">
                  <label htmlFor="gender" className="block text-sm font-medium mb-1">
                    What's your gender? *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.gender ? "border-red-500" : "border-white/20"
                    } text-white`}
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
                  {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender}</p>}
                </div>

                {/* Added age group question */}
                <div className="space-y-2">
                  <label htmlFor="ageGroup" className="block text-sm font-medium mb-1">
                    What's your age group? *
                  </label>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.ageGroup ? "border-red-500" : "border-white/20"
                    } text-white`}
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
                  {errors.ageGroup && <p className="text-red-400 text-sm mt-1">{errors.ageGroup}</p>}
                </div>

                {/* Added playing experience question */}
                <div className="space-y-2">
                  <label htmlFor="playingExperience" className="block text-sm font-medium mb-1">
                    How long have you been playing tennis? *
                  </label>
                  <select
                    id="playingExperience"
                    name="playingExperience"
                    value={formData.playingExperience}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.playingExperience ? "border-red-500" : "border-white/20"
                    } text-white`}
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
                  {errors.playingExperience && <p className="text-red-400 text-sm mt-1">{errors.playingExperience}</p>}
                </div>

                {/* Added learning pain point question (open-ended) */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="learningPainPoint" className="block text-sm font-medium mb-1">
                    What was your biggest pain point in learning and playing tennis? *
                  </label>
                  <textarea
                    id="learningPainPoint"
                    name="learningPainPoint"
                    value={formData.learningPainPoint}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="My biggest challenge was..."
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.learningPainPoint ? "border-red-500" : "border-white/20"
                    } text-white`}
                    required
                  />
                  {errors.learningPainPoint && <p className="text-red-400 text-sm mt-1">{errors.learningPainPoint}</p>}
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <Button onClick={handleNextStep} className="bg-white text-black hover:bg-white/90 flex items-center">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Updated step 2 with conditional questions for both user types */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <p className="text-lg text-center mb-6">Tell us about your tennis practice and ball machine experience</p>

              <div className="space-y-6">
                {/* Ball machine experience question */}
                <div className="space-y-2">
                  <label htmlFor="usedBallMachine" className="block text-sm font-medium mb-1">
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
                        className="mr-2 h-4 w-4"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="usedBallMachine"
                        value="no"
                        checked={formData.usedBallMachine === "no"}
                        onChange={handleInputChange}
                        className="mr-2 h-4 w-4"
                      />
                      <span>No</span>
                    </label>
                  </div>
                  {errors.usedBallMachine && <p className="text-red-400 text-sm mt-1">{errors.usedBallMachine}</p>}
                </div>

                {/* Conditional questions for ball machine users */}
                {formData.usedBallMachine === "yes" && (
                  <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="font-medium text-lg">Tell us about your ball machine experience</h3>

                    <div className="space-y-2">
                      <label htmlFor="ballMachineFrequency" className="block text-sm font-medium mb-1">
                        How frequently do you use a ball machine? *
                      </label>
                      <select
                        id="ballMachineFrequency"
                        name="ballMachineFrequency"
                        value={formData.ballMachineFrequency}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.ballMachineFrequency ? "border-red-500" : "border-white/20"
                        } text-white`}
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
                        <p className="text-red-400 text-sm mt-1">{errors.ballMachineFrequency}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="ballMachineOwnership" className="block text-sm font-medium mb-1">
                        How do you access a ball machine? *
                      </label>
                      <select
                        id="ballMachineOwnership"
                        name="ballMachineOwnership"
                        value={formData.ballMachineOwnership}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.ballMachineOwnership ? "border-red-500" : "border-white/20"
                        } text-white`}
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
                        <p className="text-red-400 text-sm mt-1">{errors.ballMachineOwnership}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="ballMachineBrand" className="block text-sm font-medium mb-1">
                        Which brand/model do you use, and why did you choose it? *
                      </label>
                      <textarea
                        id="ballMachineBrand"
                        name="ballMachineBrand"
                        value={formData.ballMachineBrand}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="I use a [brand/model] because..."
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.ballMachineBrand ? "border-red-500" : "border-white/20"
                        } text-white`}
                      />
                      {errors.ballMachineBrand && (
                        <p className="text-red-400 text-sm mt-1">{errors.ballMachineBrand}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="ballMachineImprovement" className="block text-sm font-medium mb-1">
                        If you could change one thing about your current machine to make it better, what would it be? *
                      </label>
                      <textarea
                        id="ballMachineImprovement"
                        name="ballMachineImprovement"
                        value={formData.ballMachineImprovement}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="I would improve..."
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.ballMachineImprovement ? "border-red-500" : "border-white/20"
                        } text-white`}
                      />
                      {errors.ballMachineImprovement && (
                        <p className="text-red-400 text-sm mt-1">{errors.ballMachineImprovement}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Conditional questions for non-users of ball machines */}
                {formData.usedBallMachine === "no" && (
                  <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="font-medium text-lg">Tell us about your awareness of ball machines</h3>

                    <div className="space-y-2">
                      <label htmlFor="heardOfBallMachine" className="block text-sm font-medium mb-1">
                        Have you heard of tennis ball machines or seen friends using one? *
                      </label>
                      <select
                        id="heardOfBallMachine"
                        name="heardOfBallMachine"
                        value={formData.heardOfBallMachine}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.heardOfBallMachine ? "border-red-500" : "border-white/20"
                        } text-white`}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="yes-seen">Yes, I've seen them in use</option>
                        <option value="yes-heard">Yes, I've heard of them but never seen one</option>
                        <option value="no">No, I'm not familiar with them</option>
                      </select>
                      {errors.heardOfBallMachine && (
                        <p className="text-red-400 text-sm mt-1">{errors.heardOfBallMachine}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="reasonForNotTrying" className="block text-sm font-medium mb-1">
                        What has prevented you from trying a ball machine? *
                      </label>
                      <textarea
                        id="reasonForNotTrying"
                        name="reasonForNotTrying"
                        value={formData.reasonForNotTrying}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="I haven't tried one because..."
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.reasonForNotTrying ? "border-red-500" : "border-white/20"
                        } text-white`}
                      />
                      {errors.reasonForNotTrying && (
                        <p className="text-red-400 text-sm mt-1">{errors.reasonForNotTrying}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="expectedCost" className="block text-sm font-medium mb-1">
                        What do you think a good tennis ball machine should cost? *
                      </label>
                      <input
                        type="text"
                        id="expectedCost"
                        name="expectedCost"
                        value={formData.expectedCost}
                        onChange={handleInputChange}
                        placeholder="$..."
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.expectedCost ? "border-red-500" : "border-white/20"
                        } text-white`}
                      />
                      {errors.expectedCost && <p className="text-red-400 text-sm mt-1">{errors.expectedCost}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lobsterMachineImprovement" className="block text-sm font-medium mb-1">
                        If you could change one thing about{" "}
                        <a
                          href="https://www.lobstersports.com/products/elite-two"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-200 underline"
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
                        className={`w-full p-3 rounded-md bg-white/10 border ${
                          errors.lobsterMachineImprovement ? "border-red-500" : "border-white/20"
                        } text-white`}
                      />
                      <p className="text-xs text-white/70 mt-1">This question is optional</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 flex justify-between">
                <Button
                  onClick={handlePrevStep}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Back
                </Button>
                <Button onClick={handleNextStep} className="bg-white text-black hover:bg-white/90 flex items-center">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <p className="text-lg text-center mb-6">
                Almost done! Just a few more details to help us build the perfect machine
              </p>

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="block text-sm font-medium mb-2">
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
                          className="mr-2 h-4 w-4"
                        />
                        <label htmlFor={feature}>{feature}</label>
                      </div>
                    ))}
                  </div>
                  {errors.desiredFeatures && <p className="text-red-400 text-sm mt-1">{errors.desiredFeatures}</p>}
                </div>

                {/* New additional feedback field */}
                <div className="space-y-2 pt-4">
                  <label htmlFor="additionalFeedback" className="block text-sm font-medium mb-1">
                    Anything else you want to share with us?
                  </label>
                  <textarea
                    id="additionalFeedback"
                    name="additionalFeedback"
                    value={formData.additionalFeedback}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="This can be anything about tennis ball machines, tennis, or even not about tennis..."
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white"
                  />
                  <p className="text-xs text-white/70 mt-1">This question is optional</p>
                </div>

                <div className="space-y-2 pt-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email (for gift card drawing and product updates)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full p-3 rounded-md bg-white/10 border ${
                      errors.email ? "border-red-500" : "border-white/20"
                    } text-white`}
                  />
                  {errors.email ? (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  ) : (
                    <p className="text-xs text-white/70 mt-1">
                      We need your email to enter you in the gift card drawing and send product updates. If you don't
                      provide an email, you won't be eligible for the drawing. We'll never share your email with third
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
                  className="border-white text-white hover:bg-white/10"
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
              <div className="bg-white/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-yellow-400" />
              </div>

              <h2 className="text-2xl font-bold">Thank You!</h2>

              <p className="text-lg max-w-2xl mx-auto">
                Your feedback is invaluable to us as we develop our tennis ball machine.
                {formData.email
                  ? " You've been entered into our monthly drawing for a $100 Tennis Warehouse gift card!"
                  : " Unfortunately, without an email address, we couldn't enter you into our gift card drawing."}
              </p>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20 max-w-md mx-auto mt-8">
                <p className="text-sm">
                  {formData.email
                    ? "Winners are selected on the 1st of each month and notified via email. Good luck!"
                    : "If you'd like to enter the drawing, please take the survey again and include your email address."}
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
          {currentStep < 4 && (
            <div className="mt-10 pt-6 border-t border-white/20">
              <div className="flex justify-between">
                <span className="text-sm text-white/70">Step {currentStep} of 3</span>
                <span className="text-sm text-white/70">
                  {currentStep === 1 ? "Basic Info" : currentStep === 2 ? "Experience" : "Preferences"}
                </span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-green-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

