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
    
    // Send the form_submit event for GA4
    gtag("event", "form_submit", {
      // You can add additional parameters if needed
      email: email,
    });
    
    // Also send a direct conversion event for Google Ads
    // This will work with "Event" conversion tracking in Google Ads
    const AW_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const AW_CONVERSION_LABEL = "waitlist_signup"; // Replace with your actual conversion label
    
    if (AW_CONVERSION_ID) {
      gtag("event", "conversion", {
        send_to: `${AW_CONVERSION_ID}/${AW_CONVERSION_LABEL}`,
        value: 1.0,
        currency: "USD",
      });
    }
    
    console.log("Tracked form_submit event and direct conversion for Google Ads");
  }
}
