"use client"

import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function SurveyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex items-center justify-center p-12">
        <h1 className="text-3xl font-light">Survey&nbsp;coming&nbsp;soon</h1>
      </section>
      <Footer />
    </main>
  )
}
