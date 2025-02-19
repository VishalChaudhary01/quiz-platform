declare type QuestionType = "multiple-choice" | "integer";

declare interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string;
}

declare interface Attempt {
  date: string;
  score: number;
  totalQuestions: number;
}

interface QuizResultProps {
  score: number;
  attempts: Attempt[];
  restartQuiz: () => void;
}