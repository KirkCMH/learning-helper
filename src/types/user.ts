export interface User {
  id: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  enrolledCourseIds: string[];
  currentWeekId: string;
  targetStudyDaysPerWeek: number;
}
