import type { ReactNode } from "react";

import { FeaturePageShell } from "@/components/layout";

type ProtectedShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ProtectedShell({ title, description, children }: ProtectedShellProps) {
  return (
    <FeaturePageShell title={title} description={description}>
      {children}
    </FeaturePageShell>
  );
}
