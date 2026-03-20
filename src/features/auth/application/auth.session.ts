import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/features/auth/infrastructure/supabase/server.client";

const MOCK_SESSION_COOKIE = "learning-helper-mock-session";
const DEFAULT_AUTHENTICATED_PATH = "/dashboard";

export function normalizeNextPath(nextPath: string | null | undefined): string {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return DEFAULT_AUTHENTICATED_PATH;
  }

  if (nextPath === "/" || nextPath.startsWith("/login") || nextPath.startsWith("/auth/")) {
    return DEFAULT_AUTHENTICATED_PATH;
  }

  return nextPath;
}

function extractPathFromHeaderValue(value: string | null): string | null {
  if (!value) {
    return null;
  }

  if (value.startsWith("/")) {
    return value;
  }

  try {
    const parsedUrl = new URL(value);
    return `${parsedUrl.pathname}${parsedUrl.search}`;
  } catch {
    return null;
  }
}

export async function getCurrentRequestPath() {
  const headerStore = await headers();
  const headerCandidates = [
    "x-pathname",
    "x-next-pathname",
    "next-url",
    "x-url",
    "x-invoke-path",
    "x-matched-path",
  ];

  for (const headerName of headerCandidates) {
    const path = extractPathFromHeaderValue(headerStore.get(headerName));

    if (path) {
      const query = headerName === "x-invoke-path" ? headerStore.get("x-invoke-query") : null;
      return normalizeNextPath(query ? `${path}${query}` : path);
    }
  }

  const refererPath = extractPathFromHeaderValue(headerStore.get("referer"));
  return normalizeNextPath(refererPath);
}

export async function getAuthState() {
  const cookieStore = await cookies();
  const hasMockSession = cookieStore.get(MOCK_SESSION_COOKIE)?.value === "authenticated";

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return {
      isAuthenticated: hasMockSession || Boolean(user),
      user,
      hasMockSession,
    };
  } catch {
    return {
      isAuthenticated: hasMockSession,
      user: null,
      hasMockSession,
    };
  }
}

export async function requireAuthenticated(nextPath: string) {
  const authState = await getAuthState();

  if (!authState.isAuthenticated) {
    redirect(`/login?next=${encodeURIComponent(normalizeNextPath(nextPath))}`);
  }

  return authState;
}

export async function redirectAuthenticated() {
  const authState = await getAuthState();

  if (authState.isAuthenticated) {
    redirect(DEFAULT_AUTHENTICATED_PATH);
  }
}

export { DEFAULT_AUTHENTICATED_PATH, MOCK_SESSION_COOKIE };
