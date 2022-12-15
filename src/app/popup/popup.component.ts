import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  title?: string;
  content?: string;
  denyBtn?: string;
  acceptBtn?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit(): void {
    this.title = this.data.title ?? "Chưa xác định"
    this.content = this.data.content ?? "Chưa xác định"
    this.denyBtn = this.data.denyBtn ?? "Hủy"
    this.acceptBtn = this.data.acceptBtn ?? "Xác nhận"
  }
}
