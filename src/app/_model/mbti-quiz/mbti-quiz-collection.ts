import { MbtiQuizQuestion, MbtiPostQuizQuestion } from './mbti-quiz-question';

export class MbtiQuizCollection {
  id: number = 0;
  type: string = '';
  questions: MbtiQuizQuestion[] = [];
}

export class MbtiPostQuizCollection {
  testId: number = 0;
  questions: MbtiPostQuizQuestion[] = [];
}
