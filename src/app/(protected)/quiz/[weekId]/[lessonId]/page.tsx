import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";
import { buildQuizRoute } from "@/lib/utils";

type QuizPageProps = {
  params: Promise<{
    weekId: string;
    lessonId: string;
  }>;
};

export default async function QuizPage({ params }: QuizPageProps) {
  const { weekId, lessonId } = await params;

  return (
    <PlaceholderPage
      title="Quiz"
      description="測驗作答流程、答題狀態與提交入口。"
      currentPath={buildQuizRoute(weekId, lessonId)}
      highlights={[
        { label: "Week", value: weekId },
        { label: "Lesson", value: lessonId },
        { label: "Question set", value: "10 items" },
      ]}
    />
  );
}
