type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({
  eyebrow = "Protected Area",
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="rounded-2xl bg-slate-950 px-6 py-5 text-slate-50 shadow-lg">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">{eyebrow}</p>
      <div className="mt-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </div>
    </header>
  );
}
