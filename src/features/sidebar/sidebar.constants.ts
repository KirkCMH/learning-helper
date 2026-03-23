import {
  COURSES,
  DASHBOARD,
  PROFILE,
  QUIZ_HISTORY,
  SETTINGS,
  WRONG_ANSWERS,
} from "@/lib/constants";

export type SidebarNavItem = {
  href: string;
  label: string;
};

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { href: DASHBOARD, label: "Dashboard" },
  { href: COURSES, label: "Courses" },
  { href: WRONG_ANSWERS, label: "Wrong Answers" },
  { href: QUIZ_HISTORY, label: "Quiz History" },
  { href: PROFILE, label: "Profile" },
  { href: SETTINGS, label: "Settings" },
];
