import { isSameDay } from "@/lib/utils";

import type { LearningSnapshot } from "@/features/learning/domain/learning.types";

import type { DashboardOverviewData } from "./types";

export function getDashboardOverviewData(snapshot: LearningSnapshot, today = new Date()): DashboardOverviewData {
  const todayTasks = snapshot.tasks.filter((task) => isSameDay(new Date(task.dueDate), today));
  const dueReviewCards = snapshot.reviewCards.filter(
    (card) => !card.completed && new Date(card.dueDate).getTime() <= today.getTime(),
  );

  const currentWeekPlan = snapshot.weeklyPlans[0];
  const weekTasks = snapshot.tasks.filter((task) => task.week === currentWeekPlan.week);
  const completedCount = weekTasks.filter((task) => task.status === "completed").length;

  return {
    currentWeekPlan,
    todayTasks,
    dueReviewCards,
    completedCount,
    weekTasksCount: weekTasks.length,
    weeklyPlans: snapshot.weeklyPlans,
  };
}
