import { FeaturePageShell } from "@/components/layout";

import type { DashboardOverviewData } from "../types";
import { BlueprintTimeline } from "./BlueprintTimeline";
import { DueReviewCardsPanel } from "./DueReviewCardsPanel";
import { TodayTaskBoard } from "./TodayTaskBoard";
import { WeeklyProgressPanel } from "./WeeklyProgressPanel";

type DashboardOverviewProps = {
  data: DashboardOverviewData;
};

export function DashboardOverview({ data }: DashboardOverviewProps) {
  return (
    <FeaturePageShell title="Learning Dashboard" description="60 天藍圖：今日任務、到期複習與本週進度。">
      <section className="grid gap-6 md:grid-cols-3">
        <TodayTaskBoard tasks={data.todayTasks} />
        <DueReviewCardsPanel cards={data.dueReviewCards} />
        <WeeklyProgressPanel
          plan={data.currentWeekPlan}
          completedCount={data.completedCount}
          taskCount={data.weekTasksCount}
        />
      </section>

      <BlueprintTimeline plans={data.weeklyPlans} />
    </FeaturePageShell>
  );
}
