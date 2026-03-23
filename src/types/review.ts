export type WrongAnswerStatus = "needs-review" | "reviewing" | "mastered";

export interface WrongAnswerReview {
  id: string;
  userId: string;
  weekId: string;
  lessonId: string;
  quizHistoryId: string;
  questionId: string;
  note: string;
  nextReviewAt: string;
  status: WrongAnswerStatus;
}
