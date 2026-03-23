import type { WrongAnswerReview } from "@/types";

export const mockWrongAnswers: WrongAnswerReview[] = [
  {
    id: "wrong-answer-01",
    userId: "user-ada",
    weekId: "week-01",
    lessonId: "lesson-02",
    quizHistoryId: "history-01",
    questionId: "question-02",
    note: "忘記在 lesson 與 quiz 間保留共享的 weekId 與 lessonId。",
    nextReviewAt: "2026-03-24T09:00:00.000Z",
    status: "needs-review",
  },
  {
    id: "wrong-answer-02",
    userId: "user-brian",
    weekId: "week-02",
    lessonId: "lesson-04",
    quizHistoryId: "history-03",
    questionId: "question-03",
    note: "混淆了錯題紀錄與週計畫資料模型，需要重新辨識 review 型別。",
    nextReviewAt: "2026-03-25T08:30:00.000Z",
    status: "reviewing",
  },
];
