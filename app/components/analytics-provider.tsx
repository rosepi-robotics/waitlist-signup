"use client"

import dynamic from "next/dynamic"

// Dynamically import Google Analytics with no SSR
const GoogleAnalytics = dynamic(() => import("./google-analytics"), { ssr: false })

export function AnalyticsProvider() {
  return <GoogleAnalytics GA_MEASUREMENT_ID="G-VEYXZ8D6KJ" />
}

