"use client"

import { useSearchParams } from "next/navigation"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")

  return (
    <div>
      <h1>Contact Us</h1>
      {name && <p>Welcome, {name}!</p>}
      <p>Please fill out the form below to contact us.</p>
      {/* Add your contact form here */}
    </div>
  )
}
