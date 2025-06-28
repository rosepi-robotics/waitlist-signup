import Link from "next/link"
import { ArrowLeft, Calendar, User, CheckCircle, Award, Users, TrendingUp } from "lucide-react"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"

export default function FirstFieldTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/updates" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Updates
          </Link>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PROGRESS</span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              June 23, 2025
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            First Field Test Success + New Logo Reveal
          </h1>

          <div className="flex items-center text-gray-600 mb-6">
            <User className="w-4 h-4 mr-2" />
            Development Team
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            We did our first field test and the results exceeded expectations! The system is working perfectly, creating
            incredibly fast and strong balls with its compact design. Plus, we're revealing our new logo.
          </p>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            {/* Team Update Section - MOVED TO TOP */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 flex items-center text-gray-900">
                <Users className="mr-2 h-5 w-5 text-blue-500" />
                TEAM UPDATE
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="mb-6 text-gray-700">
                  My team continues is growing! Finally it's not my one man shop anymore! I'm super excited to announce
                  that I'm joined with incredibly talented engineers!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/70 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-semibold text-lg">LW</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Lisa Wang</h4>
                        <p className="text-sm text-gray-600">Co-founder & AI/Computer Vision Lead</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Lisa, a brilliant engineer and former Googler, is leading AI development at Rallie. Stay
                      tuned—exciting AI feature demos are coming soon!
                    </p>
                  </div>

                  <div className="bg-white/70 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-orange-600 font-semibold text-lg">RS</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Ray Shen</h4>
                        <p className="text-sm text-gray-600">Hardware & Embedded Systems Engineering</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      A 15-year veteran in motor control and manufacturing, Ray brings deep expertise to Rallie's
                      hardware development and will lead our path to scalable production.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">Beta Testing Program</h4>
                  <p className="text-blue-800 text-sm">
                    We're looking for 10 tennis facilities to participate in our beta program. Selected partners will
                    receive early access to Rallie units and direct input into the final product design.
                  </p>
                </div>
              </div>
            </div>

            {/* Field Test Success */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 flex items-center text-gray-900">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                FIELD TEST BREAKTHROUGH
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="mb-6 text-gray-700">
                  We did our first field test and the results exceeded expectations! The system is working perfectly,
                  creating incredibly fast and strong balls with its compact design.
                </p>

                <div className="mb-6 flex justify-center">
                  <img
                    src="https://i.imgur.com/UNvBo5i.gif"
                    alt="Rallie field test demonstration showing the tennis ball machine in action"
                    className="max-w-sm mx-auto rounded-lg"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-gray-500">FIRST FIELD TEST - JUNE 2025</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
                  <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                    <div className="text-2xl font-light text-gray-900 mb-2">✅ Topspin</div>
                    <div className="text-sm text-gray-600">Perfect spin generation</div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                    <div className="text-2xl font-light text-gray-900 mb-2">✅ Backspin</div>
                    <div className="text-sm text-gray-600">Precise control achieved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Logo Section */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 flex items-center text-gray-900">
                <Award className="mr-2 h-5 w-5 text-orange-500" />
                NEW LOGO REVEAL
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="mb-6 text-gray-700">
                  Rallie got a fresh new look! Our updated logo reflects our commitment to precision and modern design.
                </p>
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-lg p-8 border border-gray-200">
                    <img src="/images/rallie-logo-black.png" alt="New Rallie Logo" className="h-16 w-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-4 flex items-center text-gray-900">
                <TrendingUp className="mr-2 h-5 w-5 text-orange-500" />
                WHAT'S NEXT
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Pitch & Oscillation Testing</h4>
                      <p className="text-gray-600 text-sm">
                        Next week we'll test the full court coverage system, designed to produce smashes up to 8 meters.
                        Watch our YouTube channel for test videos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Industrial Design Process</h4>
                      <p className="text-gray-600 text-sm">
                        We've started the Industrial Design phase! Currently in ideation stage. Look for our ID
                        preferences survey in early July.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Beta Partner Selection</h4>
                      <p className="text-gray-600 text-sm">
                        Finalizing partnerships with tennis facilities for comprehensive beta testing program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/updates" className="group">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  View All Updates
                </h4>
                <p className="text-gray-600 text-sm">
                  Explore more insights and progress updates from the Rallie team.
                </p>
              </div>
            </Link>
            <Link href="/insights/ai-tennis-coach" className="group">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  Why Tennis Needs AI Coaching
                </h4>
                <p className="text-gray-600 text-sm">Learn about the vision behind AI-powered tennis training.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
