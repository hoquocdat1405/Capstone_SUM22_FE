import { Router } from '@angular/router';
import { FirstMail, MailBox } from './../_model/mail/mail';
import { MailService } from './../_services/mail.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UniversityService } from './../_services/university.service';
import { University } from './../_model/uni';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor/src';
import * as alertify from "alertifyjs";

@Component({
  selector: 'app-mail-main',
  templateUrl: './mail-main.component.html',
  styleUrls: ['./mail-main.component.scss']
})
export class MailMainComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  uniList: University[] = [];
  // myControl = new FormControl('');
  listMailbox: MailBox[] = [];
  filteredOptions!: Observable<string[]>;
  selectedUniList: University[] = [];
  @ViewChild('defaultRTE')
  public componentObject!: RichTextEditorComponent;
  constructor(
    private fb: FormBuilder,
    private uniService: UniversityService,
    private mailService: MailService,
    private router: Router,
  ) { }


  private htmlContent!: string;
  isShowNewEmailPopup: boolean = false;

  ngOnInit(): void {
    alertify.set('notifier', 'position', 'top-center');
    alertify.set('notifier', 'delay', 3)
    this.uniService.getAllUniversity().subscribe({
      next: (data: University[]) => {
        this.uniList = data;
        this.filteredOptions = (this.myForm.get('schoolControl') as FormControl).valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
    })

    this.getAllMail();
  }

  myForm = this.fb.group({
    schoolControl: ['', [Validators.required]],
    topic: ['', [Validators.required]]
  })

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.selectedUniList = this.uniList.filter(option => option.uniName.toLowerCase().includes(filterValue));
    console.log(this.uniList.filter(option => option.uniName.toLowerCase().includes(filterValue))
      .map(uniSearched => uniSearched.uniName))
    return this.uniList.filter(option => option.uniName.toLowerCase().includes(filterValue))
      .map(uniSearched => uniSearched.uniName);
  }

  search = this.fb.group({
    searchInput: [''],
  });

  searchSchool() {

  }

  public customToolbar: Object = {
    items: ['Bold', 'Italic', '|', 'Formats', 'OrderedList', 'UnorderedList',]
  }

  getNewEmailContent() {
    this.htmlContent = this.componentObject.getHtml();
    // if (this.selectedUniList.length < 1) {
    //   alertify.error("Tên trường không hợp lệ")
    //   return;
    // }
    if (this.myForm.invalid) {
      alertify.error("Vui lòng điền đầy đủ thông tin")
      return;
    }
    const uni: University = this.uniList.filter(x =>
      x.uniName === this.myForm.get("schoolControl")!.value
      && x.uniName.length === (this.myForm.get("schoolControl")!.value as string).trim().length)[0]
    if (!uni) {
      alertify.error("Tên trường không hợp lệ")
      return;
    }


    alertify.success("Gửi thành công")
    const firstMail: FirstMail = {
      uniId: uni.id,
      messageContent: this.htmlContent,
      topic: this.myForm.get('topic')?.value
    }
    this.mailService.sendFirstMail(firstMail).subscribe({
      next: (data) => {
        alertify.success("Gửi thành công")
        this.getAllMail();
      }
    })
  }

  viewDetail(mailboxId: string, uniName: string, userName: string, uniAvatarUrl: string) {
    this.router.navigate(['/mail-inbox', { mailboxId: mailboxId, uniName: uniName, userName: userName, uniAvatarUrl: uniAvatarUrl }])
  }

  getAllMail() {
    this.mailService.getAllMail().subscribe({
      next: (data: MailBox[]) => {
        this.listMailbox = data;
      }
    })
  }

}
