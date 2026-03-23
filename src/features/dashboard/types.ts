import type { LearningSnapshot, ReviewCard, Task, WeeklyPlan } from "@/features/learning/domain/learning.types";

export interface DashboardOverviewData {
  currentWeekPlan: WeeklyPlan;
  todayTasks: Task[];
  dueReviewCards: ReviewCard[];
  completedCount: number;
  weekTasksCount: number;
  weeklyPlans: LearningSnapshot["weeklyPlans"];
}
