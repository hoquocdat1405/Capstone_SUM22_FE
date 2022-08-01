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

  getColor(index:number):string {
    switch(index) {
      case 1:
        return "#62D2CE";
      case 2:
        return "#B0FF95";
      case 3:
        return "#DA6E88";
      case 4:
        return "#6B71FF";
      case 0:
        return "#82528A";
      default: return "#fff";
    }
  }

  public mbtiType: { name: string; shorthand: string; imgSrc: string };

  constructor() {
    this.mbtiType = {name:'Người che chở',shorthand:'INFJ',imgSrc:'../../assets/svg/mbti-types/mbti-type-infj.svg'}
  }

  ngOnInit(): void {
  }

}
