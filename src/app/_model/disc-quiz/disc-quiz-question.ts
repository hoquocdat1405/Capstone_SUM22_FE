import { DiscPostQuizOption, DiscQuizOptionModel } from './disc-quiz-option';

export interface DiscQuizQuestionModel {
  index: number;
  id: string;
  questionContent: string;
  value: string;
  options: DiscQuizOptionModel[];
}

export interface DiscPostQuizQuestion {
  questionId: number;
  questionValue: string;
  options: DiscPostQuizOption[];
}
