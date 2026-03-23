import { NextResponse } from "next/server";
import { MOCK_AUTH_COOKIE } from "@/features/auth/application/mock-auth.constants";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(MOCK_AUTH_COOKIE);
  return response;
}
