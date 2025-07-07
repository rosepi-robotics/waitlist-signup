import { sendGAEvent } from "@next/third-parties/google"

// Get stored click IDs for conversion tracking
function getClickIDs() {
  if (typeof window === "undefined") return {}

  return {
    gclid: localStorage.getItem("gclid") || sessionStorage.getItem("gclid"),
    fbclid: localStorage.getItem("fbclid") || sessionStorage.getItem("fbclid"),
    msclkid: localStorage.getItem("msclkid") || sessionStorage.getItem("msclkid"),
  }
}

export const trackWaitlistSignup = (email: string) => {
  const clickIDs = getClickIDs()

  // Fire the primary conversion event with click ID data
  sendGAEvent("event", "generate_lead", {
    event_category: "engagement",
    event_label: "waitlist_signup",
    value: 1,
    currency: "USD",
    // Include click IDs for proper attribution
    gclid: clickIDs.gclid,
    fbclid: clickIDs.fbclid,
    msclkid: clickIDs.msclkid,
    // Custom parameters
    form_type: "waitlist",
    user_email: email,
    non_interaction: false,
  })

  // Fire supplementary events (these won't count as conversions)
  sendGAEvent("event", "sign_up", {
    event_category: "engagement",
    event_label: "waitlist",
    method: "email",
    gclid: clickIDs.gclid,
    non_interaction: true,
  })

  sendGAEvent("event", "form_submit", {
    event_category: "form",
    event_label: "waitlist_form",
    form_id: "waitlist",
    gclid: clickIDs.gclid,
    non_interaction: true,
  })
}

export const trackPageView = (url: string) => {
  const clickIDs = getClickIDs()

  sendGAEvent("event", "page_view", {
    page_location: url,
    gclid: clickIDs.gclid,
    fbclid: clickIDs.fbclid,
    msclkid: clickIDs.msclkid,
  })
}

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  const clickIDs = getClickIDs()

  sendGAEvent("event", eventName, {
    ...parameters,
    gclid: clickIDs.gclid,
    fbclid: clickIDs.fbclid,
    msclkid: clickIDs.msclkid,
  })
}
