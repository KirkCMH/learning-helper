import { supabaseAuthServerRepo } from "../infrastructure/supabase/supabase.auth.server.repo";

export const authServerService = {
  exchangeCodeForSession(code: string) {
    return supabaseAuthServerRepo.exchangeCodeForSession(code);
  },
};