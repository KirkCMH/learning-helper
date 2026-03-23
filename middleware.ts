import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  DEFAULT_AUTHENTICATED_PATH,
  LOGIN,
  MOCK_SESSION_COOKIE,
  isProtectedRoute,
  isPublicRoute,
} from "@/lib/constants";

function hasAuthenticatedSession(request: NextRequest) {
  const hasMockSession = request.cookies.get(MOCK_SESSION_COOKIE)?.value === "authenticated";
  const hasSupabaseSession = request.cookies
    .getAll()
    .some(({ name }) => name.startsWith("sb-") && name.includes("-auth-token"));

  return hasMockSession || hasSupabaseSession;
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  const isAuthenticated = hasAuthenticatedSession(request);

  requestHeaders.set("x-pathname", pathname);
  requestHeaders.set("x-search", search);

  if (pathname === LOGIN && isAuthenticated) {
    return NextResponse.redirect(new URL(DEFAULT_AUTHENTICATED_PATH, request.url));
  }

  if (isProtectedRoute(pathname) && !isAuthenticated) {
    const loginUrl = new URL(LOGIN, request.url);
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (isPublicRoute(pathname)) {
    response.headers.set("x-learning-helper-public-route", "true");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
