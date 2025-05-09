"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/app/components/navbar"
import { Button } from "@/components/ui/button"
import { getSentEmails } from "@/app/actions/email"
import { Loader2, RefreshCw } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { logout } from "@/app/actions/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface EmailRecord {
  email: string
  timestamp: number
  success: boolean
  messageId: string | null
  error: string | null
  campaign: string
}

export default function SentEmailsPage() {
  const [emails, setEmails] = useState<EmailRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const router = useRouter()

  const fetchEmails = async () => {
    setIsLoading(true)
    try {
      const result = await getSentEmails(100)
      if (result.success) {
        setEmails(result.emails)
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to load sent emails",
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
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEmails()
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push("/admin/login")
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }

  // Calculate statistics
  const totalEmails = emails.length
  const successfulEmails = emails.filter((email) => email.success).length
  const failedEmails = totalEmails - successfulEmails

  // Group errors by type
  const errorTypes: Record<string, number> = {}
  emails.forEach((email) => {
    if (!email.success && email.error) {
      errorTypes[email.error] = (errorTypes[email.error] || 0) + 1
    }
  })

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Sent Emails</h1>
            <div className="flex space-x-4">
              <Button
                onClick={fetchEmails}
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
                Refresh
              </Button>
              <Link href="/admin/email">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Back to Email Management
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" className="border-white text-white hover:bg-white/10">
                Logout
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h2 className="text-lg font-medium mb-2">Total Emails</h2>
              <p className="text-4xl font-bold">{totalEmails}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h2 className="text-lg font-medium mb-2">Successful</h2>
              <p className="text-4xl font-bold text-green-400">{successfulEmails}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h2 className="text-lg font-medium mb-2">Failed</h2>
              <p className="text-4xl font-bold text-red-400">{failedEmails}</p>
            </div>
          </div>

          {/* Error Analysis */}
          {Object.keys(errorTypes).length > 0 && (
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-medium mb-4">Error Analysis</h2>
              <div className="space-y-4">
                {Object.entries(errorTypes).map(([error, count]) => (
                  <div key={error} className="flex justify-between items-center">
                    <div className="text-red-300">{error}</div>
                    <div className="bg-red-900/30 px-3 py-1 rounded-full text-sm">{count}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Email List */}
          <div className="bg-white/10 rounded-xl p-6">
            <h2 className="text-xl font-medium mb-4">Email Records</h2>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-white/70" />
              </div>
            ) : emails.length === 0 ? (
              <p className="text-center py-12 text-white/70">No email records found</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Campaign</th>
                      <th className="px-4 py-3 text-left">Timestamp</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Error</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emails.map((email, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                        <td className="px-4 py-3">{email.email}</td>
                        <td className="px-4 py-3">{email.campaign}</td>
                        <td className="px-4 py-3">{formatDate(email.timestamp)}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${email.success ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"}`}
                          >
                            {email.success ? "Success" : "Failed"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-red-300">{email.error || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
