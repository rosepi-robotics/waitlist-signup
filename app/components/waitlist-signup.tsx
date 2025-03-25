"use client"
import Link from "next/link"
import { ToggleText } from "./toggle-text"
import { Rajdhani } from "next/font/google"
import { GraduationCap, Building2, TurtleIcon as Tennis } from "lucide-react"
// Import the trackEvent function at the top of the file
import { trackEvent } from "../utils/analytics"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

// Define the gradient style for the highlighted text
const highlightGradientStyle = {
  background: "linear-gradient(90deg, #4ade80 0%, #0ea5e9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
  fontWeight: "700",
}

// Define the gradient style for the logo
const logoGradientStyle = {
  background: "linear-gradient(to right, #c64f34, #ffd700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
}

// Define the glass-like container style
const glassContainerStyle = {
  background: "linear-gradient(135deg, rgba(4, 45, 98, 0.25) 0%, rgba(74, 222, 128, 0.15) 100%)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  position: "relative" as const,
}

// Define the inner container style
const innerContainerStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
}

// Define the noise texture overlay
const noiseOverlayStyle = {
  content: '""',
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.05,
  backgroundImage:
    "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
  pointerEvents: "none" as const,
}

// Define the polaroid-style frame
const polaroidStyle = {
  background: "rgba(255, 255, 255, 0.9)",
  padding: "10px 10px 30px 10px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
}

export function WaitlistSignup() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 flex flex-col justify-between min-h-screen">
      {/* Reduced padding on mobile to move everything up */}
      <div className="pt-10 sm:pt-20 flex-1 flex flex-col justify-start items-start text-left">
        <div className="space-y-6 w-full">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-0 sm:-ml-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-light text-white leading-tight text-center sm:text-left">
              Your Most Reliable <br /> Tennis Training Partner
            </h2>
          </div>

          <div className="w-full space-y-4 sm:space-y-8 pt-2 sm:pt-6">
            {/* Increased width for toggle text container on mobile */}
            <div className="w-full px-2 sm:px-0 sm:-ml-2">
              <ToggleText />
            </div>

            {/* Outer glass container - reduced margin on mobile */}
            <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-30 relative">
              <div className="rounded-3xl p-6 sm:p-8 md:p-10" style={glassContainerStyle}>
                {/* Noise texture overlay */}
                <div style={noiseOverlayStyle}></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 pt-2 sm:pt-6">
                  {/* Left column - Dynamic collage */}
                  <div className="flex items-center justify-center relative h-[450px] sm:h-[500px] pt-10 sm:pt-16">
                    <div className="relative w-full h-full mt-6 sm:mt-10">
                      {/* Tennis player image - top left, rotated slightly */}
                      <div
                        className="absolute top-0 left-0 w-[55%] h-[45%] z-20 rounded-lg overflow-hidden shadow-xl transform -rotate-3"
                        style={innerContainerStyle}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-22%20at%2011.18.26%E2%80%AFAM-W1PBcxFbtu9EohHMJKOfckSiAxb62X.png"
                          alt="Tennis player practicing"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Blue tennis court - top right, rotated slightly */}
                      <div
                        className="absolute top-[5%] right-0 w-[50%] h-[40%] z-10 rounded-lg overflow-hidden shadow-xl transform rotate-2"
                        style={innerContainerStyle}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10921742666975_.pic.jpg-5UC1WP4jzwKfg270t86VZSZIdrSg8Q.jpeg"
                          alt="Blue tennis court"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Tennis ball machine - bottom left, rotated slightly */}
                      <div
                        className="absolute bottom-[-2%] left-[5%] w-[45%] h-[45%] z-10 rounded-lg overflow-hidden shadow-xl transform rotate-3"
                        style={innerContainerStyle}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10791742095813_.pic.jpg-3sRWyPK0NsTuIbYJGII7VuxX7Y7s2J.jpeg"
                          alt="Tennis ball machine"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Loading equipment - center, larger */}
                      <div
                        className="absolute top-[32%] left-[22%] w-[55%] h-[45%] z-30 rounded-lg overflow-hidden shadow-xl border-2 border-white/30"
                        style={{
                          ...innerContainerStyle,
                          background: "rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10821742146089_.pic.jpg-7GPZ59Mp2C9c76JHePFzeTBe2czn32.jpeg"
                          alt="Loading tennis equipment"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Tennis selfie - bottom right, rotated slightly */}
                      <div
                        className="absolute bottom-[2%] right-[5%] w-[50%] h-[40%] z-20 rounded-lg overflow-hidden shadow-xl transform -rotate-3"
                        style={innerContainerStyle}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10911742666974_.pic.jpg-Zd2wSZBxytdTGEolrQ4x16b4zrw5dU.jpeg"
                          alt="Tennis selfie with equipment"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right column - Reorganized text */}
                  <div className="flex items-center">
                    <div className="text-white text-sm md:text-base leading-relaxed relative z-10 space-y-4">
                      {/* Introduction section */}
                      <div className="mb-2">
                        <h3 className="text-2xl font-medium mb-2">
                          Hi, I'm Sophie Luo, creator of{" "}
                          <span className={`${rajdhani.className} font-bold text-3xl`} style={logoGradientStyle}>
                            rallie
                          </span>
                        </h3>
                        {/* Added more space before "I'm a:" */}
                        <p className="text-white/90 mb-3 mt-8">I'm a:</p>
                        <ul className="pl-5 space-y-3 text-white/90">
                          <li className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-white/80 flex-shrink-0" />
                            <span>UC Berkeley & UPenn-trained engineer and robotist</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-white/80 flex-shrink-0" />
                            <span>Serial entrepreneur based in San Francisco</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Tennis className="h-5 w-5 text-white/80 flex-shrink-0" />
                            <span>Passionate tennis player</span>
                          </li>
                        </ul>
                      </div>

                      <br />

                      {/* Problem statement - increased spacing with mt-12 */}
                      <div className="mt-20 mb-2">
                        <p className="font-normal">
                          I've tried nearly all the tennis ball machines on the market but found none of them
                          satisfactory, so I decided to build my own!{" "}
                          <span className="tracking-wide font-medium">
                            Read more about my story{" "}
                            <Link href="/brand-story" className="underline hover:text-blue-300 transition-colors">
                              here
                            </Link>
                            .
                          </span>
                        </p>
                      </div>

                      {/* Solution highlight */}
                      <div className="mb-2">
                        <p className="font-normal">
                          I aim to build the most <span style={highlightGradientStyle}>COMPACT</span>,{" "}
                          <span style={highlightGradientStyle}>DURABLE</span>, and{" "}
                          <span style={highlightGradientStyle}>INTELLIGENT</span> tennis ball machine ever.
                        </p>
                        <div className="mt-4">
                          <p className="font-medium mb-2">My current design is:</p>
                          <ul className="pl-5 space-y-2 text-white/90">
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">•</span>
                              <span>80 MPH top speed</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">•</span>
                              <span>
                                Topspin, backspin, volley, and even <span style={highlightGradientStyle}>sidespin</span>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">•</span>
                              <span>Internal oscillation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">•</span>
                              <span>30% smaller and 30% lighter than current models</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">•</span>
                              <span>
                                Lots of AI functions to make your training really personalized (and interactive :D)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Call to action */}
                      <div>
                        <p className="font-normal">Join me in shaping the future of tennis training!!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Space between content and buttons */}
                <div className="mt-8 sm:mt-12"></div>

                {/* Buttons below both columns with even more separation */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 relative z-10 justify-center">
                  <Link
                    href="/survey"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl bg-[#042d62] text-white hover:bg-[#031f45] transition-colors w-full sm:w-auto text-center"
                    onClick={() => trackEvent("button_click", "main_cta", "take_survey")}
                  >
                    Take a Survey and Win $100
                  </Link>
                  <Link
                    href="/progress"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl bg-white text-black hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
                    onClick={() => trackEvent("button_click", "main_cta", "follow_progress")}
                  >
                    Follow Our Progress
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

