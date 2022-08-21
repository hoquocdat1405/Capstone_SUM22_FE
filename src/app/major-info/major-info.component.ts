import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-major-info',
  templateUrl: './major-info.component.html',
  styleUrls: ['./major-info.component.scss'],
})
export class MajorInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  majorList = [
    {
      majorName: 'Công nghệ thông tin',
      majorInfo:
        'Công nghệ thông tin, viết tắt CNTT, ( Information Technology hay là IT) là ngành ứng dụng công nghệ quản lý và xử lý thông tin',
      majorImg: 'assets/img/background.png',
    },
  ];
}
