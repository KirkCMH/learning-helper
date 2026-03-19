import { LoginForm } from "@/features/auth/ui/LoginForm";
import { normalizeNextPath } from "@/features/auth/application/auth.session";

type LoginPageProps = {
  searchParams: Promise<{
    next?: string;
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const nextPath = normalizeNextPath(params.next);

  return <LoginForm nextPath={nextPath} hasError={params.error === "missing-credentials"} />;
}
