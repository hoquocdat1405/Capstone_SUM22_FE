import { MbtiQuizOption, MbtiPostQuizOption } from './mbti-quiz-option';

export interface MbtiQuizQuestion {
  index: number;
  id: string;
  text: string;
  value: string;
  options: MbtiQuizOption[];
}

export interface MbtiPostQuizQuestion {
  questionId: number;
  questionvalue: string;
  options: MbtiPostQuizOption[];
}
