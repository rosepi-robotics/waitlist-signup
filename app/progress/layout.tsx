import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rallie Progress | Tennis Ball Machine Development Updates",
  description:
    "Follow our journey as we build Rallie – the most compact, powerful and intelligent tennis ball machine. Get the latest updates on our development process.",
}

export default function ProgressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
