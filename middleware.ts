import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check if the user is authenticated
    const authCookie = request.cookies.get("admin_auth")

    // If not authenticated and not on the login page, redirect to login
    if (!authCookie?.value && !request.nextUrl.pathname.startsWith("/admin/login")) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("from", request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
}
