import type { ReactNode } from "react";

import { PageHeader } from "./PageHeader";

type FeaturePageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function FeaturePageShell({ title, description, children }: FeaturePageShellProps) {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <PageHeader title={title} description={description} />
      <div>{children}</div>
    </div>
  );
}
