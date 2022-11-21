import { Profile } from './../../_model/User';
import { AuthService } from './../../_services/auth.service';
import { ReplyMail, Message } from './../../_model/mail/mail';
import { Router, ActivatedRoute } from '@angular/router';
import { MailService } from './../../_services/mail.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor/src';

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html',
  styleUrls: ['./mail-inbox.component.scss']
})
export class MailInboxComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  listMessage: Message[] = [];
  mailboxId: string = "";
  isReply: boolean = false;
  userName: string = "";
  uniName: string = "";
  uniAvatarUrl: string = "";
  userProfile?: Profile;
  @ViewChild('defaultRTE')
  public componentObject!: RichTextEditorComponent;

  private htmlContent!: string;

  constructor(
    private fb: FormBuilder,
    private mailService: MailService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.mailboxId = this.route.snapshot.paramMap.get("mailboxId")!;
    this.uniName = this.route.snapshot.paramMap.get("uniName")!;
    this.userName = this.route.snapshot.paramMap.get("userName")!;
    this.uniAvatarUrl = this.route.snapshot.paramMap.get("uniAvatarUrl")!;
    this.reloadMessage();
    // setInterval(() => this.reloadMessage(), 2000)
    this.authService.getUserProfileObserver().subscribe({
      next: (data: Profile) => {
        this.userProfile = data;
      }
    })
  }

  reloadMessage() {
    this.mailService.getAllMessage(this.mailboxId).subscribe({
      next: (data: Message[]) => {
        this.listMessage = data;
      }
    })
  }

  search = this.fb.group({
    searchInput: [''],
  });
  public customToolbar: Object = {
    items: ['Bold', 'Italic', '|', 'Formats', 'OrderedList', 'UnorderedList',]
  }

  getNewEmailContent() {
    this.htmlContent = this.componentObject.getHtml();
    const replyMail: ReplyMail = {
      mailBoxId: this.mailboxId,
      messageContent: this.htmlContent,
    }
    this.mailService.sendReply(replyMail).subscribe({
      next: () => {
        this.reloadMessage();
      }
    })
  }

  backPage() {
    this.router.navigate(['/mail'])
  }

  replyHandle() {
    this.isReply = !this.isReply;
  }
}
