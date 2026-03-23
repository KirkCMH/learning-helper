import { SectionCard } from "@/components/ui";

import type { WeeklyPlan } from "@/features/learning/domain/learning.types";

type WeeklyProgressPanelProps = {
  plan: WeeklyPlan;
  completedCount: number;
  taskCount: number;
};

export function WeeklyProgressPanel({ plan, completedCount, taskCount }: WeeklyProgressPanelProps) {
  const progress = taskCount === 0 ? 0 : (completedCount / taskCount) * 100;

  return (
    <SectionCard title="本週進度" className="md:col-span-1">
      <p className="mt-3 text-sm text-slate-700">{plan.title}</p>
      <p className="mt-1 text-sm text-slate-700">
        完成 {completedCount} / {taskCount} 任務
      </p>
      <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
        <div className="h-3 rounded-full bg-emerald-500" style={{ width: `${progress}%` }} />
      </div>
    </SectionCard>
  );
}
