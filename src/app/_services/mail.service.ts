import { Observable } from 'rxjs';
import { MailBox, Message, FirstMail, ReplyMail } from './../_model/mail/mail';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  baseUrl = environment.mockApiUrl;

  constructor(private http: HttpClient) { }

  getAllMail(): Observable<MailBox[]> {
    return this.http.get<MailBox[]>(this.baseUrl + "mail/mailbox");
  }

  getAllMessage(mailId: string): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl + "mail/message?MailId=" + mailId);
  }

  sendFirstMail(mail: FirstMail): Observable<any> {
    return this.http.post<any>(this.baseUrl + "mail/send", mail);
  }

  sendReply(mail: ReplyMail): Observable<any> {
    return this.http.post<any>(this.baseUrl + "mail/reply", mail);
  }
}
