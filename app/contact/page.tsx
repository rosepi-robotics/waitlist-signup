"use client"

import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex items-center justify-center p-12 text-center">
        <div>
          <h1 className="text-4xl font-light mb-4">Contact&nbsp;Us</h1>
          <p className="text-gray-600">A simple placeholder &mdash; add your form here.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
