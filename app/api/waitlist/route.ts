import { NextResponse, type NextRequest } from "next/server"
import { joinWaitlist } from "@/app/actions/waitlist" // existing server action

export async function POST(req: NextRequest) {
  const { email, referral } = (await req.json()) as {
    email: string
    referral?: string
  }

  // Re-use the existing server action so all validation & Redis logic stays in one place
  const formData = new FormData()
  formData.append("email", email)
  if (referral) formData.append("referral", referral)

  const result = await joinWaitlist(formData)

  return NextResponse.json(result, { status: 200 })
}
