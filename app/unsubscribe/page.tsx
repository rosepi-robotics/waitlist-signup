"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const [isUnsubscribing, setIsUnsubscribing] = useState(false)
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)
  const [emailInput, setEmailInput] = useState(email)
  const { toast } = useToast()

  const handleUnsubscribe = async () => {
    if (!emailInput) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsUnsubscribing(true)
    try {
      // Call the server action to unsubscribe
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      })

      const result = await response.json()

      if (result.success) {
        setIsUnsubscribed(true)
        toast({
          title: "Success",
          description: "You have been unsubscribed from our mailing list",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to unsubscribe",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsUnsubscribing(false)
    }
  }

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-52 pb-12 sm:px-6 lg:px-8">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Unsubscribe from Updates</h1>

          {isUnsubscribed ? (
            <div className="text-center py-8">
              <div className="bg-white/10 rounded-xl p-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">You've Been Unsubscribed</h2>
                <p>You will no longer receive emails from Rallie Tennis.</p>
                <p className="mt-4">Changed your mind? You can always re-join our waitlist on the homepage.</p>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <p className="mb-6 text-center">
                We're sorry to see you go. Please confirm your email address to unsubscribe from our mailing list.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <Button
                  onClick={handleUnsubscribe}
                  disabled={isUnsubscribing}
                  className="w-full bg-white text-black hover:bg-white/90"
                >
                  {isUnsubscribing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    "Unsubscribe"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
