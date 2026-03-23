import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { AUTH_CALLBACK, LOGIN } from "@/lib/constants";

const PUBLIC_PATHS = new Set([LOGIN, AUTH_CALLBACK]);

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-search", request.nextUrl.search);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (PUBLIC_PATHS.has(request.nextUrl.pathname)) {
    response.headers.set("x-learning-helper-public-route", "true");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
