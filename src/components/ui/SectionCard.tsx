import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <article className={["rounded-xl bg-white p-5 shadow-sm", className].filter(Boolean).join(" ")}>
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </article>
  );
}
