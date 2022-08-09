import { HollandQuizQuestion } from './holland-quiz-question';

export interface HollandQuizCollection {
  type: string;
  questions: HollandQuizQuestion[];
}
