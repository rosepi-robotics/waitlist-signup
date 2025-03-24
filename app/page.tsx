"use client"

import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { SurveyBanner } from "./components/survey-banner"

const backgroundStyle = `
.tennis-ball {
  position: fixed;
  top: 12%;
  right: 9%;
  width: 300px;
  height: 300px;
  background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-26_at_6.05.43_PM-removebg-preview-Y5RhkcjuDaaicvGMYVNuiu6F64cnma.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  pointer-events: none;
  z-index: 0;
  animation: float 6s ease-in-out infinite;
}

.green-blob {
  position: fixed;
  bottom: 15%;
  left: 5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, rgba(74, 222, 128, 0) 70%);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

.green-blob-2 {
  position: fixed;
  top: 30%;
  right: 15%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0) 70%);
  border-radius: 50%;
  filter: blur(30px);
  pointer-events: none;
  z-index: 0;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.content {
  position: relative;
  z-index: 2;
  padding-top: 6rem;
}
`

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 55%, #4ade80 100%)",
      }}
    >
      <style jsx global>
        {backgroundStyle}
      </style>
      <Navbar />
      <div className="tennis-ball"></div>
      <div className="green-blob"></div>
      <div className="green-blob-2"></div>
      <div className="content container mx-auto px-6 lg:px-8">
        <WaitlistSignup />
      </div>
      <Footer />
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(23 23 23)",
            color: "white",
            border: "1px solid rgb(63 63 70)",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
      <SurveyBanner />
    </main>
  )
}

