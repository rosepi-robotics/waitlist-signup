"use client"

import { useEffect, Suspense } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"

// Helper function to get cookies
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

// Create a separate component that uses searchParams
function AnalyticsWithParams({ 
  GA_MEASUREMENT_ID, 
  AW_CONVERSION_ID 
}: { 
  GA_MEASUREMENT_ID: string,
  AW_CONVERSION_ID?: string 
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Debug: Log all URL parameters
    console.log("GA Component - Current URL:", window.location.href);
    console.log("GA Component - Search params:", searchParams?.toString());
    console.log("GA Component - All cookies:", document.cookie);
    
    if (typeof window !== "undefined" && window.gtag && pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
        send_page_view: true,
        debug_mode: true
      })
      
      // If Google Ads ID is provided, configure it too
      if (AW_CONVERSION_ID) {
        window.gtag("config", AW_CONVERSION_ID, {
          send_page_view: true,
          debug_mode: true
        });
      }
      
      // Check for gclid in URL or cookies and send it to Google Ads
      const gclid = searchParams?.get('gclid') || getCookie('gclid');
      const isGoogleReferrer = getCookie('google_ads_referrer') === 'true';
      
      if (gclid && AW_CONVERSION_ID) {
        console.log("GA Component - Found gclid:", gclid);
        window.gtag('set', 'user_data', {
          'gclid': gclid,
        });
      } else if (isGoogleReferrer && AW_CONVERSION_ID) {
        console.log("GA Component - Using Google Ads referrer flag");
        // Even without gclid, we know this came from Google Ads
        window.gtag('set', {
          'source': 'google',
          'medium': 'cpc'
        });
      } else {
        console.log("GA Component - No gclid found in URL or cookies");
      }
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, AW_CONVERSION_ID])

  return null;
}

// Main component that doesn't directly use searchParams
export default function GoogleAnalytics({ 
  GA_MEASUREMENT_ID, 
  AW_CONVERSION_ID 
}: { 
  GA_MEASUREMENT_ID: string,
  AW_CONVERSION_ID?: string 
}) {
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
              debug_mode: true
            });
            ${AW_CONVERSION_ID ? `gtag('config', '${AW_CONVERSION_ID}', { debug_mode: true });` : ''}
            
            // Check for gclid in URL and store in cookie if present
            const params = new URLSearchParams(window.location.search);
            const gclid = params.get('gclid');
            if (gclid) {
              console.log("GA Script - Found gclid:", gclid);
              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + 30);
              document.cookie = 'gclid=' + gclid + '; expires=' + expirationDate.toUTCString() + '; path=/';
            } else {
              console.log("GA Script - No gclid in URL:", window.location.href);
              
              // Check if this is a Google referrer
              if (document.referrer && (document.referrer.includes('google') || document.referrer.includes('googleads'))) {
                console.log("GA Script - Google referrer detected:", document.referrer);
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 30);
                document.cookie = 'google_ads_referrer=true; expires=' + expirationDate.toUTCString() + '; path=/';
              }
            }
          `,
        }}
      />
      
      {/* Wrap the component using searchParams in Suspense */}
      <Suspense fallback={null}>
        <AnalyticsWithParams 
          GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} 
          AW_CONVERSION_ID={AW_CONVERSION_ID} 
        />
      </Suspense>
    </>
  )
}
