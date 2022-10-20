export interface Test {
  id: number;
  creatorId: string;
  quizTypeId: number;
  quizName: string;
  totalQuestion: number;
  createdDate: Date;
  status: boolean;
  description: string;
  shortDescription: string;
  creator: string;
  quizType: number;
  attempts: any;
  questions: any;
}
