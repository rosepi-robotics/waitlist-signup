"use client"

import { useSearchParams } from "next/navigation"

export default function BlogPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Current Page: {page}</p>
    </div>
  )
}
