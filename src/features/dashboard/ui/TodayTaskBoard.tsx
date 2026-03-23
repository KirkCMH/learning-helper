import { SectionCard } from "@/components/ui";

import type { Task } from "@/features/learning/domain/learning.types";

type TodayTaskBoardProps = {
  tasks: Task[];
};

export function TodayTaskBoard({ tasks }: TodayTaskBoardProps) {
  return (
    <SectionCard title="今日任務" className="md:col-span-1">
      <ul className="mt-3 space-y-2 text-sm">
        {tasks.map((task) => (
          <li key={task.id} className="rounded-md bg-slate-100 px-3 py-2">
            {task.title}
          </li>
        ))}
        {tasks.length === 0 && <li className="text-slate-500">今天沒有安排任務</li>}
      </ul>
    </SectionCard>
  );
}
