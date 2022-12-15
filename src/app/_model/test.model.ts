export interface Test {
  id: number;
  creatorId: string;
  testTypeId: number;
  testName: string;
  totalQuestion: number;
  createdDate: Date;
  status: boolean;
  introduction: string;
  bannerUrl: string;
  backgroundUrl: string;
  history: string;
  criteriaInformation: string;
  shortDescription: string;
  creator: string;
  testType: number;
  attempts: any;
  questions: any;
}

export interface TestDetail {
  id: number;
  testTypeId: number;
  testName: string;
  bannerUrl: string;
  backgroundUrl: string;
  totalQuestion: number;
  introduction: string;
  criteriaInformation: string;
  history: string;
}

export interface TestModel {
  id: number;
  testId: number;
  testName: string;
  attemptDate: string;
  resultShortName: string;
  resultName: number;
}
