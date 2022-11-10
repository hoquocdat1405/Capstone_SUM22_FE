import {
  DiscQuizQuestionModel,
  DiscPostQuizQuestion,
} from './disc-quiz-question';

export interface DiscQuizCollectionModel {
  id: string;
  quizName: string;
  bannerUrl: string;
  questions: DiscQuizQuestionModel[];
}

export interface DiscPostQuizCollection {
  testId: number;
  questions: DiscPostQuizQuestion[];
}
