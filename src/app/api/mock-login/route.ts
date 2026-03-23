import { NextResponse } from "next/server";
import {
  MOCK_AUTH_COOKIE,
  MOCK_AUTH_COOKIE_VALUE,
  MOCK_AUTH_EMAIL,
  MOCK_AUTH_PASSWORD,
} from "@/features/auth/application/mock-auth.constants";

interface LoginBody {
  email?: string;
  password?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;

  if (body.email !== MOCK_AUTH_EMAIL || body.password !== MOCK_AUTH_PASSWORD) {
    return NextResponse.json({ message: "帳號或密碼錯誤" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(MOCK_AUTH_COOKIE, MOCK_AUTH_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
