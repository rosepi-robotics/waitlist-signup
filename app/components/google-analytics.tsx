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
        send_page_view: true,
      })
      
      // If Google Ads ID is provided, configure it too
      if (AW_CONVERSION_ID) {
        window.gtag("config", AW_CONVERSION_ID, {
          send_page_view: true,
        });
      }
      
      // Check for gclid in URL or cookies and send it to Google Ads
      const gclid = searchParams?.get('gclid') || getCookie('gclid');
      if (gclid && AW_CONVERSION_ID) {
        window.gtag('set', 'user_data', {
          'gclid': gclid,
        });
      }
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, AW_CONVERSION_ID])

  // Helper function to get cookies
  function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

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
              page_path: window.location.pathname + window.location.search,
            });
            ${AW_CONVERSION_ID ? `gtag('config', '${AW_CONVERSION_ID}');` : ''}
            
            // Check for gclid in URL and store in cookie if present
            const params = new URLSearchParams(window.location.search);
            const gclid = params.get('gclid');
            if (gclid) {
              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + 30);
              document.cookie = 'gclid=' + gclid + '; expires=' + expirationDate.toUTCString() + '; path=/';
            }
          `,
        }}
      />
    </>
  )
}
