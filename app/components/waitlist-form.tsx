"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useSearchParams } from "next/navigation"
import { addToWaitlist } from "@/lib/api"

interface WaitlistFormProps {
  defaultEmail?: string
}

function WaitlistForm({ defaultEmail = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState(defaultEmail)
  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams()
  const referralCode = searchParams.get("ref") ?? ""

  const { toast } = useToast()

  /* ------------------------------------------------------------------ */
  /* Submit handler (no React-Query)                                     */
  /* ------------------------------------------------------------------ */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await addToWaitlist({
        email,
        referral: referralCode,
      })
      toast({ title: "Success!", description: "You’re on the list 🎾" })
      setEmail("")
    } catch (err: any) {
      toast({
        title: "Submission failed",
        description: err?.message ?? "Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* Email --------------------------------------------------------- */}
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Submit -------------------------------------------------------- */}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Joining…" : "Join Waitlist"}
      </Button>
    </form>
  )
}

export { WaitlistForm }
export default WaitlistForm
