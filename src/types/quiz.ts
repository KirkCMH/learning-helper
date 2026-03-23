export type QuizQuestionType = "single-choice" | "multiple-choice" | "true-false";

export interface QuizOption {
  id: string;
  label: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  weekId: string;
  lessonId: string;
  prompt: string;
  type: QuizQuestionType;
  options: QuizOption[];
  correctOptionIds: string[];
  explanation: string;
}

export interface Quiz {
  id: string;
  weekId: string;
  lessonId: string;
  title: string;
  passingScore: number;
  questionIds: string[];
  questions: QuizQuestion[];
}
