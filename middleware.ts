import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Log all URL parameters for debugging
  console.log("URL Parameters:", request.nextUrl.search);
  
  // Preserve all URL parameters in cookies for cross-page tracking
  const urlParams = new URLSearchParams(request.nextUrl.search);
  const paramEntries = Array.from(urlParams.entries());
  
  // Store each parameter in cookies
  for (const [key, value] of paramEntries) {
    if (value) {
      // Store parameter in a cookie that lasts for 30 days
      response.cookies.set(key, value, { 
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      console.log(`Stored parameter in cookie: ${key}=${value}`);
    }
  }
  
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check if the user is authenticated
    const authCookie = request.cookies.get("admin_auth")

    // If not authenticated and not on the login page, redirect to login
    if (!authCookie?.value && !request.nextUrl.pathname.startsWith("/admin/login")) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("from", request.nextUrl.pathname)
      
      // Preserve all URL parameters in redirects
      for (const [key, value] of paramEntries) {
        if (key !== "from") {
          url.searchParams.set(key, value);
        }
      }
      
      return NextResponse.redirect(url)
    }
  }

  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
