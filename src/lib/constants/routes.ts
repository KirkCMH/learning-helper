export const ROOT = "/";
export const LOGIN = "/login";
export const AUTH_CALLBACK = "/auth/callback";
export const DASHBOARD = "/dashboard";
export const COURSES = "/courses";
export const QUIZ_HISTORY = "/quiz-history";
export const REVIEW = "/review";
export const WRONG_ANSWERS = "/review/wrong-answers";
export const PROFILE = "/profile";
export const SETTINGS = "/settings";
export const QUIZ = "/quiz";
export const QUIZ_RESULT = "/quiz-result";

export const DEFAULT_AUTHENTICATED_PATH = DASHBOARD;

export const PUBLIC_ROUTE_PREFIXES = [LOGIN, AUTH_CALLBACK] as const;
export const PROTECTED_ROUTE_PREFIXES = [
  DASHBOARD,
  COURSES,
  QUIZ,
  QUIZ_RESULT,
  REVIEW,
  QUIZ_HISTORY,
  PROFILE,
  SETTINGS,
] as const;

function matchesRoutePrefix(pathname: string, routePrefix: string) {
  return pathname === routePrefix || pathname.startsWith(`${routePrefix}/`);
}

export function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTE_PREFIXES.some((routePrefix) => matchesRoutePrefix(pathname, routePrefix));
}

export function isProtectedRoute(pathname: string) {
  return PROTECTED_ROUTE_PREFIXES.some((routePrefix) => matchesRoutePrefix(pathname, routePrefix));
}
