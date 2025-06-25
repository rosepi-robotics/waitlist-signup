"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { getReferralStats } from "@/app/actions/survey"
import { Share2, Award, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ReferralPage({ params }: { params: { code: string } }) {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const [copyButtonText, setCopyButtonText] = useState("Copy")

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true)
        const result = await getReferralStats(params.code)

        if (result.success) {
          setStats(result)
          setError(null)
        } else {
          setError(result.message || "Failed to load referral stats")
        }
      } catch (err) {
        setError("An unexpected error occurred")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [params.code])

  const handleCopyLink = () => {
    const referralUrl = `https://rallie.tennis/survey?ref=${params.code}`
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

  const handleShare = async () => {
    const referralUrl = `https://rallie.tennis/survey?ref=${params.code}`
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
      handleCopyLink()
    }
  }

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      {/* Flowing orb background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
          backgroundSize: "50px 50px",
        }}
      ></div>
      <Navbar />
      <div className="relative max-w-4xl mx-auto px-4 pt-52 pb-12 sm:px-6 lg:px-8 z-10">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Your Referral Dashboard</h1>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="bg-red-500/20 rounded-xl p-6 mb-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-2">Error</h2>
                <p>{error}</p>
              </div>
              <p>
                If you believe this is a mistake, please try again or contact us at{" "}
                <a href="mailto:hello@rallie.tennis" className="text-blue-300 underline">
                  hello@rallie.tennis
                </a>
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg mb-2">Your unique referral link:</p>
                <div className="bg-white/10 rounded-xl p-4 mb-4 flex items-center justify-between">
                  <code className="text-sm sm:text-base overflow-x-auto whitespace-nowrap max-w-[calc(100%-80px)]">
                    https://rallie.tennis/survey?ref={params.code}
                  </code>
                  <Button onClick={handleCopyLink} className="ml-2 bg-white/20 hover:bg-white/30 text-white" size="sm">
                    {copyButtonText}
                  </Button>
                </div>
                <Button onClick={handleShare} className="bg-blue-600 hover:bg-blue-700">
                  <Share2 className="mr-2 h-4 w-4" /> Share with Friends
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <h2 className="text-lg font-medium mb-1">Successful Referrals</h2>
                  <p className="text-4xl font-bold">{stats?.referralCount || 0}</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h2 className="text-lg font-medium mb-1">Drawing Entries</h2>
                  <p className="text-4xl font-bold">{(stats?.referralCount || 0) + 1}</p>
                  <p className="text-sm text-white/70 mt-1">1 base + {stats?.referralCount || 0} from referrals</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Calendar className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="text-lg font-medium mb-1">Next Drawing</h2>
                  <p className="text-lg font-medium">
                    {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h2 className="text-xl font-medium mb-4">How It Works</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm mr-2 font-bold">1️⃣</span>
                    <span>Share your unique referral link with friends, family, and fellow tennis players</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm mr-2 font-bold">2️⃣</span>
                    <span>
                      When they complete the survey using your link, you get an additional entry in our monthly drawing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm mr-2 font-bold">3️⃣</span>
                    <span>
                      The more friends who complete the survey, the higher your chances of winning the $100 Tennis
                      Warehouse gift card!
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-medium mb-2">Increase Your Chances!</h2>
                <p className="mb-4">
                  Share your link on social media, in tennis groups, or with your tennis partners to maximize your
                  chances of winning.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                      "Help shape the future of tennis training and get a chance to win a $100 Tennis Warehouse gift card! Take this quick survey:",
                    )}&url=${encodeURIComponent(`https://rallie.tennis/survey?ref=${params.code}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    Share on X
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://rallie.tennis/survey?ref=${params.code}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    Share on Facebook
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent("Help shape the future of tennis training")}&body=${encodeURIComponent(
                      "Hi there,\n\nI thought you might be interested in this survey about tennis ball machines. It only takes 2-3 minutes to complete, and you could win a $100 Tennis Warehouse gift card!\n\n",
                    )}${encodeURIComponent(`https://rallie.tennis/survey?ref=${params.code}`)}`}
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    Share via Email
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
