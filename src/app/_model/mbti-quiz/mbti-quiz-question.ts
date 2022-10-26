import { MbtiQuizOption, MbtiPostQuizOption } from './mbti-quiz-option';

export interface MbtiQuizQuestion {
  id: string;
  text: string;
  value: string;
  options: MbtiQuizOption[];
}

export interface MbtiPostQuizQuestion {
  id: number;
  value: string;
  options: MbtiPostQuizOption[];
}
