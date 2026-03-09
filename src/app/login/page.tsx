import { GoogleSignInButton } from "@/features/auth/ui/GoogleSignInButton";

export default function LoginPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <GoogleSignInButton />
    </main>
  );
}
