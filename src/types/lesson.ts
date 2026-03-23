export type LessonStatus = "locked" | "ready" | "completed";

export interface Lesson {
  id: string;
  weekId: string;
  lessonId: string;
  courseId: string;
  title: string;
  summary: string;
  durationMinutes: number;
  status: LessonStatus;
  learningGoals: string[];
}
