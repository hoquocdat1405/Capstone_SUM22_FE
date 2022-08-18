import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.scss'],
})
export class MajorListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  majorList = [
    {
      majorName: 'Công nghệ thông tin',
      majorInfo:
        'Công nghệ thông tin, viết tắt CNTT, ( Information Technology hay là IT) là ngành ứng dụng công nghệ quản lý và xử lý thông tin',
      majorImg: 'assets/img/background.png',
    },
    {
      majorName: 'Công nghệ thông tin2',
      majorInfo:
        'Công nghệ thông tin, viết tắt CNTT, ( Information Technology hay là IT) là ngành ứng dụng công nghệ quản lý và xử lý thông tin',
      majorImg: 'assets/img/background.png',
    },
    {
      majorName: 'Công nghệ thông tin3',
      majorInfo:
        'Công nghệ thông tin, viết tắt CNTT, ( Information Technology hay là IT) là ngành ứng dụng công nghệ quản lý và xử lý thông tin',
      majorImg: 'assets/img/background.png',
    },
    {
      majorName: 'Công nghệ thông tin4',
      majorInfo:
        'Công nghệ thông tin, viết tắt CNTT, ( Information Technology hay là IT) là ngành ứng dụng công nghệ quản lý và xử lý thông tin',
      majorImg: 'assets/img/background.png',
    },
    {
      majorName: 'Công nghệ thông tin5',
      majorInfo:
        'Công nghệ thông tin, viết tắt CNTT, ( Information Technology hay là IT) là ngành ứng dụng công nghệ quản lý và xử lý thông tin',
      majorImg: 'assets/img/background.png',
    },
  ];
}
