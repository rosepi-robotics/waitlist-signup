import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rallie | AI-Powered Tennis Ball Machine for Smarter Training",
  description:
    "Train like a pro with Rallie — the compact, intelligent tennis ball machine that uses AI and computer vision to personalize every shot. Lightweight, powerful, and endlessly customizable.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
