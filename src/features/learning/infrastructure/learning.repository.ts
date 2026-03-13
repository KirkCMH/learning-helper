import type { LearningSnapshot, ReviewCard, StudySession, Task, WeeklyPlan } from "../domain/learning.types";

export interface LearningRepository {
  createTask(input: Omit<Task, "id">): Promise<Task>;
  updateTask(task: Task): Promise<Task>;
  addReviewCards(cards: ReviewCard[]): Promise<void>;
  createSession(input: Omit<StudySession, "id">): Promise<StudySession>;
  getSnapshot(): Promise<LearningSnapshot>;
  saveWeeklyPlans(plans: WeeklyPlan[]): Promise<void>;
}
