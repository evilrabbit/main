import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""

  if (!host.startsWith("lifeline.")) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // Canonicalize /lifeline/* to the short form on the subdomain.
  if (pathname === "/lifeline" || pathname.startsWith("/lifeline/")) {
    const stripped = pathname.slice("/lifeline".length) || "/"
    return NextResponse.redirect(new URL(stripped, request.url))
  }

  const rewritten = pathname === "/" ? "/lifeline" : `/lifeline${pathname}`
  return NextResponse.rewrite(new URL(rewritten, request.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
}