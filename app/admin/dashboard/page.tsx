"use client"

import { useSearchParams } from "next/navigation"

export default function Dashboard() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}
