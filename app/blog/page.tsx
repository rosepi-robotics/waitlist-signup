import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Organic Flowing Shapes with Bright Colors */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[500px] blur-3xl animate-slow-pulse opacity-80 transform rotate-12"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 30% 40%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 45%, 
            rgba(34, 197, 94, 0.8) 100%)`,
          borderRadius: "60% 40% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/3 right-1/6 w-[600px] h-[400px] blur-3xl opacity-85 transform -rotate-45"
        style={{
          background: `radial-gradient(ellipse 70% 90% at 60% 30%, 
            rgba(59, 130, 246, 1.0) 0%, 
            rgba(251, 146, 60, 1.0) 60%, 
            rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "30% 70% 70% 30%",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] blur-3xl animate-slow-pulse opacity-75 transform rotate-45"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 40% 60%, 
            rgba(34, 197, 94, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 50%, 
            rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "40% 60% 60% 40%",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[480px] h-[380px] blur-3xl opacity-80 transform -rotate-30"
        style={{
          background: `radial-gradient(ellipse 75% 85% at 50% 70%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(34, 197, 94, 0.8) 40%, 
            rgba(59, 130, 246, 0.8) 100%)`,
          borderRadius: "70% 30% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/2 left-0 w-[420px] h-[350px] blur-3xl animate-slow-pulse opacity-70 transform rotate-75"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 20% 50%, 
            rgba(168, 85, 247, 1.0) 0%, 
            rgba(251, 146, 60, 1.0) 80%)`,
          borderRadius: "50% 50% 80% 20%",
        }}
      />

      <div
        className="absolute bottom-1/2 right-0 w-[460px] h-[320px] blur-3xl opacity-75 transform -rotate-60"
        style={{
          background: `radial-gradient(ellipse 80% 95% at 70% 30%, 
            rgba(34, 197, 94, 1.0) 0%, 
            rgba(59, 130, 246, 0.8) 70%)`,
          borderRadius: "20% 80% 40% 60%",
        }}
      />

      <div
        className="absolute top-3/4 left-1/2 w-[380px] h-[280px] blur-3xl animate-slow-pulse opacity-70 transform rotate-15"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 60% 40%, 
            rgba(251, 146, 60, 1.0) 0%, 
            rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "80% 20% 60% 40%",
        }}
      />

      <div
        className="absolute top-1/6 right-1/2 w-[340px] h-[260px] blur-3xl opacity-75 transform -rotate-75"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 40% 60%, 
            rgba(59, 130, 246, 0.8) 0%, 
            rgba(34, 197, 94, 1.0) 50%, 
            rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "60% 40% 20% 80%",
        }}
      />

      <Navbar />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extralight text-gray-700 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, updates, and stories from the world of AI-powered tennis training
            </p>
          </div>

          <article className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm text-left">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                What a Real AI Tennis Coach Should Look Like
              </h1>
              <div className="text-gray-500 text-sm">
                Published on{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>Most tennis ball machines today fall into two camps:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Affordable but static machines that just feed balls at set intervals.</li>
                <li>High-end machines that track players, move around, and even collect balls.</li>
              </ul>

              <p>While the newer generation of machines seems more advanced, they're still missing the point.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
                The Real Problem: Machines That Don't Think
              </h2>

              <p>
                Whether it's a basic feeder or a fancy rover that moves and catches balls, most machines still treat
                training as a game of volume and automation, not understanding and adaptation.
              </p>

              <p>Even machines that offer "rally mode" or automated ball collection don't ask:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>How is the player performing?</li>
                <li>What kind of feedback do they need next?</li>
                <li>How should the next ball be adjusted to help them improve — not just stay busy?</li>
              </ul>

              <p>They're optimizing logistics — not coaching.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Think of Your Coach</h2>

              <p>
                Imagine if your coach only focused on running around and feeding balls without watching how you're
                hitting them. That's what most machines today are doing.
              </p>

              <p>
                A real coach pays attention. They analyze your form, footwork, shot quality. They tweak the next feed:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Slower if you're late.</li>
                <li>Wider if your recovery is weak.</li>
                <li>Spinnier if you're starting to find your rhythm.</li>
              </ul>

              <p>That's what an AI tennis coach should do, too.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">What Players Actually Need</h2>

              <p>Players don't want a glorified ball launcher. They want to:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Fix bad habits.</li>
                <li>Reinforce good form.</li>
                <li>Receive actionable feedback.</li>
                <li>See measurable progress.</li>
              </ul>

              <p>They want a system that helps them train smarter, not just sweat harder.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">The Vision: A True AI Coach</h2>

              <p>Imagine this:</p>

              <p>You say into the Rallie app:</p>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 my-4">
                "I want to improve my topspin forehand."
              </blockquote>

              <p>Rallie responds by creating an adaptive training session:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Launches a smart sequence of shots.</li>
                <li>Tracks your position and timing.</li>
                <li>Slows down when you struggle.</li>
                <li>Pushes further when you improve.</li>
                <li>Gives visual feedback and coaching insights after each set.</li>
              </ul>

              <p>Now try:</p>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 my-4">
                "I want to practice running up for a drop shot, then backing up for a lob."
              </blockquote>

              <p>Rallie understands. It doesn't just follow — it coaches.</p>

              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">True AI ≠ Fancy Mechanics</h2>

              <p>The future isn't just about automation. It's about intelligence.</p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
                <p className="font-medium text-orange-900 mb-2">
                  We don't believe adding wheels or a net to catch balls is the solution.
                </p>
                <p className="text-orange-800">
                  We believe the solution is to understand the player and deliver contextual, adaptive feedback that
                  drives real improvement.
                </p>
              </div>

              <p>Rallie is building the first AI-powered tennis coach that actually coaches.</p>

              <p>
                Because you don't just need someone (or something) to feed balls —<br />
                <strong>You need a partner in your progress.</strong>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/survey"
                  className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg text-center"
                >
                  Join Beta Program
                </a>
                <a
                  href="/"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  )
}
