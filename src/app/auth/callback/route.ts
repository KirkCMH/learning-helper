import { NextResponse } from "next/server";
import { authServerService } from "@/features/auth/application/auth.server.service";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    await authServerService.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`${origin}/`);
}
