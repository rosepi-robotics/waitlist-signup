"use client"

import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 p-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-light mb-8 text-center">FAQ</h1>
        <p className="text-gray-600 text-center">Content coming soon.</p>
      </section>
      <Footer />
    </main>
  )
}
