"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function GCLIDPreserver() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get all URL parameters from both window.location and useSearchParams for reliability
    const urlParams = new URLSearchParams(window.location.search)

    // Track GCLID (Google Click ID) - check both sources
    const gclid = urlParams.get("gclid") || searchParams.get("gclid")
    if (gclid) {
      console.log("GCLID preserved:", gclid)
      localStorage.setItem("gclid", gclid)
      sessionStorage.setItem("gclid", gclid)
    }

    // Track Facebook Click ID
    const fbclid = urlParams.get("fbclid") || searchParams.get("fbclid")
    if (fbclid) {
      console.log("FBCLID preserved:", fbclid)
      localStorage.setItem("fbclid", fbclid)
      sessionStorage.setItem("fbclid", fbclid)
    }

    // Track Microsoft Click ID
    const msclkid = urlParams.get("msclkid") || searchParams.get("msclkid")
    if (msclkid) {
      console.log("MSCLKID preserved:", msclkid)
      localStorage.setItem("msclkid", msclkid)
      sessionStorage.setItem("msclkid", msclkid)
    }

    // Also preserve UTM parameters for comprehensive tracking
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
    utmParams.forEach((param) => {
      const value = urlParams.get(param) || searchParams.get(param)
      if (value) {
        console.log(`${param} preserved:`, value)
        localStorage.setItem(param, value)
        sessionStorage.setItem(param, value)
      }
    })

    // Debug: Log all detected parameters
    const allParams = Object.fromEntries(urlParams.entries())
    if (Object.keys(allParams).length > 0) {
      console.log("All URL Parameters detected:", allParams)
    }
  }, [searchParams])

  return null // This component doesn't render anything
}
