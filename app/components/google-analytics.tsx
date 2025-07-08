"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"

export default function GoogleAnalytics({ 
  GA_MEASUREMENT_ID, 
  AW_CONVERSION_ID 
}: { 
  GA_MEASUREMENT_ID: string,
  AW_CONVERSION_ID?: string 
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      })
      
      // If Google Ads ID is provided, configure it too
      if (AW_CONVERSION_ID) {
        window.gtag("config", AW_CONVERSION_ID);
      }
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, AW_CONVERSION_ID])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            ${AW_CONVERSION_ID ? `gtag('config', '${AW_CONVERSION_ID}');` : ''}
          `,
        }}
      />
    </>
  )
}
