export type ReviewInterval = "D+1" | "D+7" | "D+21";

export type TaskStatus = "todo" | "completed";

export interface Task {
  id: string;
  title: string;
  day: number;
  week: number;
  dueDate: string;
  status: TaskStatus;
  completedAt?: string;
}

export interface ReviewCard {
  id: string;
  taskId: string;
  prompt: string;
  interval: ReviewInterval;
  dueDate: string;
  completed: boolean;
}

export interface StudySession {
  id: string;
  startedAt: string;
  taskIds: string[];
  reviewCardIds: string[];
}

export interface PlanNode {
  day: number;
  label: string;
  description: string;
}

export interface WeeklyPlan {
  week: number;
  title: string;
  objective: string;
  dayRange: [number, number];
  nodes: PlanNode[];
}

export interface LearningSnapshot {
  tasks: Task[];
  reviewCards: ReviewCard[];
  sessions: StudySession[];
  weeklyPlans: WeeklyPlan[];
}
