import { requireAuthenticated } from "@/features/auth/application/auth.session";
import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";

export default async function SettingsPage() {
  await requireAuthenticated("/settings");

  return (
    <PlaceholderPage
      title="Settings"
      description="通知、偏好設定與帳號安全性控制。"
      currentPath="/settings"
      highlights={[
        { label: "Notifications", value: "Daily reminders" },
        { label: "Theme", value: "System" },
        { label: "Language", value: "繁體中文" },
      ]}
    />
  );
}
