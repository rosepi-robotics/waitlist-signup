export interface WaitlistPayload {
  email: string
  referral?: string
}

/**
 * POST /api/waitlist  – simple helper used by the form.
 * Throws on non-2xx so the caller can handle toasts.
 */
export async function addToWaitlist(payload: WaitlistPayload) {
  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const msg = (await res.json().catch(() => ({})))?.message ?? res.statusText
    throw new Error(msg)
  }

  return res.json() as Promise<{ success: boolean }>
}
