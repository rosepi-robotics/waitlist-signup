"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/app/components/navbar"
import { Button } from "@/components/ui/button"
import {
  getSentEmails,
  getSubscribers,
  retryFailedEmails,
  getCampaignStats,
  retryJuneUpdateEmails,
} from "@/app/actions/email"
import { Loader2, RefreshCw, CheckCircle, XCircle, Mail, AlertCircle } from "lucide-react"
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

interface CampaignStats {
  sent: number
  successful: number
  failed: number
  notSent: number
  notSentEmails: string[]
  totalSubscribers: number
}

export default function SentEmailsPage() {
  const [emails, setEmails] = useState<EmailRecord[]>([])
  const [subscribers, setSubscribers] = useState<string[]>([])
  const [campaignStats, setCampaignStats] = useState<Record<string, CampaignStats>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingSubscribers, setIsLoadingSubscribers] = useState(true)
  const [isLoadingStats, setIsLoadingStats] = useState(true)
  const [isRetrying, setIsRetrying] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState<string>("all")
  const { toast } = useToast()
  const router = useRouter()

  const fetchEmails = async () => {
    setIsLoading(true)
    try {
      const result = await getSentEmails(500)
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

  const fetchSubscribers = async () => {
    setIsLoadingSubscribers(true)
    try {
      const result = await getSubscribers()
      if (result.success) {
        setSubscribers(result.subscribers)
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to load subscribers",
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
      setIsLoadingSubscribers(false)
    }
  }

  const fetchCampaignStats = async () => {
    setIsLoadingStats(true)
    try {
      const result = await getCampaignStats()
      if (result.success) {
        setCampaignStats(result.campaigns)
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to load campaign stats",
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
      setIsLoadingStats(false)
    }
  }

  useEffect(() => {
    fetchEmails()
    fetchSubscribers()
    fetchCampaignStats()
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push("/admin/login")
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }

  // Filter emails by selected campaign
  const filteredEmails =
    selectedCampaign === "all" ? emails : emails.filter((email) => email.campaign === selectedCampaign)

  // Calculate statistics for filtered emails
  const totalEmails = filteredEmails.length
  const successfulEmails = filteredEmails.filter((email) => email.success).length
  const failedEmails = totalEmails - successfulEmails

  // Group errors by type for filtered emails
  const errorTypes: Record<string, number> = {}
  filteredEmails.forEach((email) => {
    if (!email.success && email.error) {
      errorTypes[email.error] = (errorTypes[email.error] || 0) + 1
    }
  })

  // Find emails that were not sent for June campaign
  const juneStats = campaignStats["june-update"]
  const juneNotSentEmails = juneStats?.notSentEmails || []

  // Find failed emails for current selection
  const failedEmailAddresses = filteredEmails.filter((email) => !email.success).map((email) => email.email)

  const handleRetryJuneUpdate = async () => {
    if (juneNotSentEmails.length === 0) {
      toast({
        title: "No emails to retry",
        description: "All subscribers have received the June update",
      })
      return
    }

    if (
      !confirm(
        `Are you sure you want to send the June update to ${juneNotSentEmails.length} subscribers who haven't received it yet?`,
      )
    ) {
      return
    }

    setIsRetrying(true)
    try {
      const result = await retryJuneUpdateEmails(juneNotSentEmails)

      if (result.success) {
        toast({
          title: "Success",
          description: `Successfully sent June update to ${result.successCount} of ${result.totalSent} subscribers`,
        })
        // Refresh the data
        fetchEmails()
        fetchCampaignStats()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send June updates",
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
      setIsRetrying(false)
    }
  }

  const handleRetryFailed = async () => {
    if (failedEmailAddresses.length === 0) {
      toast({
        title: "No emails to retry",
        description: "There are no failed emails to retry",
      })
      return
    }

    if (!confirm(`Are you sure you want to retry sending to ${failedEmailAddresses.length} failed emails?`)) {
      return
    }

    setIsRetrying(true)
    try {
      const result = await retryFailedEmails(failedEmailAddresses)

      if (result.success) {
        toast({
          title: "Success",
          description: `Retried sending to ${result.successCount} of ${result.totalSent} emails`,
        })
        // Refresh the data
        fetchEmails()
        fetchCampaignStats()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to retry emails",
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
      setIsRetrying(false)
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
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Email Campaign Dashboard</h1>
            <div className="flex space-x-4">
              <Button
                onClick={() => {
                  fetchEmails()
                  fetchCampaignStats()
                }}
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
                Refresh
              </Button>
              <Link href="/admin/email">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Back to Email Management
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

          {/* Campaign Statistics */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Campaign Overview</h2>
            {isLoadingStats ? (
              <div className="flex justify-center items-center h-32">
                <Loader2 className="h-8 w-8 animate-spin text-white/70" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(campaignStats).map(([campaign, stats]) => (
                  <div key={campaign} className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 capitalize">{campaign.replace("-", " ")}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Subscribers:</span>
                        <span className="font-medium">{stats.totalSubscribers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sent:</span>
                        <span className="font-medium">{stats.sent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-300">Successful:</span>
                        <span className="font-medium text-green-300">{stats.successful}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-300">Failed:</span>
                        <span className="font-medium text-red-300">{stats.failed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-300">Not Sent:</span>
                        <span className="font-medium text-yellow-300">{stats.notSent}</span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/20">
                        <div className="text-xs text-white/70">
                          Coverage: {((stats.sent / stats.totalSubscribers) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* June Update Issue Alert */}
          {juneStats && juneStats.notSent > 0 && (
            <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-400 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-yellow-300 mb-2">June Update Issue Detected</h3>
                  <p className="text-yellow-100 mb-4">
                    The June update was only sent to {juneStats.sent} out of {juneStats.totalSubscribers} subscribers.
                    {juneStats.notSent} subscribers haven't received the June update yet.
                  </p>
                  <Button
                    onClick={handleRetryJuneUpdate}
                    disabled={isRetrying}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white"
                  >
                    {isRetrying ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending June Updates...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" /> Send June Update to Remaining {juneStats.notSent} Subscribers
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Campaign Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Filter by Campaign:</label>
            <select
              value={selectedCampaign}
              onChange={(e) => setSelectedCampaign(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
            >
              <option value="all">All Campaigns</option>
              {Object.keys(campaignStats).map((campaign) => (
                <option key={campaign} value={campaign}>
                  {campaign.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          {/* Statistics for Selected Campaign */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h2 className="text-lg font-medium mb-2">Total Subscribers</h2>
              <p className="text-4xl font-bold">{subscribers.length}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h2 className="text-lg font-medium mb-2">Emails Sent</h2>
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

          {/* Retry Failed Emails */}
          {failedEmailAddresses.length > 0 && (
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Retry Failed Emails</h2>
                <Button
                  onClick={handleRetryFailed}
                  disabled={isRetrying}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isRetrying ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Retrying...
                    </>
                  ) : (
                    `Retry ${failedEmailAddresses.length} Failed Emails`
                  )}
                </Button>
              </div>
              <p className="mt-2 text-white/70">
                {failedEmailAddresses.length} failed emails can be retried for the selected campaign.
              </p>
            </div>
          )}

          {/* Error Analysis */}
          {Object.keys(errorTypes).length > 0 && (
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-medium mb-4">
                Error Analysis ({selectedCampaign === "all" ? "All Campaigns" : selectedCampaign})
              </h2>
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
            <h2 className="text-xl font-medium mb-4">
              Email Records ({selectedCampaign === "all" ? "All Campaigns" : selectedCampaign.replace("-", " ")})
            </h2>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-white/70" />
              </div>
            ) : filteredEmails.length === 0 ? (
              <p className="text-center py-12 text-white/70">No email records found for the selected campaign</p>
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
                    {filteredEmails.map((email, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                        <td className="px-4 py-3">{email.email}</td>
                        <td className="px-4 py-3">{email.campaign}</td>
                        <td className="px-4 py-3">{formatDate(email.timestamp)}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${
                              email.success ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"
                            }`}
                          >
                            {email.success ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" /> Success
                              </>
                            ) : (
                              <>
                                <XCircle className="h-3 w-3 mr-1" /> Failed
                              </>
                            )}
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
