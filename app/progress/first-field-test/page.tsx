import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Navbar } from "../../components/navbar"

export default function FirstFieldTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/updates"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
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
              December 10, 2024
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            First Field Test: Rallie Prototype in Action
          </h1>

          <div className="flex items-center text-gray-600 mb-6">
            <User className="w-4 h-4 mr-2" />
            Rallie Team
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            We took our first working prototype to the court for real-world testing. Here's what we learned and what's
            coming next.
          </p>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p>
              After months of development, we finally had our first working prototype ready for field testing. The
              excitement was palpable as our team gathered at the local tennis court, equipment in hand, ready to see
              our vision come to life.
            </p>

            <h2>The Setup</h2>

            <p>
              Our prototype consists of three main components: a computer vision system with high-speed cameras, an
              AI-powered ball delivery mechanism, and a real-time feedback interface. Setting up the system took about
              30 minutes – longer than we'd like for the final product, but reasonable for a first prototype.
            </p>

            <p>
              The cameras were positioned at strategic points around the court to capture multiple angles of the
              player's movement and ball trajectory. Our machine learning models, trained on thousands of hours of
              tennis footage, were ready to analyze technique in real-time.
            </p>

            <h2>First Impressions</h2>

            <p>
              Sophie, our founder and lead tester, stepped onto the court first. As she began hitting balls delivered by
              our prototype, the system immediately started providing feedback on her form, timing, and shot placement.
            </p>

            <p>
              "It's incredible," she said after the first few minutes. "The feedback is so detailed and immediate. I can
              see exactly what I'm doing wrong with my backhand follow-through."
            </p>

            <p>
              The AI successfully identified several technical issues that even experienced coaches might miss, including
              subtle timing problems and inconsistencies in racket angle at contact.
            </p>

            <h2>What Worked Well</h2>

            <ul>
              <li>
                <strong>Accuracy:</strong> The computer vision system tracked ball and player movement with impressive
                precision, even in varying lighting conditions.
              </li>
              <li>
                <strong>Real-time feedback:</strong> Players received immediate analysis of their shots, allowing for
                quick adjustments and improvement.
              </li>
              <li>
                <strong>Adaptive difficulty:</strong> The system successfully adjusted ball speed and placement based on
                the player's skill level and performance.
              </li>
              <li>
                <strong>User interface:</strong> The feedback display was clear and easy to understand, even during
                intense practice sessions.
              </li>
            </ul>

            <h2>Areas for Improvement</h2>

            <p>
              While the test was largely successful, we identified several areas that need refinement:
            </p>

            <ul>
              <li>
                <strong>Setup time:</strong> 30 minutes is too long for regular use. We're working on a more streamlined
                setup process.
              </li>
              <li>
                <strong>Wind sensitivity:</strong> Outdoor conditions affected ball trajectory calculations. We need
                better environmental compensation.
              </li>
              <li>
                <strong>Battery life:</strong> The current system runs for about 2 hours on battery power. We're
                targeting 4+ hours for the final version.
              </li>
              <li>
                <strong>Portability:</strong> While functional, the prototype is still too bulky for easy transport.
              </li>
            </ul>

            <h2>Player Feedback</h2>

            <p>
              We invited several local tennis players to try the system, ranging from beginners to advanced club
              players. The feedback was overwhelmingly positive:
            </p>

            <blockquote>
              <p>
                "I've been playing for 10 years, and this system showed me things about my serve that I never knew. The
                instant feedback is game-changing." - Mark, Club Player
              </p>
            </blockquote>

            <blockquote>
              <p>
                "As a beginner, I found the patient, consistent coaching incredibly helpful. It never gets frustrated
                with me like human coaches sometimes do!" - Lisa, Beginner
              </p>
            </blockquote>

            <blockquote>
              <p>
                "The variety in shot placement and speed kept me engaged throughout the entire session. It felt like
                playing against a real opponent." - Carlos, Intermediate Player
              </p>
            </blockquote>

            <h2>Technical Insights</h2>

            <p>
              From a technical perspective, the field test validated many of our design decisions while revealing areas
              for optimization:
            </p>

            <p>
              Our machine learning models performed exceptionally well in real-world conditions, with shot analysis
              accuracy exceeding 95%. The computer vision system successfully tracked multiple objects simultaneously,
              even during fast\
