import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Preserve gclid parameter in cookies for cross-page tracking
  const gclid = request.nextUrl.searchParams.get('gclid');
  if (gclid) {
    // Store gclid in a cookie that lasts for 30 days
    response.cookies.set('gclid', gclid, { 
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
  }
  
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check if the user is authenticated
    const authCookie = request.cookies.get("admin_auth")

    // If not authenticated and not on the login page, redirect to login
    if (!authCookie?.value && !request.nextUrl.pathname.startsWith("/admin/login")) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("from", request.nextUrl.pathname)
      
      // Preserve gclid in redirects if present
      if (gclid) {
        url.searchParams.set("gclid", gclid);
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
