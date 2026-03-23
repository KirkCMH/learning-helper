import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MOCK_AUTH_COOKIE, MOCK_AUTH_COOKIE_VALUE } from "@/features/auth/application/mock-auth.constants";

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get(MOCK_AUTH_COOKIE)?.value === MOCK_AUTH_COOKIE_VALUE;
}

export function middleware(request: NextRequest) {
  const authenticated = isAuthenticated(request);
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/today") && !authenticated) {
    const loginUrl = new URL("/login", request.url);
    const nextPath = `${pathname}${search}`;
    loginUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/login" && authenticated) {
    const requestedNext = request.nextUrl.searchParams.get("next");
    const safeNext = requestedNext?.startsWith("/") ? requestedNext : "/today";
    return NextResponse.redirect(new URL(safeNext, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/today/:path*", "/login"],
};
