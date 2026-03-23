import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";
import { SETTINGS } from "@/lib/constants";

export default async function SettingsPage() {
  return (
    <PlaceholderPage
      title="Settings"
      description="通知、偏好設定與帳號安全性控制。"
      currentPath={SETTINGS}
      highlights={[
        { label: "Notifications", value: "Daily reminders" },
        { label: "Theme", value: "System" },
        { label: "Language", value: "繁體中文" },
      ]}
    />
  );
}
