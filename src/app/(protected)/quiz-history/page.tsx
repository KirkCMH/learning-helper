import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";
import { QUIZ_HISTORY } from "@/lib/constants";

export default async function QuizHistoryPage() {
  return (
    <PlaceholderPage
      title="Quiz History"
      description="顯示歷次測驗紀錄、時間線與分數變化。"
      currentPath={QUIZ_HISTORY}
      highlights={[
        { label: "Attempts", value: "18" },
        { label: "Average score", value: "78%" },
        { label: "Last attempt", value: "2 days ago" },
      ]}
    />
  );
}
