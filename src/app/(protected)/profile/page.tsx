import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";

export default async function ProfilePage() {
  return (
    <PlaceholderPage
      title="Profile"
      description="個人學習檔案、目標設定與帳號資訊。"
      currentPath="/profile"
      highlights={[
        { label: "Learner level", value: "Intermediate" },
        { label: "Study streak", value: "14 days" },
        { label: "Goal", value: "60-day plan" },
      ]}
    />
  );
}
