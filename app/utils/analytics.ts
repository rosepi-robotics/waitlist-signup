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

