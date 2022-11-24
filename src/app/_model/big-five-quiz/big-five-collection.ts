import {
  BigFivePostQuizQuestion,
  BigFiveQuizQuestionModel,
} from './big-five-question';

export interface BigFiveQuizCollectionModel {
  id: string;
  quizName: string;
  bannerUrl: string;
  questions: BigFiveQuizQuestionModel[];
}

export interface BigFivePostQuizCollection {
  testId: number;
  questions: BigFivePostQuizQuestion[];
}
