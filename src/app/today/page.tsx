import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MOCK_AUTH_COOKIE, MOCK_AUTH_COOKIE_VALUE, MOCK_AUTH_EMAIL } from "@/features/auth/application/mock-auth.constants";
import { TodayTaskBoard } from "@/features/learning/ui/TodayTaskBoard";

export default async function TodayPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get(MOCK_AUTH_COOKIE)?.value === MOCK_AUTH_COOKIE_VALUE;

  if (!isAuthenticated) {
    redirect("/login?next=/today");
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl space-y-6 px-6 py-10">
      <section className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-semibold text-sky-900">歡迎回來 👋</h1>
        <p className="mt-2 text-sm text-sky-800">{MOCK_AUTH_EMAIL}，以下是你今天的學習任務。</p>
      </section>

      <TodayTaskBoard />
    </main>
  );
}
