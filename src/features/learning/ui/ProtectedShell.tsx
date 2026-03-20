import type { ReactNode } from "react";

import { PageHeader } from "@/components/layout/PageHeader";

type ProtectedShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ProtectedShell({ title, description, children }: ProtectedShellProps) {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <PageHeader title={title} description={description} />
      <div>{children}</div>
    </div>
  );
}
