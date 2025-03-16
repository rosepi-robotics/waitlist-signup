"use client"
import Link from "next/link"
import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { SocialIcon } from "./social-icon"
import { ToggleText } from "./toggle-text"
import { Rajdhani } from "next/font/google"

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

// Define the back container style (for stacked effect) - removed blur effects
const backContainerStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
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

// Mosaic effect for the logo
const mosaicOverlayStyle = {
  position: "absolute" as const,
  bottom: "40%",
  left: "30%",
  width: "80px",
  height: "30px",
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "4px",
  zIndex: 2,
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
            <div className="w-full max-w-6xl mx-auto mt-40 relative">
              <div className="rounded-3xl p-8 md:p-10" style={glassContainerStyle}>
                {/* Noise texture overlay */}
                <div style={noiseOverlayStyle}></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-6">
                  {/* Left column - Stacked images - moved further left with pl-0 and pr-8 */}
                  <div className="flex items-center justify-start pl-0 pr-8 relative">
                    {/* Back image - Tennis ball machine - smaller size */}
                    <div
                      className="absolute w-[60%] md:w-[55%] aspect-square -right-3 -top-3 z-0"
                      style={backContainerStyle}
                    >
                      {/* Tennis ball machine image */}
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10791742095813_.pic.jpg-KV9f69OinQZ4fHvdkbZBe2jSLQLyoE.jpeg"
                        alt="Tennis ball machine"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Front image - Person loading machine - smaller size */}
                    <div className="relative w-[60%] md:w-[55%] aspect-[3/4] z-10" style={innerContainerStyle}>
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent z-10"></div>

                      {/* Person loading machine image */}
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%208.21.23%E2%80%AFPM-HHmxhjFtggu36xEIJTy5CpbM1nfX9i.png"
                        alt="Person loading a tennis ball machine"
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Mosaic effect over the logo */}
                      <div style={mosaicOverlayStyle}></div>
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
                        <p className="text-white/90 mb-3 mt-4">I'm a:</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/90">
                          <li>UC Berkeley & UPenn-trained engineer and robotist</li>
                          <li>Serial entrepreneur based in SF</li>
                          <li>Tennis enthusiast</li>
                        </ul>
                      </div>

                      {/* Problem statement */}
                      <div className="mb-2">
                        <p className="font-medium">
                          I've owned most ball machines on the market but found none of them satisfactory, so I decided
                          to build my own.
                        </p>
                      </div>

                      {/* Solution highlight */}
                      <div className="mb-2">
                        <p className="font-medium">
                          I'm building the most <span style={highlightGradientStyle}>COMPACT</span>,{" "}
                          <span style={highlightGradientStyle}>DURABLE</span>, and{" "}
                          <span style={highlightGradientStyle}>INTELLIGENT</span> tennis ball machine ever.
                        </p>
                      </div>

                      {/* Call to action */}
                      <div>
                        <p className="font-medium">Join my journey shaping the future of tennis training.</p>
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
                    Take a Survey
                  </Link>
                  <Link
                    href="/waitlist"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl bg-white text-black hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
                  >
                    Sign up to follow progress
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center space-x-6">
        <SocialIcon
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  )
}

