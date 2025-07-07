"use client"

import { useState } from "react"
import { Navbar } from "@/app/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  sendTestEmail,
  sendUpdateToSubscribers,
  sendWinnerEmail,
  sendTestJuneEmail,
  sendJuneUpdateToSubscribers,
} from "@/app/actions/email"
import { Loader2, List } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { logout } from "@/app/actions/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminEmailPage() {
  const [testEmail, setTestEmail] = useState("")
  const [isSendingTest, setIsSendingTest] = useState(false)
  const [isSendingBulk, setIsSendingBulk] = useState(false)
  const [isSendingJuneTest, setIsSendingJuneTest] = useState(false)
  const [isSendingJuneBulk, setIsSendingJuneBulk] = useState(false)
  const [bulkResult, setBulkResult] = useState<any>(null)
  const [juneBulkResult, setJuneBulkResult] = useState<any>(null)
  const { toast } = useToast()
  const router = useRouter()

  // Add a new state for the winner email
  const [isWinnerEmailTest, setIsWinnerEmailTest] = useState(false)
  const [isSendingWinnerEmail, setIsSendingWinnerEmail] = useState(false)

  const handleLogout = async () => {
    await logout()
    router.push("/admin/login")
  }

  const handleSendTest = async () => {
    if (!testEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      })
      return
    }

    setIsSendingTest(true)
    try {
      const result = await sendTestEmail(testEmail)

      if (result.success) {
        toast({
          title: "Success",
          description: `Test email sent to ${testEmail}`,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send test email",
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
      setIsSendingTest(false)
    }
  }

  const handleSendJuneTest = async () => {
    if (!testEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      })
      return
    }

    setIsSendingJuneTest(true)
    try {
      const result = await sendTestJuneEmail(testEmail)

      if (result.success) {
        toast({
          title: "Success",
          description: `June test email sent to ${testEmail}`,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send June test email",
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
      setIsSendingJuneTest(false)
    }
  }

  const handleSendToAll = async () => {
    if (!confirm("Are you sure you want to send this update to ALL subscribers? This action cannot be undone.")) {
      return
    }

    setIsSendingBulk(true)
    setBulkResult(null)

    try {
      const result = await sendUpdateToSubscribers()
      setBulkResult(result)

      if (result.success) {
        toast({
          title: "Success",
          description: `Email sent to ${result.successCount} of ${result.totalSent} subscribers`,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send emails",
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
      setIsSendingBulk(false)
    }
  }

  const handleSendJuneToAll = async () => {
    if (!confirm("Are you sure you want to send the June update to ALL subscribers? This action cannot be undone.")) {
      return
    }

    setIsSendingJuneBulk(true)
    setJuneBulkResult(null)

    try {
      const result = await sendJuneUpdateToSubscribers()
      setJuneBulkResult(result)

      if (result.success) {
        toast({
          title: "Success",
          description: `June email sent to ${result.successCount} of ${result.totalSent} subscribers`,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send June emails",
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
      setIsSendingJuneBulk(false)
    }
  }

  // Add this new function after the existing handleSendToAll function
  const handleSendWinnerTest = async () => {
    if (!testEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address for testing",
        variant: "destructive",
      })
      return
    }

    setIsWinnerEmailTest(true)
    try {
      const result = await sendWinnerEmail(testEmail)

      if (result.success) {
        toast({
          title: "Success",
          description: `Test winner email sent to ${testEmail}`,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send test winner email",
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
      setIsWinnerEmailTest(false)
    }
  }

  const handleSendWinnerEmail = async () => {
    if (!confirm("Are you sure you want to send the winner notification to Delice? This action cannot be undone.")) {
      return
    }

    setIsSendingWinnerEmail(true)
    try {
      const result = await sendWinnerEmail()

      if (result.success) {
        toast({
          title: "Success",
          description: "Winner notification email sent to Delice",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send winner email",
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
      setIsSendingWinnerEmail(false)
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
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Email Management</h1>
            <div className="flex space-x-4">
              <Link href="/admin/emails">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  <List className="h-4 w-4 mr-2" />
                  View Sent Emails
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Logout
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Test Email Input */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">Test Email Address</h2>
              <Input
                type="email"
                placeholder="Enter your email for testing"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>

            {/* June Update Email Section */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">June Update Email</h2>
              <p className="mb-4">
                Send the June progress update featuring team growth, first field test results, new logo, and social
                media links.
              </p>

              <div className="flex gap-4 items-start mb-4">
                <Button
                  onClick={handleSendJuneTest}
                  disabled={isSendingJuneTest}
                  className="bg-white text-black hover:bg-white/90"
                >
                  {isSendingJuneTest ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send June Test"
                  )}
                </Button>
                <Button
                  onClick={handleSendJuneToAll}
                  disabled={isSendingJuneBulk}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {isSendingJuneBulk ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send June Update to All"
                  )}
                </Button>
              </div>

              {juneBulkResult && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <h3 className="font-medium mb-2">June Email Results:</h3>
                  {juneBulkResult.success ? (
                    <div>
                      <p>Total subscribers: {juneBulkResult.totalSent}</p>
                      <p>Successfully sent: {juneBulkResult.successCount}</p>
                      <p>Failed: {juneBulkResult.failureCount}</p>
                      <p className="mt-2">
                        <Link href="/admin/emails" className="text-blue-300 hover:underline">
                          View detailed results
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <p className="text-red-400">{juneBulkResult.error}</p>
                  )}
                </div>
              )}
            </div>

            {/* Send Test Email Section (May Update) */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">May Update Email (Legacy)</h2>
              <p className="mb-4">
                Send a test email to verify the content and formatting before sending to all subscribers.
              </p>

              <div className="flex gap-4 items-start">
                <Button
                  onClick={handleSendTest}
                  disabled={isSendingTest}
                  className="bg-white text-black hover:bg-white/90"
                >
                  {isSendingTest ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send May Test"
                  )}
                </Button>
              </div>
            </div>

            {/* Send to All Subscribers Section (May Update) */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">Send May Update to All Subscribers</h2>
              <p className="mb-4">Send the May update email to all subscribers. This action cannot be undone.</p>

              <Button
                onClick={handleSendToAll}
                disabled={isSendingBulk}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSendingBulk ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send May Update to All Subscribers"
                )}
              </Button>

              {bulkResult && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <h3 className="font-medium mb-2">May Email Results:</h3>
                  {bulkResult.success ? (
                    <div>
                      <p>Total subscribers: {bulkResult.totalSent}</p>
                      <p>Successfully sent: {bulkResult.successCount}</p>
                      <p>Failed: {bulkResult.failureCount}</p>
                      <p className="mt-2">
                        <Link href="/admin/emails" className="text-blue-300 hover:underline">
                          View detailed results
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <p className="text-red-400">{bulkResult.error}</p>
                  )}
                </div>
              )}
            </div>

            {/* Winner Notification Email Section */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">Winner Notification Email</h2>
              <p className="mb-4">Send a congratulatory email to Delice, the winner of the May draw.</p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Button
                    onClick={handleSendWinnerTest}
                    disabled={isWinnerEmailTest}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    {isWinnerEmailTest ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Test Winner Email"
                    )}
                  </Button>
                </div>

                <Button
                  onClick={handleSendWinnerEmail}
                  disabled={isSendingWinnerEmail}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  {isSendingWinnerEmail ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Winner Email to Delice"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
