import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-quiz-result-detail-page',
  templateUrl: './disc-quiz-result-detail-page.component.html',
  styleUrls: ['./disc-quiz-result-detail-page.component.scss'],
})
export class DiscQuizResultDetailPageComponent implements OnInit {
  result: { labels: string[]; values: number[] };

  discType: { name: string; shorthand: string; imgSrc: string };

  constructor() {
    this.result = { labels: ['D', 'I', 'S', 'C'], values: [7, 13, 22, 58] };
    this.discType = {
      name: 'Người kiên định',
      shorthand: 'S',
      imgSrc: '../assets/svg/disc-types/disc-s-type.svg',
    };
  }

  ngOnInit() {}
}
