import { COURSES, QUIZ, QUIZ_RESULT } from "@/lib/constants";

export function buildCourseLessonRoute(weekId: string, lessonId: string) {
  return `${COURSES}/${weekId}/${lessonId}`;
}

export function buildQuizRoute(weekId: string, lessonId: string) {
  return `${QUIZ}/${weekId}/${lessonId}`;
}

export function buildQuizResultRoute(weekId: string, lessonId: string) {
  return `${QUIZ_RESULT}/${weekId}/${lessonId}`;
}
