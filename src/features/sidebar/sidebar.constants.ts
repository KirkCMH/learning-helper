export type SidebarNavItem = {
  href: string;
  label: string;
};

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/review/wrong-answers", label: "Wrong Answers" },
  { href: "/quiz-history", label: "Quiz History" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];
