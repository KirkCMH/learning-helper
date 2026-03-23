import type { Course, WeeklyPlan } from "@/types";

export const mockCourses: Course[] = [
  {
    id: "course-fullstack-foundations",
    slug: "fullstack-foundations",
    title: "Fullstack Foundations",
    description: "循序建立前端、後端與資料建模的實戰基礎。",
    totalWeeks: 2,
  },
];

export const mockWeeklyPlans: WeeklyPlan[] = [
  {
    id: "plan-week-01",
    courseId: "course-fullstack-foundations",
    weekId: "week-01",
    weekNumber: 1,
    title: "TypeScript 基礎與型別建模",
    objective: "掌握基本型別、介面與資料關聯設計。",
    lessonIds: ["lesson-01", "lesson-02"],
    quizId: "quiz-week-01-lesson-02",
    estimatedMinutes: 180,
  },
  {
    id: "plan-week-02",
    courseId: "course-fullstack-foundations",
    weekId: "week-02",
    weekNumber: 2,
    title: "資料流與 UI 狀態管理",
    objective: "理解元件資料傳遞與可測試狀態拆分。",
    lessonIds: ["lesson-03", "lesson-04"],
    quizId: "quiz-week-02-lesson-04",
    estimatedMinutes: 210,
  },
];
