export interface Application {
    userId: string,
    uniId: string,
    uniSpecId: number
}

export interface ApplicationDetail {
    applicationId: string,
    credentialFrontImgUrl: string,
    credentialBackImgUrl: string,
    highSchoolCode: string,
    highSchoolName: string,
    highSchoolAddress: string,
    graduationYear: number,
    avarageScore: number,
    academicRank: string,
    schoolReport1Url: string,
    schoolReport2Url: string,
    schoolReport3Url: string,
    schoolReport4Url: string
}