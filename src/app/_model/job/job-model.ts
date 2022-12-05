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