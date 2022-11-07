import {
  HollandPostQuizQuestion,
  HollandQuizQuestion,
  HollandQuizQuestionModel,
} from './holland-quiz-question';

export interface HollandQuizCollectionModel {
  id: string;
  quizName: string;
  bannerUrl: string;
  questions: HollandQuizQuestionModel[];
}

export class HollandPostQuizCollection {
  testId: number = 0;
  questions: HollandPostQuizQuestion[] = [];
}
