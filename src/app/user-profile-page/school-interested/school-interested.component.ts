import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  img: string;
  name: string;
  address: string;
  button: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    img: 'https://daihoc.fpt.edu.vn/media/2022/03/IMG_0200-910x683.jpg',
    name: 'Đại học FPT',
    address: 'H',
    button: 'Chi tiết',
  },
  {
    position: 2,
    img: 'https://www.tdtu.edu.vn/sites/www/files/About/Co%20so%20vat%20chat/To%C3%A0n%20c%E1%BA%A3nh%20TDTU.png',
    name: 'Đại học Tôn Đức Thắng',
    address: 'H',
    button: 'Chi tiết',
  },
];

@Component({
  selector: 'app-school-interested',
  templateUrl: './school-interested.component.html',
  styleUrls: ['./school-interested.component.scss'],
})
export class SchoolInterestedComponent implements OnInit {
  displayedColumns: string[] = ['position', 'img', 'name', 'address', 'button'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
