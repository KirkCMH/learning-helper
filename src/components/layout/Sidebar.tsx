import { signOutAction } from "@/features/auth/application/auth.actions";
import { SidebarNav } from "@/features/sidebar/SidebarNav";

export function Sidebar() {
  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-72">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-950 px-5 py-6 text-slate-50">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Learning Helper</p>
          <h2 className="mt-3 text-xl font-semibold">學習儀表板</h2>
          <p className="mt-2 text-sm text-slate-300">登入後可快速切換課程、複習與個人設定。</p>
        </div>

        <div className="px-3 py-4">
          <SidebarNav />
        </div>

        <div className="border-t border-slate-200 px-5 py-4">
          <form action={signOutAction}>
            <button
              type="submit"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
