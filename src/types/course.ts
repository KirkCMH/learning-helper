export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  totalWeeks: number;
}

export interface WeeklyPlan {
  id: string;
  courseId: string;
  weekId: string;
  weekNumber: number;
  title: string;
  objective: string;
  lessonIds: string[];
  quizId: string;
  estimatedMinutes: number;
}
