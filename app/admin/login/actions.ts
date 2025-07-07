"use server"

/**
 * Placeholder server-side login action.
 * Replace this logic with real authentication (e.g. check Supabase, JWT, etc.).
 */
export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // TODO: implement real auth flow
  console.log("Admin login attempt:", email)

  // Simulate delay
  await new Promise((r) => setTimeout(r, 300))

  // You might redirect or set a cookie here
  return { success: true }
}
