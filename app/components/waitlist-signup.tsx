"use client"
import Link from "next/link"
import { XIcon } from "./icons/x-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { SocialIcon } from "./social-icon"
import { ToggleText } from "./toggle-text"
import { Rajdhani } from "next/font/google"
import { GraduationCap, Building2, TurtleIcon as Tennis } from "lucide-react"

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

export function WaitlistSignup() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 flex flex-col justify-between min-h-screen">
      {/* Added more padding to the top to move everything down */}
      <div className="pt-44 flex-1 flex flex-col justify-start items-start text-left">
        <div className="space-y-6 w-full">
          <div className="w-full max-w-5xl mx-0 -ml-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-light text-white leading-tight text-left">
              Your Most Reliable <br /> Tennis Training Partner
            </h2>
          </div>

          <div className="w-full space-y-8 pt-6">
            <div className="-ml-2 w-full">
              <ToggleText />
            </div>

            <div className="-ml-2 w-full">
              <br />
            </div>

            {/* Outer glass container - moved down with significantly more margin */}
            <div className="w-full max-w-6xl mx-auto mt-28 relative">
              <div className="rounded-3xl p-8 md:p-10" style={glassContainerStyle}>
                {/* Noise texture overlay */}
                <div style={noiseOverlayStyle}></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-6">
                  {/* Left column - Centered image */}
                  <div className="flex items-center justify-center relative h-[350px] pt-10">
                    {/* Person loading machine image - centered */}
                    <div className="relative w-[45%] md:w-[50%] aspect-[3/4] z-10 mt-6" style={innerContainerStyle}>
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent z-20"></div>

                      {/* Person loading machine image */}
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%208.21.23%E2%80%AFPM-HHmxhjFtggu36xEIJTy5CpbM1nfX9i.png"
                        alt="Person loading a tennis ball machine"
                        className="w-full h-full object-cover object-center"
                      />
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
                      </div>

                      {/* Call to action */}
                      <div>
                        <p className="font-normal">Join me in shaping the future of tennis training!!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Space between content and buttons */}
                <div className="mt-12"></div>

                {/* Buttons below both columns with even more separation */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 relative z-10 justify-center">
                  <Link
                    href="/survey"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl bg-[#042d62] text-white hover:bg-[#031f45] transition-colors w-full sm:w-auto text-center"
                  >
                    Take a Survey and Win $100
                  </Link>
                  <Link
                    href="/waitlist"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl bg-white text-black hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
                  >
                    Follow Our Progress
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Increased padding-top for the footer */}
      <div className="pt-20 flex justify-center space-x-6">
        <SocialIcon
          href="https://x.com/sophie_taco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.gg/ptaTkcbQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://www.facebook.com/groups/963981362613884"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  )
}

