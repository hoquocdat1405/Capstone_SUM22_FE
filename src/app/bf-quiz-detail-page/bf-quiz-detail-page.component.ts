import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-quiz-detail-page',
  templateUrl: './bf-quiz-detail-page.component.html',
  styleUrls: ['./bf-quiz-detail-page.component.scss']
})
export class BfQuizDetailPageComponent implements OnInit {

  charPercentage:number[] = [
    70, 40, 85, 20, 35
  ];

  charTitle:string[] = [
    "Cởi mở", "Hướng ngoại", "Tự chủ", "Hòa đồng", "Bất ổn cảm xúc"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
