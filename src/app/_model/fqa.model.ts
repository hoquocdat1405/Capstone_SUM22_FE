export interface Fqa {
  id: number;
  userId: string;
  uniId: string;
  fqacontent: string;
  fqaanswer: string;
  createdDate: Date;
  status: string;
  topicId: number;
}

export interface FqaTopic {
  id: number;
  topicName: string;
  status: string;
}

export interface FqaListModel {
  id: number;
  topicName: string;
  status: string;
  fqas: Fqa[];
}
