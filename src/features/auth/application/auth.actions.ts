"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { normalizeNextPath } from "@/features/auth/application/auth.session";
import { DEFAULT_AUTHENTICATED_PATH, LOGIN, MOCK_SESSION_COOKIE, ROOT } from "@/lib/constants";

export async function mockLoginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();
  const nextPath = normalizeNextPath(String(formData.get("next") ?? DEFAULT_AUTHENTICATED_PATH));

  if (!email || !password) {
    redirect(`${LOGIN}?next=${encodeURIComponent(nextPath)}&error=missing-credentials`);
  }

  const cookieStore = await cookies();
  cookieStore.set(MOCK_SESSION_COOKIE, "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: ROOT,
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(nextPath);
}

export async function signOutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(MOCK_SESSION_COOKIE);
  redirect(LOGIN);
}
