export interface FirstMail {
    recipientId: string,
    messageContent: string,
    topic: string
}

export interface Message  {
    id: number,
    mailBoxId: string,
    messageContent: string,
    messageType: string,
    createDate: Date,
    mailBox: string
}

export interface MailBox {
    id: string,
    userId: string,
    userName: string,
    userAvatarUrl: string,
    uniId: string,
    uniName: string,
    uniAvatarUrl: string,
    topic: string,
    createDate: Date,
    type: string
}

export interface ReplyMail {
    mailBoxId: string,
    messageContent: string
}