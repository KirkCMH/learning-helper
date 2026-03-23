import type { User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "user-ada",
    displayName: "Ada Lin",
    email: "ada.lin@example.com",
    avatarUrl: "https://example.com/avatars/ada.png",
    enrolledCourseIds: ["course-fullstack-foundations"],
    currentWeekId: "week-01",
    targetStudyDaysPerWeek: 5,
  },
  {
    id: "user-brian",
    displayName: "Brian Chen",
    email: "brian.chen@example.com",
    avatarUrl: "https://example.com/avatars/brian.png",
    enrolledCourseIds: ["course-fullstack-foundations"],
    currentWeekId: "week-02",
    targetStudyDaysPerWeek: 4,
  },
];
