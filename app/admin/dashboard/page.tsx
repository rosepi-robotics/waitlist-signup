"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/app/components/navbar"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { runDrawing } from "@/app/actions/admin"

interface SurveyStats {
  participantCount: number
  featureCounts: Record<string, number>
  skillLevelCounts: Record<string, number>
  totalSurveys: number
  referralStats?: {
    totalReferrals: number
    averageReferralsPerUser: number
    topReferrers: Array<{ email: string; count: number }>
  }
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<SurveyStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRunningDrawing, setIsRunningDrawing] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/survey/stats")
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        } else {
          toast({
            title: "Error",
            description: "Failed to load survey statistics",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error("Error fetching stats:", error)
        toast({
          title: "Error",
          description: "Failed to load survey statistics",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [toast])

  const handleRunDrawing = async () => {
    if (
      !confirm("Are you sure you want to run the monthly drawing? This will select a winner from all participants.")
    ) {
      return
    }

    setIsRunningDrawing(true)

    try {
      const result = await runDrawing()

      if (result.success) {
        toast({
          title: "Drawing Complete",
          description: `Winner: ${result.winner}. Notification email sent.`,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to run drawing",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error running drawing:", error)
      toast({
        title: "Error",
        description: "Failed to run drawing",
        variant: "destructive",
      })
    } finally {
      setIsRunningDrawing(false)
    }
  }

  // Prepare chart data
  const featureData = stats
    ? Object.entries(stats.featureCounts)
        .map(([name, count]) => ({
          name,
          count,
        }))
        .sort((a, b) => b.count - a.count)
    : []

  const skillLevelData = stats
    ? Object.entries(stats.skillLevelCounts)
        .map(([name, count]) => ({
          name,
          count,
        }))
        .sort((a, b) => b.count - a.count)
    : []

  // Referral data for pie chart
  const referralData = stats?.referralStats
    ? [
        { name: "With Referrals", value: stats.referralStats.totalReferrals },
        { name: "No Referrals", value: stats.participantCount - stats.referralStats.totalReferrals },
      ]
    : []

  const COLORS = ["#4ade80", "#0ea5e9", "#f97316", "#f43f5e"]

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
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Summary stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <h2 className="text-lg font-medium mb-2">Total Participants</h2>
                  <p className="text-4xl font-bold">{stats?.participantCount || 0}</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <h2 className="text-lg font-medium mb-2">Total Surveys</h2>
                  <p className="text-4xl font-bold">{stats?.totalSurveys || 0}</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <h2 className="text-lg font-medium mb-2">Monthly Drawing</h2>
                  <Button
                    onClick={handleRunDrawing}
                    disabled={isRunningDrawing || (stats?.participantCount || 0) === 0}
                    className="bg-white text-black hover:bg-white/90 mt-2"
                  >
                    {isRunningDrawing ? "Running..." : "Run Drawing"}
                  </Button>
                </div>
              </div>

              {/* Referral stats */}
              {stats?.referralStats && (
                <div className="bg-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-medium mb-4">Referral Statistics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-xl p-4">
                          <h3 className="text-sm font-medium mb-1">Total Referrals</h3>
                          <p className="text-2xl font-bold">{stats.referralStats.totalReferrals}</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                          <h3 className="text-sm font-medium mb-1">Average Referrals Per User</h3>
                          <p className="text-2xl font-bold">{stats.referralStats.averageReferralsPerUser.toFixed(2)}</p>
                        </div>
                      </div>

                      {stats.referralStats.topReferrers.length > 0 && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium mb-2">Top Referrers</h3>
                          <div className="bg-white/10 rounded-xl p-4">
                            <ul className="space-y-2">
                              {stats.referralStats.topReferrers.map((referrer, index) => (
                                <li key={index} className="flex justify-between">
                                  <span className="truncate max-w-[200px]">{referrer.email}</span>
                                  <span className="font-bold">{referrer.count} referrals</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={referralData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {referralData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {/* Feature popularity chart */}
              <div className="bg-white/10 rounded-xl p-6">
                <h2 className="text-xl font-medium mb-4">Most Requested Features</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={featureData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fill: "white" }} height={70} />
                      <YAxis tick={{ fill: "white" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                        }}
                      />
                      <Bar dataKey="count" fill="#4ade80" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Skill level chart */}
              <div className="bg-white/10 rounded-xl p-6">
                <h2 className="text-xl font-medium mb-4">Participant Skill Levels</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillLevelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="name" tick={{ fill: "white" }} />
                      <YAxis tick={{ fill: "white" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                        }}
                      />
                      <Bar dataKey="count" fill="#0ea5e9" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
