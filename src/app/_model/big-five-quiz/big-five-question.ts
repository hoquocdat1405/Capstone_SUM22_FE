import {
  BigFiveQuizOptionModel,
  BigFivePostQuizOption,
} from './big-five-option';

export interface BigFiveQuizQuestionModel {
  index: number;
  id: string;
  questionContent: string;
  value: string;
  options: BigFiveQuizOptionModel[];
}

export interface BigFivePostQuizQuestion {
  questionId: number;
  questionValue: string;
  options: BigFivePostQuizOption[];
}
