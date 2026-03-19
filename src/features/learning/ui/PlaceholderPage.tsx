import Link from "next/link";

import { ProtectedShell } from "@/features/learning/ui/ProtectedShell";

type PlaceholderPageProps = {
  title: string;
  description: string;
  currentPath: string;
  highlights?: Array<{ label: string; value: string }>;
};

export function PlaceholderPage({
  title,
  description,
  currentPath,
  highlights = [],
}: PlaceholderPageProps) {
  return (
    <ProtectedShell title={title} description={description}>
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold">Page scaffold ready</h2>
          <p className="mt-3 text-sm text-slate-600">
            這個受保護頁面已建立完成，後續可以直接在此接上真實資料、互動元件與 API 串接。
          </p>
          <p className="mt-3 rounded-lg bg-slate-100 px-3 py-2 font-mono text-sm text-slate-700">{currentPath}</p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Quick links</h2>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/dashboard" className="text-emerald-700 hover:underline">
              Go to dashboard
            </Link>
            <Link href="/courses/week-1/lesson-1" className="text-emerald-700 hover:underline">
              Sample lesson detail
            </Link>
            <Link href="/quiz/week-1/lesson-1" className="text-emerald-700 hover:underline">
              Sample quiz session
            </Link>
          </div>
        </article>
      </section>

      {highlights.length > 0 ? (
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.label} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{highlight.label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{highlight.value}</p>
            </article>
          ))}
        </section>
      ) : null}
    </ProtectedShell>
  );
}
