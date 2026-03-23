"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface FormErrors {
  email?: string;
  password?: string;
  submit?: string;
}

function isValidNextPath(nextPath: string | null): string {
  if (!nextPath || !nextPath.startsWith("/")) {
    return "/today";
  }
  return nextPath;
}

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = useMemo(() => isValidNextPath(searchParams.get("next")), [searchParams]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors: FormErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email 為必填";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Email 格式不正確";
    }

    if (!password) {
      validationErrors.password = "Password 為必填";
    } else if (password.length < 8) {
      validationErrors.password = "Password 至少 8 碼";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/mock-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setErrors({ submit: "登入失敗，請確認帳號密碼（test@example.com / 12345678）" });
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setErrors({ submit: "目前無法登入，請稍後再試" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-6">
      <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">登入</h1>
        <p className="mt-2 text-sm text-slate-600">請使用測試帳號登入後進入今日任務頁。</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-sky-500"
              placeholder="test@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-sky-500"
              placeholder="至少 8 碼"
            />
            {errors.password && <p className="mt-1 text-sm text-rose-600">{errors.password}</p>}
          </div>

          {errors.submit && <p className="rounded-md bg-rose-50 px-3 py-2 text-sm text-rose-700">{errors.submit}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "登入中..." : "登入"}
          </button>
        </form>
      </section>
    </main>
  );
}
