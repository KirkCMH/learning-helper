import type { LearningSnapshot, ReviewCard, StudySession, Task, WeeklyPlan } from "../domain/learning.types";
import type { LearningRepository } from "./learning.repository";

export class SupabaseLearningRepository implements LearningRepository {
  async createTask(input: Omit<Task, "id">): Promise<Task> {
    void input;
    throw new Error("SupabaseLearningRepository.createTask is not implemented yet.");
  }

  async updateTask(task: Task): Promise<Task> {
    void task;
    throw new Error("SupabaseLearningRepository.updateTask is not implemented yet.");
  }

  async addReviewCards(cards: ReviewCard[]): Promise<void> {
    void cards;
    throw new Error("SupabaseLearningRepository.addReviewCards is not implemented yet.");
  }

  async createSession(input: Omit<StudySession, "id">): Promise<StudySession> {
    void input;
    throw new Error("SupabaseLearningRepository.createSession is not implemented yet.");
  }

  async getSnapshot(): Promise<LearningSnapshot> {
    throw new Error("SupabaseLearningRepository.getSnapshot is not implemented yet.");
  }

  async saveWeeklyPlans(plans: WeeklyPlan[]): Promise<void> {
    void plans;
    throw new Error("SupabaseLearningRepository.saveWeeklyPlans is not implemented yet.");
  }
}
