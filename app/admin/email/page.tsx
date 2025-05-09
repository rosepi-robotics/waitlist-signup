"use client"

import { useState } from "react"
import { Navbar } from "@/app/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendTestEmail, sendUpdateToSubscribers } from "@/app/actions/email"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AdminEmailPage() {
  const [testEmail, setTestEmail] = useState("")
  const [isSendingTest, setIsSendingTest] = useState(false)
  const [isSendingBulk, setIsSendingBulk] = useState(false)
  const [bulkResult, setBulkResult] = useState<any>(null)
  const { toast } = useToast()

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
          <h1 className="text-3xl font-bold mb-8">Email Management</h1>

          <div className="space-y-8">
            {/* Send Test Email Section */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">Send Test Email</h2>
              <p className="mb-4">
                Send a test email to verify the content and formatting before sending to all subscribers.
              </p>

              <div className="flex gap-4 items-start">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                />
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
                    "Send Test"
                  )}
                </Button>
              </div>
            </div>

            {/* Send to All Subscribers Section */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-medium mb-4">Send to All Subscribers</h2>
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
                  "Send to All Subscribers"
                )}
              </Button>

              {bulkResult && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <h3 className="font-medium mb-2">Results:</h3>
                  {bulkResult.success ? (
                    <div>
                      <p>Total subscribers: {bulkResult.totalSent}</p>
                      <p>Successfully sent: {bulkResult.successCount}</p>
                      <p>Failed: {bulkResult.failureCount}</p>
                    </div>
                  ) : (
                    <p className="text-red-400">{bulkResult.error}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
