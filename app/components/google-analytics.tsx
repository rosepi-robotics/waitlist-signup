'use client'

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && pathname) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_MEASUREMENT_ID])

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
          `,
        }}
      />
    </>
  )
}

