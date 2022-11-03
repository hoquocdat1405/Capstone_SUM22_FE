export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  universityId: string;
  userName: string;
  roleId: string;
  passwordHash: string;
  passwordSalt: string;
  gender: string;
  dateOfBirth: Date;
  age: number;
  phone: string;
  signUpDate: Date;
  credentialId: null;
  avatarUrl: string;
  email: string;
  status: string;
  addressNumber: string;
  credentialFrontImgUrl: string;
  credentialBackImgUrl: string;
  university: string;
  academicProfiles: [];
  applications: [];
  attempts: [];
  fqas: [];
  savedUnis: [];
  tests: [];
}

export interface ProfileUpdateModel {
  userName: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  phone: string;
  credentialId: string; //CMND
  avatarUrl: string;
  addressNumber: string; //
  credentialFrontImgUrl: string; //chua co
  credentialBackImgUrl: string; //chua co
}
