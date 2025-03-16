"use client"

import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "./components/navbar"

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
  }
`

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <style jsx global>
        {backgroundStyle}
      </style>
      <Navbar />
      <div className="tennis-ball"></div>
      <div className="content container mx-auto px-6 lg:px-8">
        <WaitlistSignup />
      </div>
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
    </main>
  )
}

