import { inMemoryLearningRepository } from "@/features/learning/infrastructure/in-memory.learning.repository";
import { ProtectedShell } from "@/features/learning/ui/ProtectedShell";

function isSameDay(date: Date, reference: Date): boolean {
  return (
    date.getFullYear() === reference.getFullYear() &&
    date.getMonth() === reference.getMonth() &&
    date.getDate() === reference.getDate()
  );
}

export default async function DashboardPage() {
  const snapshot = await inMemoryLearningRepository.getSnapshot();
  const today = new Date();

  const todayTasks = snapshot.tasks.filter((task) => isSameDay(new Date(task.dueDate), today));
  const dueReviewCards = snapshot.reviewCards.filter(
    (card) => !card.completed && new Date(card.dueDate).getTime() <= today.getTime(),
  );

  const currentWeekPlan = snapshot.weeklyPlans[0];
  const weekTasks = snapshot.tasks.filter((task) => task.week === currentWeekPlan.week);
  const completedCount = weekTasks.filter((task) => task.status === "completed").length;

  return (
    <ProtectedShell
      title="Learning Dashboard"
      description="60 天藍圖：今日任務、到期複習與本週進度。"
    >
      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl bg-white p-5 shadow-sm md:col-span-1">
          <h2 className="text-lg font-semibold">今日任務</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {todayTasks.map((task) => (
              <li key={task.id} className="rounded-md bg-slate-100 px-3 py-2">
                {task.title}
              </li>
            ))}
            {todayTasks.length === 0 && <li className="text-slate-500">今天沒有安排任務</li>}
          </ul>
        </article>

        <article className="rounded-xl bg-white p-5 shadow-sm md:col-span-1">
          <h2 className="text-lg font-semibold">到期複習卡</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {dueReviewCards.map((card) => (
              <li key={card.id} className="rounded-md bg-indigo-50 px-3 py-2">
                {card.prompt}
              </li>
            ))}
            {dueReviewCards.length === 0 && <li className="text-slate-500">目前沒有到期複習卡</li>}
          </ul>
        </article>

        <article className="rounded-xl bg-white p-5 shadow-sm md:col-span-1">
          <h2 className="text-lg font-semibold">本週進度</h2>
          <p className="mt-3 text-sm text-slate-700">{currentWeekPlan.title}</p>
          <p className="mt-1 text-sm text-slate-700">
            完成 {completedCount} / {weekTasks.length} 任務
          </p>
          <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
            <div
              className="h-3 rounded-full bg-emerald-500"
              style={{ width: `${weekTasks.length === 0 ? 0 : (completedCount / weekTasks.length) * 100}%` }}
            />
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">60 天藍圖節點（Week 1-8 + Day 57-60）</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {snapshot.weeklyPlans.map((plan) => (
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
    </ProtectedShell>
  );
}
