import type { ReactNode } from "react";

import { redirectAuthenticated } from "@/features/auth/application/auth.session";

export default async function AuthLayout({ children }: { children: ReactNode }) {
  await redirectAuthenticated();

  return children;
}
