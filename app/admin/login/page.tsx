"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { login } from "@/app/actions/auth"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const from = searchParams.get("from") || "/admin/email"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await login(password)

      if (result.success) {
        toast({
          title: "Success",
          description: "You are now logged in",
        })
        router.push(from)
      } else {
        toast({
          title: "Error",
          description: "Invalid password",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
              placeholder="Enter admin password"
              required
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-white text-black hover:bg-white/90">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}
