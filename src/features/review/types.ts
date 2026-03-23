export type ReviewQueueStatus = "ready" | "scheduled" | "done";

export interface ReviewQueueItem {
  id: string;
  prompt: string;
  status: ReviewQueueStatus;
}
