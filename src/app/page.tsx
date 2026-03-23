import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MOCK_AUTH_COOKIE, MOCK_AUTH_COOKIE_VALUE } from "@/features/auth/application/mock-auth.constants";

export default async function Home() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get(MOCK_AUTH_COOKIE)?.value === MOCK_AUTH_COOKIE_VALUE;

  redirect(isAuthenticated ? "/today" : "/login");
}
