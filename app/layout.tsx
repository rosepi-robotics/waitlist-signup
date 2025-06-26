import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Rajdhani } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AnalyticsProvider } from "@/app/components/analytics-provider"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Rallie | AI-Powered Tennis Ball Machine for Smarter Training",
  description:
    "Train like a pro with Rallie — the compact, intelligent tennis ball machine that uses AI and computer vision to personalize every shot. Lightweight, powerful, and endlessly customizable.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rajdhani.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
      </body>
    </html>
  )
}
