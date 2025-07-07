"use client"

import { useSearchParams } from "next/navigation"

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  return (
    <div>
      <h1>Unsubscribe</h1>
      {email ? <p>Are you sure you want to unsubscribe {email}?</p> : <p>No email provided.</p>}
    </div>
  )
}
