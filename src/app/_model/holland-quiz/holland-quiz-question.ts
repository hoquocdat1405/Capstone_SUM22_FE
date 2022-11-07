import {
  HollandPostQuizOption,
  HollandQuizOption,
  HollandQuizOptionModel,
} from './holland-quiz-option';

export interface HollandQuizQuestion {
  id: string;
  text: string;
  type: string;
  options: HollandQuizOption[];
}

export interface HollandQuizQuestionModel {
  index: number;
  id: string;
  questionContent: string;
  value: string;
  options: HollandQuizOptionModel[];
}

export interface HollandPostQuizQuestion {
  questionId: number;
  questionValue: string;
  options: HollandPostQuizOption[];
}
