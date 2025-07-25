import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Updates | Mavio Tennis",
  description:
    "Latest insights, progress updates, and behind-the-scenes content from the Mavio team. Stay updated on our AI-powered tennis training system development.",
  keywords: ["tennis training", "AI coaching", "product updates", "tennis technology", "machine learning"],
  openGraph: {
    title: "Updates | Mavio Tennis",
    description: "Latest insights and progress updates from Mavio Tennis",
    type: "website",
  },
}

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
