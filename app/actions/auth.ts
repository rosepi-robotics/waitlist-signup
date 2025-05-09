"use server"

import { cookies } from "next/headers"

// The hardcoded password
const ADMIN_PASSWORD = "Rallie123"

export async function login(password: string) {
  if (password === ADMIN_PASSWORD) {
    // Set a cookie to indicate the user is authenticated
    cookies().set({
      name: "admin_auth",
      value: "authenticated",
      httpOnly: true,
      path: "/",
      // In production, you'd want to set secure: true
      secure: process.env.NODE_ENV === "production",
      // Set expiration to 24 hours
      maxAge: 60 * 60 * 24,
    })

    return { success: true }
  }

  return { success: false }
}

export async function logout() {
  cookies().delete("admin_auth")
  return { success: true }
}
