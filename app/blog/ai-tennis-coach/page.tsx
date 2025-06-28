import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"

export default function AITennisCoachPost() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg bg-transparent"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm mb-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center text-gray-500 mb-4 space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                  <time dateTime="2025-06-15">June 15, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-blue-500" />
                  <span>6 min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
                What a Real AI Tennis Coach Should Look Like
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Beyond just launching balls: The case for a machine that actually thinks.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Sophie Chen</p>
                  <p className="text-sm text-gray-500">Founder & CEO at Rallie</p>
                </div>
              </div>

              {/* Featured Image */}
              <img
                src="/placeholder.svg?height=300&width=600&text=AI+Tennis+Coach"
                alt="AI Tennis Coach Concept"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm">
            <article className="prose lg:prose-xl max-w-none text-gray-800">
              <p className="text-lg leading-relaxed mb-6">
                Most tennis ball machines today fall into two camps: affordable but static machines that just feed balls
                at set intervals, or high-end machines that track players, move around, and even collect balls. While
                the newer generation of machines seems more advanced, they're still missing the point.
              </p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
                The Real Problem: Machines That Don't Think
              </h2>
              <p className="mb-6">
                Whether it's a basic feeder or a fancy rover that moves and catches balls, most machines still treat
                training as a game of volume and automation, not understanding and adaptation.
              </p>
              <p className="mb-4">Even machines that offer "rally mode" or automated ball collection don't ask:</p>
              <ul className="mb-6 space-y-2">
                <li>How is the player performing?</li>
                <li>What kind of feedback do they need next?</li>
                <li>How should the next ball be adjusted to help them improve — not just stay busy?</li>
              </ul>
              <p className="mb-6">They're optimizing logistics — not coaching.</p>

              <div className="bg-gray-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
                <p className="italic text-gray-700 text-lg">
                  {
                    "Imagine if your coach only focused on running around and feeding balls without watching how you're hitting them. That's what most machines today are doing."
                  }
                </p>
              </div>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Think of Your Coach</h2>
              <p className="mb-4">
                A real coach pays attention. They analyze your form, footwork, and shot quality. They tweak the next
                feed:
              </p>
              <ul className="mb-6 space-y-2">
                <li>Slower if you're late.</li>
                <li>Wider if your recovery is weak.</li>
                <li>Spinnier if you're starting to find your rhythm.</li>
              </ul>
              <p className="mb-6">That's what an AI tennis coach should do, too.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">What Players Actually Need</h2>
              <p className="mb-4">Players don't want a glorified ball launcher. They want to:</p>
              <ul className="mb-6 space-y-2">
                <li>Fix bad habits.</li>
                <li>Reinforce good form.</li>
                <li>Receive actionable feedback.</li>
                <li>See measurable progress.</li>
              </ul>
              <p className="mb-6">They want a system that helps them train smarter, not just sweat harder.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">The Vision: A True AI Coach</h2>
              <p className="mb-4">Imagine this: You say into the Rallie app:</p>
              <div className="bg-gray-900 text-white p-4 rounded-lg my-6 font-mono text-sm">
                <p>{'"I want to improve my topspin forehand."'}</p>
              </div>
              <p className="mb-4">Rallie responds by creating an adaptive training session:</p>
              <ul className="mb-6 space-y-2">
                <li>Launches a smart sequence of shots.</li>
                <li>Tracks your position and timing.</li>
                <li>Slows down when you struggle.</li>
                <li>Pushes further when you improve.</li>
                <li>Gives visual feedback and coaching insights after each set.</li>
              </ul>
              <p className="mb-4">Now try:</p>
              <div className="bg-gray-900 text-white p-4 rounded-lg my-6 font-mono text-sm">
                <p>{'"I want to practice running up for a drop shot, then backing up for a lob."'}</p>
              </div>
              <p className="mb-6">Rallie understands. It doesn't just follow — it coaches.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">True AI ≠ Fancy Mechanics</h2>
              <p className="mb-6">
                The future isn't just about automation. It's about intelligence. We don't believe adding wheels or a net
                to catch balls is the solution. We believe the solution is to understand the player and deliver
                contextual, adaptive feedback that drives real improvement.
              </p>

              <hr className="my-8 border-gray-300" />

              <div className="text-center bg-blue-50 p-8 rounded-lg">
                <p className="font-medium text-xl text-gray-900 mb-4">
                  Rallie is building the first AI-powered tennis coach that actually coaches.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Because you don't just need someone (or something) to feed balls — you need a partner in your
                  progress.
                </p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3">
                    Join the Waitlist
                  </Button>
                </Link>
              </div>
            </article>
          </div>

          {/* Share Section */}
          <div className="mt-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Share this article</h3>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
