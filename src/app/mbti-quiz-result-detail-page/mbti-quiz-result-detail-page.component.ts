import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-result-detail-page',
  templateUrl: './mbti-quiz-result-detail-page.component.html',
  styleUrls: ['./mbti-quiz-result-detail-page.component.scss']
})
export class MbtiQuizResultDetailPageComponent implements OnInit {

  public mbtiType: { name: string; shorthand: string; imgSrc: string };

  constructor() {
    this.mbtiType = {name:'Người che chở',shorthand:'INFJ',imgSrc:'../../assets/svg/mbti-types/mbti-type-infj.svg'}
  }

  ngOnInit() {
  }

  

}
