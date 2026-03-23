import type { LearningRepository } from "../infrastructure/learning.repository";
import type { ReviewCard, ReviewInterval, StudySession, Task } from "../domain/learning.types";

const intervalDays: Record<ReviewInterval, number> = {
  "D+1": 1,
  "D+7": 7,
  "D+21": 21,
};

function addDaysISO(baseDate: string, days: number): string {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

export function createLearningUseCases(repository: LearningRepository) {
  return {
    createTask(input: Omit<Task, "id" | "status">) {
      return repository.createTask({ ...input, status: "todo" });
    },

    async completeTask(taskId: string) {
      const snapshot = await repository.getSnapshot();
      const target = snapshot.tasks.find((task) => task.id === taskId);
      if (!target) {
        throw new Error(`Task ${taskId} not found`);
      }

      const completedTask: Task = {
        ...target,
        status: "completed",
        completedAt: new Date().toISOString(),
      };

      await repository.updateTask(completedTask);
      const cards = this.scheduleReview(completedTask);
      await repository.addReviewCards(cards);
      return completedTask;
    },

    scheduleReview(task: Task): ReviewCard[] {
      const base = task.completedAt ?? new Date().toISOString();
      return (Object.keys(intervalDays) as ReviewInterval[]).map((interval) => ({
        id: `card-${crypto.randomUUID()}`,
        taskId: task.id,
        prompt: `複習任務：${task.title}`,
        interval,
        dueDate: addDaysISO(base, intervalDays[interval]),
        completed: false,
      }));
    },

    startSession(input: Omit<StudySession, "id" | "startedAt">) {
      return repository.createSession({
        ...input,
        startedAt: new Date().toISOString(),
      });
    },
  };
}
