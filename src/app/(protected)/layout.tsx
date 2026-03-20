import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/AppShell";
import { MainContent } from "@/components/layout/MainContent";
import { Sidebar } from "@/components/layout/Sidebar";
import { getCurrentRequestPath, requireAuthenticated } from "@/features/auth/application/auth.session";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const currentPath = await getCurrentRequestPath();
  await requireAuthenticated(currentPath);

  return (
    <AppShell sidebar={<Sidebar />}>
      <MainContent>{children}</MainContent>
    </AppShell>
  );
}
