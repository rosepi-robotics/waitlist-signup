"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function GCLIDPreserver() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Preserve GCLID (Google Click ID) for conversion tracking
    const gclid = searchParams.get("gclid")
    const fbclid = searchParams.get("fbclid") // Facebook Click ID
    const msclkid = searchParams.get("msclkid") // Microsoft Click ID

    if (gclid) {
      localStorage.setItem("gclid", gclid)
      // Also set as session storage as backup
      sessionStorage.setItem("gclid", gclid)
    }

    if (fbclid) {
      localStorage.setItem("fbclid", fbclid)
      sessionStorage.setItem("fbclid", fbclid)
    }

    if (msclkid) {
      localStorage.setItem("msclkid", msclkid)
      sessionStorage.setItem("msclkid", msclkid)
    }
  }, [searchParams])

  return null // This component doesn't render anything
}
