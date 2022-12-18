import { MajorModel } from './../major/major-model';
export interface JobModel {
  id: number;
  jobName: string;
  description: string;
  imageUrl: string
}

export interface JobMajorModel {
  id: number;
  jobName: string;
  description: string;
  imageUrl: string;
  majorList: MajorModel[]
}

export interface MyJobModel {
  id: number;
  jobName: string;
  description: string;
  imageUrl: string;
  majors: MyMajor[]
}

export interface MyMajor {
  id: string;
  majorName: string;
  description: string;
  majorCode: string;
}

export interface CharacterJobMajor {
  id: string;
  resultName: string;
  resultSummary: string;
  resultRelationship: string;
  resultSuccessRule: string;
  resultShortName: string;
  resultPictureUrl: string;
  resultCareer: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
  result5: string;
  result6: string;
  jobs: MyJobModel[];
}