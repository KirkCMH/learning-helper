import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";
import { WRONG_ANSWERS } from "@/lib/constants";

export default async function WrongAnswersPage() {
  return (
    <PlaceholderPage
      title="Wrong Answers Review"
      description="集中整理錯題、複習優先順序與再次測驗入口。"
      currentPath={WRONG_ANSWERS}
      highlights={[
        { label: "Wrong answers", value: "12" },
        { label: "Need review", value: "7" },
        { label: "Recovered", value: "5" },
      ]}
    />
  );
}
