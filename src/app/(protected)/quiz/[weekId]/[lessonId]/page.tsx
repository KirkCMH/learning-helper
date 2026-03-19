import { requireAuthenticated } from "@/features/auth/application/auth.session";
import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";

type QuizPageProps = {
  params: Promise<{
    weekId: string;
    lessonId: string;
  }>;
};

export default async function QuizPage({ params }: QuizPageProps) {
  const { weekId, lessonId } = await params;
  await requireAuthenticated(`/quiz/${weekId}/${lessonId}`);

  return (
    <PlaceholderPage
      title="Quiz"
      description="測驗作答流程、答題狀態與提交入口。"
      currentPath={`/quiz/${weekId}/${lessonId}`}
      highlights={[
        { label: "Week", value: weekId },
        { label: "Lesson", value: lessonId },
        { label: "Question set", value: "10 items" },
      ]}
    />
  );
}
