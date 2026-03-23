import type { QuizHistory } from "@/types";

export const mockQuizHistory: QuizHistory[] = [
  {
    id: "history-01",
    userId: "user-ada",
    weekId: "week-01",
    lessonId: "lesson-02",
    quizId: "quiz-week-01-lesson-02",
    score: 50,
    submittedAt: "2026-03-18T09:30:00.000Z",
    questionResults: [
      {
        questionId: "question-01",
        selectedOptionIds: ["q1-a"],
        isCorrect: true,
      },
      {
        questionId: "question-02",
        selectedOptionIds: ["q2-a"],
        isCorrect: false,
      },
    ],
  },
  {
    id: "history-02",
    userId: "user-brian",
    weekId: "week-02",
    lessonId: "lesson-04",
    quizId: "quiz-week-02-lesson-04",
    score: 100,
    submittedAt: "2026-03-20T14:10:00.000Z",
    questionResults: [
      {
        questionId: "question-03",
        selectedOptionIds: ["q3-a"],
        isCorrect: true,
      },
      {
        questionId: "question-04",
        selectedOptionIds: ["q4-a", "q4-b", "q4-c"],
        isCorrect: true,
      },
    ],
  },
  {
    id: "history-03",
    userId: "user-brian",
    weekId: "week-02",
    lessonId: "lesson-04",
    quizId: "quiz-week-02-lesson-04",
    score: 50,
    submittedAt: "2026-03-22T08:45:00.000Z",
    questionResults: [
      {
        questionId: "question-03",
        selectedOptionIds: ["q3-b"],
        isCorrect: false,
      },
      {
        questionId: "question-04",
        selectedOptionIds: ["q4-a", "q4-b", "q4-c"],
        isCorrect: true,
      },
    ],
  },
];
