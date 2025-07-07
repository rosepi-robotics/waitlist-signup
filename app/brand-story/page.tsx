"use client"

import { useSearchParams } from "next/navigation"

export default function BrandStoryPage() {
  const searchParams = useSearchParams()
  const paramValue = searchParams.get("param")

  return (
    <div>
      <h1>Brand Story Page</h1>
      {paramValue && <p>Parameter value: {paramValue}</p>}
    </div>
  )
}
