export interface QuizQuestionResult {
  questionId: string;
  selectedOptionIds: string[];
  isCorrect: boolean;
}

export interface QuizHistory {
  id: string;
  userId: string;
  weekId: string;
  lessonId: string;
  quizId: string;
  score: number;
  submittedAt: string;
  questionResults: QuizQuestionResult[];
}
