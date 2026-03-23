import type { Quiz } from "@/types";

export const mockQuizzes: Quiz[] = [
  {
    id: "quiz-week-01-lesson-02",
    weekId: "week-01",
    lessonId: "lesson-02",
    title: "Week 1 Lesson 2 Checkpoint",
    passingScore: 80,
    questionIds: ["question-01", "question-02"],
    questions: [
      {
        id: "question-01",
        weekId: "week-01",
        lessonId: "lesson-02",
        prompt: "哪種設計最適合描述可重用的使用者資料結構？",
        type: "single-choice",
        options: [
          { id: "q1-a", label: "A", text: "使用 interface 宣告欄位" },
          { id: "q1-b", label: "B", text: "所有資料都使用 any" },
          { id: "q1-c", label: "C", text: "改用未命名陣列" },
        ],
        correctOptionIds: ["q1-a"],
        explanation: "interface 能讓欄位結構清楚且便於重用。",
      },
      {
        id: "question-02",
        weekId: "week-01",
        lessonId: "lesson-02",
        prompt: "lesson 與 quiz 要能串接時，最重要的欄位是什麼？",
        type: "single-choice",
        options: [
          { id: "q2-a", label: "A", text: "同一個背景色" },
          { id: "q2-b", label: "B", text: "共享 weekId 與 lessonId" },
          { id: "q2-c", label: "C", text: "固定排序名稱" },
        ],
        correctOptionIds: ["q2-b"],
        explanation: "共享識別欄位才能在資料層與 UI 層建立穩定關聯。",
      },
    ],
  },
  {
    id: "quiz-week-02-lesson-04",
    weekId: "week-02",
    lessonId: "lesson-04",
    title: "Week 2 Lesson 4 Checkpoint",
    passingScore: 80,
    questionIds: ["question-03", "question-04"],
    questions: [
      {
        id: "question-03",
        weekId: "week-02",
        lessonId: "lesson-04",
        prompt: "哪一筆資料最適合記錄單一錯題的複習狀態？",
        type: "single-choice",
        options: [
          { id: "q3-a", label: "A", text: "WrongAnswerReview" },
          { id: "q3-b", label: "B", text: "WeeklyPlan" },
          { id: "q3-c", label: "C", text: "Course" },
        ],
        correctOptionIds: ["q3-a"],
        explanation: "WrongAnswerReview 能對應 userId、lessonId 與 questionId。",
      },
      {
        id: "question-04",
        weekId: "week-02",
        lessonId: "lesson-04",
        prompt: "哪一種欄位組合最能追蹤單次測驗結果？",
        type: "multiple-choice",
        options: [
          { id: "q4-a", label: "A", text: "userId" },
          { id: "q4-b", label: "B", text: "quizId" },
          { id: "q4-c", label: "C", text: "submittedAt" },
          { id: "q4-d", label: "D", text: "themeColor" },
        ],
        correctOptionIds: ["q4-a", "q4-b", "q4-c"],
        explanation: "使用者、測驗與提交時間共同描述一次作答紀錄。",
      },
    ],
  },
];
