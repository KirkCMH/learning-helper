"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_NAV_ITEMS } from "@/features/sidebar/sidebar.constants";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex flex-col gap-1.5">
      {SIDEBAR_NAV_ITEMS.map((item) => {
        const isActive = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "rounded-xl px-4 py-3 text-sm font-medium transition",
              isActive
                ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
