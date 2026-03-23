"use client";

import { authBrowserService } from "@/features/auth/application/auth.browser.service";
import { AUTH_CALLBACK } from "@/lib/constants";

type GoogleSignInButtonProps = {
  nextPath: string;
};

export function GoogleSignInButton({ nextPath }: GoogleSignInButtonProps) {
  const handleGoogleSignIn = async () => {
    const callbackUrl = new URL(`${window.location.origin}${AUTH_CALLBACK}`);
    callbackUrl.searchParams.set("next", nextPath);

    await authBrowserService.signInWithOAuth("google", callbackUrl.toString());
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
    >
      Continue with Google
    </button>
  );
}
