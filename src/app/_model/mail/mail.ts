export interface FirstMail {
    uniId: string,
    messageContent: string,
    topic: string
}

export interface Message  {
    id: string,
    mailBoxId: string,
    messageContent: string,
    messageType: string,
    createDate: Date,
    mailBox: string
}

export interface MailBox {
    id: string,
    userId: string,
    uniId: string,
    topic: string,
    uni: string,
    user: string,
    messages: Message[]
}

export interface ReplyMail {
    mailBoxId: string,
    messageContent: string
}