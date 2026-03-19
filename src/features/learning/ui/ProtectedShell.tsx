import Link from "next/link";
import type { ReactNode } from "react";

import { signOutAction } from "@/features/auth/application/auth.actions";

const navigationItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/quiz-history", label: "Quiz History" },
  { href: "/review/wrong-answers", label: "Wrong Answers" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];

type ProtectedShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ProtectedShell({ title, description, children }: ProtectedShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-8">
        <header className="flex flex-col gap-4 rounded-2xl bg-slate-950 px-6 py-5 text-slate-50 shadow-lg md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">Protected Area</p>
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="mt-1 text-sm text-slate-300">{description}</p>
            </div>
          </div>
          <form action={signOutAction}>
            <button
              type="submit"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium transition hover:bg-slate-800"
            >
              Sign out
            </button>
          </form>
        </header>

        <nav className="flex flex-wrap gap-3">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <main>{children}</main>
      </div>
    </div>
  );
}
