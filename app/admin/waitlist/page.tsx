"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, TrendingUp, Clock } from "lucide-react"
import { getWaitlistSignupsWithTimestamps, getWaitlistStats } from "../../actions/waitlist"

interface WaitlistSignup {
  email: string
  timestamp: number
  signupDate: string
  formattedDate: string
}

interface WaitlistStats {
  totalSignups: number
  last24Hours: number
  last7Days: number
  recentSignups: number
}

export default function WaitlistAdminPage() {
  const [signups, setSignups] = useState<WaitlistSignup[]>([])
  const [stats, setStats] = useState<WaitlistStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [signupsResult, statsResult] = await Promise.all([
        getWaitlistSignupsWithTimestamps(200),
        getWaitlistStats(),
      ])

      if (signupsResult.success) {
        setSignups(signupsResult.signups || [])
      } else {
        setError(signupsResult.error || "Failed to load signups")
      }

      if (statsResult.success) {
        setStats(statsResult.stats || null)
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error("Error loading waitlist data:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading waitlist data...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Waitlist Management</h1>
          <p className="text-gray-600 mt-2">Track and manage waitlist signups with timestamps</p>
        </div>
        <Button onClick={loadData} variant="outline">
          Refresh Data
        </Button>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Signups</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSignups}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last 24 Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.last24Hours}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last 7 Days</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.last7Days}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.last7Days > 0 ? `+${Math.round((stats.last7Days / stats.totalSignups) * 100)}%` : "0%"}
              </div>
              <p className="text-xs text-muted-foreground">vs total signups</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Signups List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Signups</CardTitle>
          <CardDescription>All waitlist signups ordered by most recent first</CardDescription>
        </CardHeader>
        <CardContent>
          {signups.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No signups found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {signups.map((signup, index) => (
                <div key={signup.email} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary">#{signups.length - index}</Badge>
                    </div>
                    <div>
                      <p className="font-medium">{signup.email}</p>
                      <p className="text-sm text-gray-500">{signup.formattedDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {Math.floor((Date.now() - signup.timestamp) / (1000 * 60 * 60 * 24))} days ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
