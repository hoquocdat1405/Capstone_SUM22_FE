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
  backgroundUrl:string;
  history: string;
  criteriaInformation: string;
  shortDescription: string;
  creator: string;
  testType: number;
  attempts: any;
  questions: any;
}
