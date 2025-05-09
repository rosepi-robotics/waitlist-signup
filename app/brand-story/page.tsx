"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Rajdhani } from "next/font/google"
import { WaitlistForm } from "../components/waitlist-form"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

// Define the gradient style for the logo
const logoGradientStyle = {
  background: "linear-gradient(to right, #c64f34, #ffd700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
}

export default function BrandStory() {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-52 pb-12 sm:px-6 lg:px-8">
        {/* Combined article container - increased max-width from 3xl to 5xl to match survey page */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          {/* Article header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Rallie Story: A Tennis Ball Machine Built Out of Frustration
          </h1>

          <div className="flex items-center text-white/80 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <time dateTime="2025-03-13">March 13, 2025</time>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>
                Sophie Luo, Creator of{" "}
                <span className={`${rajdhani.className} font-bold text-2xl`} style={logoGradientStyle}>
                  rallie
                </span>
              </span>
            </div>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%208.21.23%E2%80%AFPM-HHmxhjFtggu36xEIJTy5CpbM1nfX9i.png"
              alt="Tennis ball machine in action"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article content - now in the same container */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8">From Factory Floors to Founding Startups</h2>
            <p>
              Hi, I'm Sophie Luo, creator of Rallie. My journey into hardware started early—my dad is a mechanical
              engineer, and I grew up breaking and fixing things in his garage. As a kid, I'd walk factory floors with
              him during his overtime shifts, fascinated by how things were built. I always knew I wanted to create
              something of my own.
            </p>

            <p>
              I went on to study Computer Science at UC Berkeley and the University of Pennsylvania, but my passion for
              building physical products never faded. My first real dive into hardware was at Rokid, a startup where I
              became the first product manager. We developed AR+AI glasses years before Meta's Ray-Ban glasses were even
              a thing, and today, Rokid is a unicorn.
            </p>

            <p>
              Later, I founded RosePi Robotics, where I built AI-powered autonomous robots to improve efficiency in
              utility-scale solar farms. But despite our efforts, the market was tough, and we eventually ran out of
              cash. It was a painful but invaluable learning experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Early prototype"
                className="rounded-xl w-full h-auto"
              />
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Testing phase"
                className="rounded-xl w-full h-auto"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8">From Startup Failure to Tennis Obsession</h2>
            <p>
              After that, I took a break—and finally had time to dive into something I'd always wanted to pursue:
              tennis.
            </p>

            <p>But I quickly ran into three big frustrations:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm mr-2 font-bold">1️⃣</span>
                <span>
                  Coaching was ridiculously expensive—$120+ per hour for private lessons or $50 for group sessions in
                  the Bay Area.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm mr-2 font-bold">2️⃣</span>
                <span>Finding hitting partners was hard—especially ones at my level.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm mr-2 font-bold">3️⃣</span>
                <span>My schedule was too unpredictable—so it was tough to commit to regular practice.</span>
              </li>
            </ul>

            <p>
              Still, I loved the game. That winter, I was on the court every single day, taking lessons and training
              whenever I could. I quickly progressed from a beginner to a 2.5, but then I hit a wall. I didn't want to
              keep spending thousands on lessons, but I knew I needed repetitive practice to refine my strokes. That's
              when I started looking into tennis ball machines.
            </p>

            <h2 className="text-2xl font-bold mt-8">Why Do All Ball Machines… Suck?</h2>
            <p>
              I thought a ball machine would be the perfect solution—after all, even professional players use them for
              training. But when I started testing different models, I was shocked at how bad they were.
            </p>

            <p>I bought one of the most popular brands and immediately ran into problems:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">❌</span>
                <span>It only had one motor, so it could only serve topspin</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">❌</span>
                <span>
                  It was way too heavy and too bulky, loading and unloading into my car and pulling it to the tennis
                  court (1/2 mile walk) was a workout in itself
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">❌</span>
                <span>
                  The shots were inconsistent—balls got stuck, and I never knew what to expect on the other side of the
                  court
                </span>
              </li>
            </ul>

            <p>
              I then rented and borrowed models from Lobster, Spinfire, and even newer brands. They were even heavier,
              bulkier, and cost $1,500+—and still weren't great. I even looked into crowdfunded ball machines, only to
              find that many of them never actually shipped.
            </p>

            <blockquote className="border-l-4 border-white/50 pl-4 italic my-8">
              "That's when I thought: 'Why don't I build my own?'"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8">Bringing Rallie to Life</h2>
            <p>
              With years of experience in hardware, manufacturing, and shipping consumer products, combined with my
              passion for tennis, I knew I was in a unique position to build something better.
            </p>

            <p>
              I started by tearing down my own machine, studying its mechanical structure and electrical controls, and
              reimagining what a ball machine should be.
            </p>

            <h2 className="text-2xl font-bold mt-8">What Makes Rallie Different?</h2>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">✅</span>
                <span>Trio-Motor System – It can launch topspin, backspin, and even sidespin</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">✅</span>
                <span>80 MPH Top Speed – Train like a pro</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">✅</span>
                <span>Internal Oscillation – For unpredictable, realistic ball placement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">✅</span>
                <span>30% Smaller & 30% Lighter – More portable than any mainstream ball machine</span>
              </li>
            </ul>

            <p className="mt-4">I was able to achieve all this with:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>Precision motor control (servo-based for accuracy)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>Higher-quality materials (no cheap parts that break easily)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>A smarter, more efficient design</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">What's Next?</h2>
            <p>
              I'm now waiting for custom parts to arrive so I can begin assembly and testing of the prototype. Over the
              next few months, I'll be:
            </p>

            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>Iterating on the design through multiple rounds of prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>Finalizing the EVT (Engineering Validation Testing) by Summer 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>Moving into DVT (Design Validation Testing) – optimizing for mass production</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">🔹</span>
                <span>Hosting live test events in SF & LA for real users to try the machine</span>
              </li>
            </ul>

            <p className="mt-4">
              If everything goes according to plan, we'll begin production in early 2026 and start shipping by March
              2026. Having worked with top-tier OEMs like Foxconn, Flextronics, and Goertek, I know how to navigate mass
              production, and I'm confident in delivering Rallie on time.
            </p>

            <h2 className="text-2xl font-bold mt-8">Future Product Plans</h2>
            <p>
              While our initial focus is on creating the perfect tennis ball machine, we have ambitious plans to make it
              a real smart robot in the future:
            </p>

            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">🎯</span>
                <span>Knows where the player is on the court, and serves the ball accordingly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">🎯</span>
                <span>Adapts difficulty level of drills automatically according to how you play</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">🎯</span>
                <span>Cloud-based drill sharing platform for coaches and players</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 font-bold">🎯</span>
                <span>Real-time analytics and coaching (yes, the real AI coach)</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">How You Can Help & Get Involved</h2>

            <p className="mt-4 mb-6">
              Thanks for making it this far! And thanks for your interest in my story and in rallie! I really hope to
              involve people who really love tennis and really care about the future of tennis training in my process of
              building my machine. I need your help with:
            </p>

            <div className="space-y-6">
              {/* First glass bubble - Join the Community */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Join the Community and Get Involved in the Conversation</h3>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-2 font-bold">📢</span>
                    <span>
                      Join the conversation on
                      <a
                        href="https://discord.gg/ptaTkcbQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline mx-1"
                      >
                        Discord
                      </a>
                      /
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline mx-1"
                      >
                        Instagram
                      </a>
                      /
                      <a
                        href="https://www.facebook.com/groups/963981362613884"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline mx-1"
                      >
                        Facebook
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2 font-bold">📩</span>
                    <span>
                      Email me at{" "}
                      <a href="mailto:hello@rallie.tennis" className="text-blue-300 hover:underline">
                        hello@rallie.tennis
                      </a>{" "}
                      – I'll personally respond to every email!
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2 font-bold">📝</span>
                    <span>
                      Join our waitlist to get updates on our progress:
                      <div className="mt-3">
                        <WaitlistForm onSuccess={() => {}} />
                      </div>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Second glass bubble - Help understand painpoints */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Help me understand painpoints and build better products</h3>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-2 font-bold">📋</span>
                    <span>
                      <Link href="/survey" className="text-blue-300 hover:underline">
                        Let me know about your experience with ball machines
                      </Link>{" "}
                      - this will help me design a better product that addresses real tennis players' needs.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Third glass bubble - Connect with VCs */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Connect me with VCs or partners</h3>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-2 font-bold">🤝</span>
                    <span>
                      I've set aside some budget and raised a small amount from a Silicon Valley-based VC to bring
                      Rallie to life. But to perfect the product and stick to our timeline, I'll need more funding. If
                      you can introduce me to VCs or strategic partners, please reach out at{" "}
                      <a href="mailto:hello@rallie.tennis" className="text-blue-300 hover:underline">
                        hello@rallie.tennis
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/survey"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-white/90 transition-colors"
              >
                Take Survey and Win $100 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <p className="text-center text-xl font-bold mt-12">
              🚀 Let's build the future of tennis training together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
