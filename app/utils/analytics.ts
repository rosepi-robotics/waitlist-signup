import { sendGAEvent } from "@next/third-parties/google"

/**
 * Track waitlist signup - fires the events you have set up in Google Analytics
 */
export const trackWaitlistSignup = (email: string) => {
  // Fire the form_submit event (matches your "Submit lead form" conversion)
  sendGAEvent("event", "form_submit", {
    event_category: "conversion",
    event_label: "waitlist_signup",
    form_name: "waitlist_form",
    value: 1,
  })

  // Fire the sign_up event (matches your "Sign-up" conversion)
  sendGAEvent("event", "sign_up", {
    event_category: "conversion",
    event_label: "waitlist",
    method: "email",
    value: 1,
  })

  // Also fire generate_lead for good measure
  sendGAEvent("event", "generate_lead", {
    event_category: "conversion",
    event_label: "waitlist_signup",
    value: 1,
    currency: "USD",
  })
}

/**
 * Track a button click or other event
 */
export const trackEvent = (eventName: string, category: string, label: string, value?: number) => {
  sendGAEvent("event", eventName, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

/**
 * Track a page view (handled automatically by GoogleAnalytics component)
 */
export const trackPageView = (url: string) => {
  console.log(`Page view tracked: ${url}`)
}
