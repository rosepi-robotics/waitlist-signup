import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Rajdhani } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "rallie - Most Reliable Tennis Hitting Partner",
  description: "Join the waitlist for the most compact, durable, and powerful intelligent tennis ball machine ever.",
  keywords: "tennis, ball machine, training, sports equipment, tennis practice",
  openGraph: {
    title: "Rallie Tennis Ball Machine",
    description: "The most compact, durable, and intelligent tennis ball machine ever.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rallie Tennis Ball Machine",
    description: "The most compact, durable, and intelligent tennis ball machine ever.",
    images: ["/twitter-image.jpg"],
  },
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
      </body>
    </html>
  )
}

