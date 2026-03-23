import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";
import { COURSES } from "@/lib/constants";

export default async function CoursesPage() {
  return (
    <PlaceholderPage
      title="Courses"
      description="課程總覽、週次切換與 lesson 入口。"
      currentPath={COURSES}
      highlights={[
        { label: "Active course", value: "React x TypeScript" },
        { label: "Current week", value: "Week 1" },
        { label: "Lessons unlocked", value: "4" },
      ]}
    />
  );
}
