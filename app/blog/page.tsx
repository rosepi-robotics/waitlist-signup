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

      <Navbar />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <article className="prose lg:prose-xl max-w-none text-gray-800">
              <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  What a Real AI Tennis Coach Should Look Like
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Beyond just launching balls: The case for a machine that actually thinks.
                </p>
              </header>

              <p className="lead">
                Most tennis ball machines today fall into two camps: affordable but static machines that just feed balls
                at set intervals, or high-end machines that track players, move around, and even collect balls. While
                the newer generation of machines seems more advanced, they’re still missing the point.
              </p>

              <h2>The Real Problem: Machines That Don’t Think</h2>
              <p>
                Whether it’s a basic feeder or a fancy rover that moves and catches balls, most machines still treat
                training as a game of volume and automation, not understanding and adaptation.
              </p>
              <p>Even machines that offer “rally mode” or automated ball collection don’t ask:</p>
              <ul>
                <li>How is the player performing?</li>
                <li>What kind of feedback do they need next?</li>
                <li>How should the next ball be adjusted to help them improve — not just stay busy?</li>
              </ul>
              <p>They’re optimizing logistics — not coaching.</p>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 my-6">
                Imagine if your coach only focused on running around and feeding balls without watching how you’re
                hitting them. That’s what most machines today are doing.
              </blockquote>

              <h2>Think of Your Coach</h2>
              <p>
                A real coach pays attention. They analyze your form, footwork, and shot quality. They tweak the next
                feed:
              </p>
              <ul>
                <li>Slower if you’re late.</li>
                <li>Wider if your recovery is weak.</li>
                <li>Spinnier if you’re starting to find your rhythm.</li>
              </ul>
              <p>That’s what an AI tennis coach should do, too.</p>

              <h2>What Players Actually Need</h2>
              <p>Players don’t want a glorified ball launcher. They want to:</p>
              <ul>
                <li>Fix bad habits.</li>
                <li>Reinforce good form.</li>
                <li>Receive actionable feedback.</li>
                <li>See measurable progress.</li>
              </ul>
              <p>They want a system that helps them train smarter, not just sweat harder.</p>

              <h2>The Vision: A True AI Coach</h2>
              <p>Imagine this: You say into the Rallie app:</p>
              <div className="bg-gray-900 text-white p-4 rounded-lg my-6 font-mono">
                <p>“I want to improve my topspin forehand.”</p>
              </div>
              <p>Rallie responds by creating an adaptive training session:</p>
              <ul>
                <li>Launches a smart sequence of shots.</li>
                <li>Tracks your position and timing.</li>
                <li>Slows down when you struggle.</li>
                <li>Pushes further when you improve.</li>
                <li>Gives visual feedback and coaching insights after each set.</li>
              </ul>
              <p>Now try:</p>
              <div className="bg-gray-900 text-white p-4 rounded-lg my-6 font-mono">
                <p>“I want to practice running up for a drop shot, then backing up for a lob.”</p>
              </div>
              <p>Rallie understands. It doesn’t just follow — it coaches.</p>

              <h2>True AI ≠ Fancy Mechanics</h2>
              <p>
                The future isn’t just about automation. It’s about intelligence. We don’t believe adding wheels or a net
                to catch balls is the solution. We believe the solution is to understand the player and deliver
                contextual, adaptive feedback that drives real improvement.
              </p>

              <hr className="my-8" />

              <p className="font-semibold text-center text-xl">
                Rallie is building the first AI-powered tennis coach that actually coaches.
              </p>
              <p className="text-center text-lg text-gray-600">
                Because you don’t just need someone (or something) to feed balls — you need a partner in your progress.
              </p>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
