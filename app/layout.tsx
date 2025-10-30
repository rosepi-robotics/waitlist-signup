import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { AnalyticsProvider } from "./components/analytics-provider"

export const metadata: Metadata = {
  title: "Mavio | AI-Powered Tennis Ball Machine for Smarter Training",
  description:
    "Train like a pro with Mavio — the compact, intelligent tennis ball machine that uses AI and computer vision to personalize every shot. Lightweight, powerful, and endlessly customizable.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider />
        {children}
        <Script
          src="https://static.klaviyo.com/onsite/js/Uqrs58/klaviyo.js?company_id=Uqrs58"
          strategy="afterInteractive"
          async
        />
        <Script id="klaviyo-init" strategy="afterInteractive">
          {`
            !function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();
          `}
        </Script>
      </body>
    </html>
  )
}
