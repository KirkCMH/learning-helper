import { requireAuthenticated } from "@/features/auth/application/auth.session";
import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";

export default async function WrongAnswersPage() {
  await requireAuthenticated("/review/wrong-answers");

  return (
    <PlaceholderPage
      title="Wrong Answers Review"
      description="集中整理錯題、複習優先順序與再次測驗入口。"
      currentPath="/review/wrong-answers"
      highlights={[
        { label: "Wrong answers", value: "12" },
        { label: "Need review", value: "7" },
        { label: "Recovered", value: "5" },
      ]}
    />
  );
}
