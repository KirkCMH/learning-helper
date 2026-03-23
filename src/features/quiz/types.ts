export type QuizResultStatus = "pending" | "passed" | "needs-review";

export interface QuizSummary {
  id: string;
  title: string;
  questionCount: number;
  status: QuizResultStatus;
}
