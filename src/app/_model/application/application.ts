export interface Application {
  userId: string;
  uniId: string;
  uniSpecId: number;
}

export interface ApplicationDetail {
  applicationId: string;
  credentialFrontImgUrl: string;
  credentialBackImgUrl: string;
  highSchoolCode: string;
  highSchoolName: string;
  highSchoolAddress: string;
  graduationYear: number;
  avarageScore: number;
  academicRank: string;
  schoolReport1Url: string;
  schoolReport2Url: string;
  schoolReport3Url: string;
  schoolReport4Url: string;
}

export interface ApplicationModel {
  userId: string;
  uniId: string;
  uniSpecId: number;
  applyDate: string;
  status: string;
  id: string;
  uniSpecName: string;
  userName: number;
  gender: string;
  age: string;
  phone: string;
  avatarUrl: string;
  email: string;
  addressNumber: string;
  uniName: string;
}

export interface ApplicationDetailModel {
  id: string;
  uniId: string;
  uniSpecId: number;
  userId: string;
  dateOfBirth: Date;
  credentialId: string;
  uniSpecName: string;
  specCode: string;
  userName: string;
  gender: string;
  age: number;
  phone: string;
  avatarUrl: string;
  email: string;
  addressNumber: string;
  credentialFrontImgUrl: string;
  credentialBackImgUrl: string;
  highSchoolCode: string;
  highSchoolName: string;
  highSchoolAddress: string;
  graduationYear: string;
  avarageScore: string;
  academicRank: string;
  schoolReport1Url: string;
  schoolReport2Url: string;
  schoolReport3Url: string;
  schoolReport4Url: string;
}
