"use client"

import { useSearchParams } from "next/navigation"

export default function FAQPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {category && <p>Category: {category}</p>}
      {/* Add FAQ content here based on the category or display all FAQs */}
    </div>
  )
}
