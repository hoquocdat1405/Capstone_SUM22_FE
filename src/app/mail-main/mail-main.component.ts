import { FirstMail, MailBox, Message} from './../_model/mail/mail';
import { MailService } from './../_services/mail.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UniversityService } from './../_services/university.service';
import { University } from './../_model/uni';
import { FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor/src';
import * as alertify from "alertifyjs";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-mail-main',
  templateUrl: './mail-main.component.html',
  styleUrls: ['./mail-main.component.scss']
})
export class MailMainComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  uniList: University[] = [];
  myControl = new FormControl('');
  topicControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  selectedUniList: University[] = [];
  listMailBox: MailBox[] = [];
  messageList: Message[] = [];
  trustedMessageContent?:SafeHtml;
  
  @ViewChild('defaultRTE')
  public componentObject!: RichTextEditorComponent;

  private htmlContent!: string;
  isShowNewEmailPopup: boolean = false;
  isViewingDetail: boolean = false;

  constructor(
    private fb: FormBuilder,
    private uniService: UniversityService,
    private mailService: MailService,
    private domS: DomSanitizer
  ) { }

  myForm = this.fb.group({
    topic : ['']
  })
    
  ngOnInit(): void {
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3)
    this.uniService.getAllUniversity().subscribe({
      next: (data: University[]) => {
        this.uniList = data;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
    })

    this.mailService.getAllMail().subscribe({
      next: (data: MailBox[]) => {
        this.listMailBox = data;
      }
    })

    this.topicControl.registerOnChange(() => {
      console.log("topic changed")
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.selectedUniList = this.uniList.filter(option => option.uniName.toLowerCase().includes(filterValue));

    return this.uniList.filter(option => option.uniName.toLowerCase().includes(filterValue))
      .map(uniSearched => uniSearched.uniName);
  }

  search = this.fb.group({
    searchInput: [''],
  });

  searchSchool() {

  }

  public customToolbar: Object = {
    items: ['Bold', 'Italic', 'FontName', 'FontSize', '|', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyFull', '|', 'Formats', 'OrderedList', 'UnorderedList',]
  }

  getNewEmailContent() {
    this.htmlContent = this.componentObject.getHtml();
    if(this.selectedUniList.length !== 1) {
      alertify.error("Tên trường không hợp lệ")
      return;
    }
    alertify.success("Gửi thành công")
    const firstMail: FirstMail = {
      uniId: this.selectedUniList[0].id,
      messageContent: this.htmlContent,
      topic: this.myForm.get('topic')?.value
    }
    this.mailService.sendFirstMail(firstMail).subscribe({
      next: (data) => {
        console.log(data);
        alertify.success("Gửi thành công")
      }
    })
  }

  getChange() {
    console.log("topic changed")
  }
  
  viewMailDetail(id: string) {
    this.isViewingDetail = !this.isViewingDetail;
    this.mailService.getAllMessage(id).subscribe({
      next: (data: Message[]) => {
        this.messageList = data;
      }
    })
  }
}
