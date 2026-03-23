import { sixtyDayBlueprint } from "../domain/learning.seed";
import type { LearningSnapshot, ReviewCard, StudySession, Task, WeeklyPlan } from "../domain/learning.types";
import type { LearningRepository } from "./learning.repository";

function isoDateWithOffset(daysOffset: number): string {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + daysOffset);
  return date.toISOString();
}

const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Day 1: 定義 60 天學習目標",
    day: 1,
    week: 1,
    dueDate: isoDateWithOffset(0),
    status: "todo",
  },
  {
    id: "task-2",
    title: "Day 1: 建立第一版知識地圖",
    day: 1,
    week: 1,
    dueDate: isoDateWithOffset(0),
    status: "todo",
  },
  {
    id: "task-3",
    title: "Day 2: 完成 20 分鐘刻意練習",
    day: 2,
    week: 1,
    dueDate: isoDateWithOffset(1),
    status: "todo",
  },
];

const initialReviewCards: ReviewCard[] = [
  {
    id: "card-1",
    taskId: "task-0",
    prompt: "回想 Week1 的三個關鍵產出是什麼？",
    interval: "D+7",
    dueDate: isoDateWithOffset(0),
    completed: false,
  },
  {
    id: "card-2",
    taskId: "task-0",
    prompt: "你目前最大的學習阻礙是什麼，如何拆解？",
    interval: "D+21",
    dueDate: isoDateWithOffset(0),
    completed: false,
  },
];

class InMemoryLearningRepository implements LearningRepository {
  private tasks = [...initialTasks];

  private reviewCards = [...initialReviewCards];

  private sessions: StudySession[] = [];

  private weeklyPlans = [...sixtyDayBlueprint];

  async createTask(input: Omit<Task, "id">): Promise<Task> {
    const task: Task = { ...input, id: `task-${crypto.randomUUID()}` };
    this.tasks.push(task);
    return task;
  }

  async updateTask(task: Task): Promise<Task> {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
    return task;
  }

  async addReviewCards(cards: ReviewCard[]): Promise<void> {
    this.reviewCards.push(...cards);
  }

  async createSession(input: Omit<StudySession, "id">): Promise<StudySession> {
    const session: StudySession = { ...input, id: `session-${crypto.randomUUID()}` };
    this.sessions.push(session);
    return session;
  }

  async getSnapshot(): Promise<LearningSnapshot> {
    return {
      tasks: [...this.tasks],
      reviewCards: [...this.reviewCards],
      sessions: [...this.sessions],
      weeklyPlans: [...this.weeklyPlans],
    };
  }

  async saveWeeklyPlans(plans: WeeklyPlan[]): Promise<void> {
    this.weeklyPlans = [...plans];
  }
}

export const inMemoryLearningRepository = new InMemoryLearningRepository();
