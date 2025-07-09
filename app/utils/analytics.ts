// Analytics utility functions

/**
 * Track a button click or other event
 */
export const trackEvent = (eventName: string, category: string, label: string, value?: number) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as any).gtag
    gtag("event", eventName, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

/**
 * Track a page view
 */
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as any).gtag
    gtag("config", "G-VEYXZ8D6KJ", {
      page_path: url,
    })
  }
}

/**
 * Track a conversion for Google Ads
 */
export const trackConversion = (conversionId: string, conversionLabel: string, value?: number) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as any).gtag
    gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: "USD",
    })
  }
}

/**
 * Track a waitlist signup conversion
 */
export const trackWaitlistSignup = (email: string) => {
  // Track event in Google Analytics
  trackEvent("signup", "waitlist", "email_signup");
  
  // For GA4 conversions imported to Google Ads, we need to use the exact event name
  // that's configured in Google Ads (form_submit)
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as any).gtag
    gtag("event", "form_submit", {
      // You can add additional parameters if needed
      email: email,
    });
    
    console.log("Tracked form_submit event for Google Ads conversion");
  }
}
