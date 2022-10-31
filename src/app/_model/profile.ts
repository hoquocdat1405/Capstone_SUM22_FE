export interface ProfileModel {
  id: string;
  universityId: string;
  userName: string;
  roleId: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  phone: string;
  signUpDate: string;
  credentialId: string;
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
