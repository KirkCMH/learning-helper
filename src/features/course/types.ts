export type CourseStatus = "planned" | "in-progress" | "completed";

export interface CourseOutlineItem {
  id: string;
  title: string;
  summary: string;
  status: CourseStatus;
}
