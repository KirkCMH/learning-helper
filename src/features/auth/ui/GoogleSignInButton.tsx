"use client";

import { authBrowserService  } from "@/features/auth/application/auth.browser.service";

export function GoogleSignInButton() {
  const handleGoogleSignIn = async () => {
    await authBrowserService .signInWithOAuth(
      "google",
      `${window.location.origin}/auth/callback`
    );
  };

  return <button onClick={handleGoogleSignIn}>Continue with Google</button>;
}