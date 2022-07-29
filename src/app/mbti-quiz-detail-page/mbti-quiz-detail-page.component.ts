import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-detail-page',
  templateUrl: './mbti-quiz-detail-page.component.html',
  styleUrls: ['./mbti-quiz-detail-page.component.scss'],
})
export class MbtiQuizDetailPageComponent implements OnInit {
  @ViewChild('card') card!:ElementRef;
  public mbtiTypes: { name: string; shorthand: string; imgSrc: string }[];
  constructor() {
    this.mbtiTypes = [
      {
        shorthand: 'INFJ',
        name: 'Người che chở',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-infj.svg',
      },
      {
        shorthand: 'INTJ',
        name: 'Nhà khoa học',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-intj.svg',
      },
      {
        shorthand: 'INTP',
        name: 'Nhà tư duy',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-intp.svg',
      },
      {
        shorthand: 'INFP',
        name: 'Người duy tâm',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-infp.svg',
      },
      {
        shorthand: 'ESFJ',
        name: 'Người quan tâm',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-esfj.svg',
      },
      {
        shorthand: 'ISFJ',
        name: 'Người nuôi dưỡng',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-isfj.svg',
      },
      {
        shorthand: 'ESFP',
        name: 'Người trình diễn',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-esfp.svg',
      },
      {
        shorthand: 'ISFP',
        name: 'Người nghệ sĩ',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-isfp.svg',
      },
      {
        shorthand: 'ENFJ',
        name: 'Người chỉ dạy',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-enfj.svg',
      },
      {
        shorthand: 'ENFP',
        name: 'Người truyền cảm hứng',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-enfp.svg',
      },
      {
        shorthand: 'ENTJ',
        name: 'Người điều hành',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-entj.svg',
      },
      {
        shorthand: 'ESTJ',
        name: 'Người giám sát',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-estj.svg',
      },
      {
        shorthand: 'ISTJ',
        name: 'Người trách nhiệm',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-istj.svg',
      },
      {
        shorthand: 'ESTP',
        name: 'Người thực thi',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-estp.svg',
      },
      {
        shorthand: 'ISTP',
        name: 'Nhà cơ học',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-istp.svg',
      },
      {
        shorthand: 'ENTP',
        name: 'Người có tầm nhìn xa',
        imgSrc: '../../../assets/svg/mbti-types/mbti-type-entp.svg',
      },
    ];
  }

  ngOnInit() {}
}
