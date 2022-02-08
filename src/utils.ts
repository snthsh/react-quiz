import _ from 'lodash';

type Question = {
  number: number;
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: string[];
  feedback: string;
};

export const sortArray = (questions: Question[]): Question[] => {
  return _.sortBy(questions, (question) => question.order);
};

export const capitalize = (str: string): string => {
  return str.toUpperCase();
};
