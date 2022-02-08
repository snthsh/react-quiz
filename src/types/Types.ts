export type Screen = 'HOME' | 'QUESTION' | 'SCORE';

export type QuizData = {
  activities: Activity[];
  heading: string;
  name: string;
};

export type Question = {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: string[];
  feedback: string;
};

export type Activity = {
  activity_name: string;
  order: number;
  questions: Question[];
};

export type AnswerObject = {
  number: number;
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
};
