"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import Google Analytics with no SSR
const GoogleAnalytics = dynamic(() => import("./google-analytics"), { ssr: false })

export function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalytics 
        GA_MEASUREMENT_ID="G-VEYXZ8D6KJ" 
        AW_CONVERSION_ID="AW-265976098" 
      />
    </Suspense>
  )
}
