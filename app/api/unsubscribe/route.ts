import { NextResponse } from "next/server"
import { redis } from "@/app/lib/redis"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 })
    }

    // Remove from waitlist
    const removed = await redis.srem("waitlist_emails", email)

    // Even if the email wasn't in the set, we'll consider it a success
    return NextResponse.json({ success: true, removed })
  } catch (error) {
    console.error("Error unsubscribing:", error)
    return NextResponse.json({ success: false, error: "Failed to unsubscribe" }, { status: 500 })
  }
}
