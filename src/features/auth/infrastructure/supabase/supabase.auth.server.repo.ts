import { createClient } from "./server.client";

export const supabaseAuthServerRepo = {
  async exchangeCodeForSession(code: string) {
    const supabase = await createClient();
    return supabase.auth.exchangeCodeForSession(code);
  },
};