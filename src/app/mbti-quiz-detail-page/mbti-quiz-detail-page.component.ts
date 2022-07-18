import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-detail-page',
  templateUrl: './mbti-quiz-detail-page.component.html',
  styleUrls: ['./mbti-quiz-detail-page.component.scss'],
})
export class MbtiQuizDetailPageComponent implements OnInit {
  public mbtiTypes: { name: string; shorthand: string; imgSrc: string }[];
  constructor() {
    this.mbtiTypes = [
      { name: 'INFJ', shorthand: 'Người che chở', imgSrc: '../../../assets/svg/mbti-type-infj.svg' },
      { name: 'INTJ', shorthand: 'Nhà khoa học', imgSrc: '../../../assets/svg/mbti-type-intj.svg' },
      { name: 'INTP', shorthand: 'Nhà tư duy', imgSrc: '../../../assets/svg/mbti-type-intp.svg' },
      { name: 'INFP', shorthand: 'Người duy tâm', imgSrc: '../../../assets/svg/mbti-type-infp.svg' },
      { name: 'ESFJ', shorthand: 'Người quan tâm', imgSrc: '../../../assets/svg/mbti-type-esfj.svg' },
      { name: 'ISFJ', shorthand: 'Người nuôi dưỡng', imgSrc: '../../../assets/svg/mbti-type-isfj.svg' },
      { name: 'ESFP', shorthand: 'Người trình diễn', imgSrc: '../../../assets/svg/mbti-type-esfp.svg' },
      { name: 'ISFP', shorthand: 'Người nghệ sĩ', imgSrc: '../../../assets/svg/mbti-type-isfp.svg' },
      { name: 'ENFJ', shorthand: 'Người chỉ dạy', imgSrc: '../../../assets/svg/mbti-type-enfj.svg' },
      { name: 'ENFP', shorthand: 'Người truyền cảm hứng', imgSrc: '../../../assets/svg/mbti-type-enfp.svg' },
      { name: 'ENTJ', shorthand: 'Người điều hành', imgSrc: '../../../assets/svg/mbti-type-entj.svg' },
      { name: 'ESTJ', shorthand: 'Người giám sát', imgSrc: '../../../assets/svg/mbti-type-estj.svg' },
      { name: 'ISTJ', shorthand: 'Người trách nhiệm', imgSrc: '../../../assets/svg/mbti-type-istj.svg' },
      { name: 'ESTP', shorthand: 'Người thực thi', imgSrc: '../../../assets/svg/mbti-type-estp.svg' },
      { name: 'ISTP', shorthand: 'Nhà cơ học', imgSrc: '../../../assets/svg/mbti-type-istp.svg' },
      { name: 'ENTP', shorthand: 'Người có tầm nhìn xa', imgSrc: '../../../assets/svg/mbti-type-entp.svg' },
    ];
  }

  ngOnInit() {}
}
