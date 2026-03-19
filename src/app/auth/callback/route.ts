import { NextResponse } from "next/server";

import { normalizeNextPath } from "@/features/auth/application/auth.session";
import { authServerService } from "@/features/auth/application/auth.server.service";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const nextPath = normalizeNextPath(searchParams.get("next"));

  if (code) {
    await authServerService.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL(nextPath, origin));
}
