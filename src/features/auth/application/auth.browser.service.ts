import type { OAuthProvider } from "./auth.types";
import { supabaseAuthBrowserRepo } from "../infrastructure/supabase/supabase.auth.browser.repo";

export const authBrowserService = {
  signInWithOAuth(provider: OAuthProvider, redirectTo: string) {
    return supabaseAuthBrowserRepo.signInWithOAuth(provider, redirectTo);
  },
  signOut() {
    return supabaseAuthBrowserRepo.signOut();
  },
};