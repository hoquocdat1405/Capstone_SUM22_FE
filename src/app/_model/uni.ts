export interface University {
  id: string;
  uniName: string;
  uniCode: string;
  addressNumber: string;
  phone: string;
  websiteUrl: string;
  avatarUrl: string;
  coverPhotoUrl: string;
  vippack: string;
  status: string;
  wardId: string;
  uniShortName: string;
  description: string;
}

export interface UniSpec {
  id: number;
  uniId: string;
  specId: string;
  uniSpecName: string;
  status: string;
  specCode: string;
  spec: string;
  uni: string;
  addmissionNews: [];
  applications: [];
}

export interface UniDetail {
  id: string;
  uniName: string;
  addressNumber: string;
  phone: string;
  email: string;
  websiteUrl: string;
  avatarUrl: string;
  coverPhotoUrl: string;
  createdDate: Date;
  vippack: string;
  status: string;
  uniCode: string;
  description: string;
  countSaved: string;
  wardId: number;
  ward: string;
  addmissionCampaigns: [];
  applications: [];
  fqas: [];
  savedUnis: [];
  universitySpecializations: [];
  users: [];
}

export interface InterestedUni {
  id: string;
  img: string;
  name: string;
}
