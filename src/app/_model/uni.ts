export interface University {
    id: string,
    uniName: string,
    addressNumber: string,
    phone: string,
    websiteUrl: string,
    avatarUrl: string,
    coverPhotoUrl: string,
    vippack: string,
    status: string,
    wardId: string,
    uniShortName: string
}

export interface UniSpec {
    id: number,
    uniId: string,
    specId: string,
    uniSpecName: string,
    status: string,
    specCode: string,
    spec: string,
    uni: string,
    addmissionNews: []
    applications: []
}