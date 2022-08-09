import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holland-quiz-result-detail-page',
  templateUrl: './holland-quiz-result-detail-page.component.html',
  styleUrls: ['./holland-quiz-result-detail-page.component.scss'],
})
export class HollandQuizResultDetailPageComponent implements OnInit {
  result: { labels: string[]; values: number[] };

  hollandType: { name: string; shorthand: string; imgSrc: string };

  constructor() {
    this.result = {
      labels: [
        'Kỹ thuật',
        'Nghệ thuật',
        'Nghiên cứu',
        'Xã hội',
        'Quản lí',
        'Nghiệp vụ',
      ],
      values: [35, 1, 32, 29, 16, 24],
    };
    
    this.hollandType = {
      name: 'Nhóm kỹ thuật',
      shorthand: 'Realistic',
      imgSrc: '../assets/svg/holland-types/realistic.svg',
    };
  }

  ngOnInit() {}
}
