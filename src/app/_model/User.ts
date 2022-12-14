export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Profile {
  userName: string,
  gender: string,
  dateOfBirth: Date,
  age: number,
  phone: string,
  credentialId: string,
  avatarUrl: string,
  email: string,
  status: string,
  addressNumber: string,
  credentialFrontImgUrl: string,
  credentialBackImgUrl: string,
  highSchoolName: string,
  wardId: number,
  provinceId: number,
  districtId: number,
  publicProfile: string
}

export interface ProfileUpdateModel {
  userName: string;
  gender: string;
  dateOfBirth: Date;
  age: number;
  phone: string;
  credentialId: string; //CMND
  avatarUrl: string;
  addressNumber: string; //
  credentialFrontImgUrl: string; //chua co
  credentialBackImgUrl: string; //chua co
  wardId: number
}
