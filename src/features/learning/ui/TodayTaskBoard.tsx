"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "today-task-status";

interface TodayTask {
  id: string;
  title: string;
  done: boolean;
}

const seededTasks: TodayTask[] = [
  { id: "today-1", title: "閱讀 20 分鐘：主題核心章節", done: false },
  { id: "today-2", title: "完成 1 次重點筆記整理", done: false },
  { id: "today-3", title: "複習 D+1 卡片並自我測驗", done: false },
];

export function TodayTaskBoard() {
  const [tasks, setTasks] = useState<TodayTask[]>(seededTasks);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      setTasks((prev) => prev.map((task) => ({ ...task, done: Boolean(parsed[task.id]) })));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  function toggleTask(taskId: string) {
    setTasks((current) => {
      const next = current.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task));
      const statusMap = Object.fromEntries(next.map((task) => [task.id, task.done]));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(statusMap));
      return next;
    });
  }

  const completedCount = useMemo(() => tasks.filter((task) => task.done).length, [tasks]);

  return (
    <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">今日任務清單</h2>
        <p className="mt-1 text-sm text-slate-600">點擊任務可切換完成狀態，進度會即時更新。</p>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => toggleTask(task.id)}
              className="flex w-full items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-left hover:bg-slate-50"
            >
              <span className={task.done ? "text-slate-400 line-through" : "text-slate-800"}>{task.title}</span>
              <span
                className={
                  task.done
                    ? "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700"
                    : "rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                }
              >
                {task.done ? "Done" : "Todo"}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">{completedCount} / {tasks.length} completed</div>
    </section>
  );
}
