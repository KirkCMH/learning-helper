import type { OAuthProvider } from "@/features/auth/application/auth.types";
import { createClient } from "@/features/auth/infrastructure/supabase/browser.client";

export const supabaseAuthBrowserRepo = {
  async signInWithOAuth(provider: OAuthProvider, redirectTo: string) {
    const supabase = createClient();
    return supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo },
    });
  },

  async signOut() {
    const supabase = createClient();
    return supabase.auth.signOut();
  },
};