import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mavio Survey | Smart Tennis Ball Machine Feedback",
  description:
    "Help us improve Mavio – the most compact, powerful and intelligent tennis ball machine built for players of all levels.",
}

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
