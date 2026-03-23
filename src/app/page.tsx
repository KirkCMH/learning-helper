import { redirect } from "next/navigation";

import { getAuthState } from "@/features/auth/application/auth.session";
import { DEFAULT_AUTHENTICATED_PATH, LOGIN } from "@/lib/constants";

export default async function Home() {
  const authState = await getAuthState();

  redirect(authState.isAuthenticated ? DEFAULT_AUTHENTICATED_PATH : LOGIN);
}
