import { PlaceholderPage } from "@/features/learning/ui/PlaceholderPage";

type QuizResultPageProps = {
  params: Promise<{
    weekId: string;
    lessonId: string;
  }>;
};

export default async function QuizResultPage({ params }: QuizResultPageProps) {
  const { weekId, lessonId } = await params;

  return (
    <PlaceholderPage
      title="Quiz Result"
      description="呈現該 lesson 測驗結果、正答率與建議複習重點。"
      currentPath={`/quiz-result/${weekId}/${lessonId}`}
      highlights={[
        { label: "Week", value: weekId },
        { label: "Lesson", value: lessonId },
        { label: "Best score", value: "85%" },
      ]}
    />
  );
}
