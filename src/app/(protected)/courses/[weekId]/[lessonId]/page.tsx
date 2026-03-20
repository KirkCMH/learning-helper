import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";

type LessonPageProps = {
  params: Promise<{
    weekId: string;
    lessonId: string;
  }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { weekId, lessonId } = await params;

  return (
    <PlaceholderPage
      title="Lesson Detail"
      description="顯示指定週次與課程單元的內容、素材與練習入口。"
      currentPath={`/courses/${weekId}/${lessonId}`}
      highlights={[
        { label: "Week", value: weekId },
        { label: "Lesson", value: lessonId },
        { label: "Status", value: "Ready to study" },
      ]}
    />
  );
}
