"use client"

import { useSearchParams } from "next/navigation"

export default function SurveyPage() {
  const searchParams = useSearchParams()
  const surveyId = searchParams.get("surveyId")

  return (
    <div>
      <h1>Survey Page</h1>
      {surveyId ? <p>Survey ID: {surveyId}</p> : <p>No survey ID provided.</p>}
    </div>
  )
}
