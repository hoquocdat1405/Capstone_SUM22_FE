import { FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor/src';

@Component({
  selector: 'app-mail-main',
  templateUrl: './mail-main.component.html',
  styleUrls: ['./mail-main.component.scss']
})
export class MailMainComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  constructor(private fb: FormBuilder) { }

  @ViewChild('defaultRTE')
  public componentObject!: RichTextEditorComponent;
  
  private htmlContent!: string;
  isShowNewEmailPopup: boolean = false;

  ngOnInit(): void {
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
    console.log(this.htmlContent)
  }
}
