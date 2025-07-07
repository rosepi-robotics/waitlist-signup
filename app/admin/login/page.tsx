"use client"

import { loginAction } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Admin Sign&nbsp;In</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={loginAction} className="space-y-4">
            <Input name="email" type="email" placeholder="Email" required autoComplete="email" />
            <Input name="password" type="password" placeholder="Password" required autoComplete="current-password" />
            <Button type="submit" className="w-full">
              Sign&nbsp;In
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
