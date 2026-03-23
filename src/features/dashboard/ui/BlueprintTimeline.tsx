import { DASHBOARD_BLUEPRINT_LABEL } from "@/lib/constants";

import type { WeeklyPlan } from "@/features/learning/domain/learning.types";

type BlueprintTimelineProps = {
  plans: WeeklyPlan[];
};

export function BlueprintTimeline({ plans }: BlueprintTimelineProps) {
  return (
    <section className="mt-6 rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{DASHBOARD_BLUEPRINT_LABEL} 節點（Week 1-8 + Day 57-60）</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <article key={plan.week} className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold">{plan.title}</h3>
            <p className="text-sm text-slate-600">{plan.objective}</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {plan.nodes.map((node) => (
                <li key={`${plan.week}-${node.day}`}>
                  Day {node.day}：{node.label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
