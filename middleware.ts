import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""

  if (!host.startsWith("lifeline.")) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/lifeline", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
}