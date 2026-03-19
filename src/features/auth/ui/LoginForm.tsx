import { mockLoginAction } from "@/features/auth/application/auth.actions";
import { GoogleSignInButton } from "@/features/auth/ui/GoogleSignInButton";

type LoginFormProps = {
  nextPath: string;
  hasError: boolean;
};

export function LoginForm({ nextPath, hasError }: LoginFormProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-slate-950/30">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">Learning Helper</p>
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-sm text-slate-300">
            使用 mock Email / Password 或 Google OAuth 登入，登入後會回到原本想前往的頁面。
          </p>
        </div>

        <form action={mockLoginAction} className="mt-8 space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Email</span>
            <input
              name="email"
              type="email"
              placeholder="demo@example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-emerald-400"
              required
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Password</span>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-emerald-400"
              required
            />
          </label>
          {hasError ? (
            <p className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
              Please enter both email and password to continue.
            </p>
          ) : null}
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px flex-1 bg-slate-800" />
          <span>or</span>
          <span className="h-px flex-1 bg-slate-800" />
        </div>

        <GoogleSignInButton nextPath={nextPath} />
      </div>
    </main>
  );
}
