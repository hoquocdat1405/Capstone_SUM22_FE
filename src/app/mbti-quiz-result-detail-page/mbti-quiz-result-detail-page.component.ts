import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-result-detail-page',
  templateUrl: './mbti-quiz-result-detail-page.component.html',
  styleUrls: ['./mbti-quiz-result-detail-page.component.scss'],
})
export class MbtiQuizResultDetailPageComponent implements OnInit {
  public mbtiType: { name: string; shorthand: string; imgSrc: string };

  constructor(private router: Router) {
    this.mbtiType = {
      name: 'Người che chở',
      shorthand: 'INFJ',
      imgSrc: '../../assets/svg/mbti-types/mbti-type-infj.svg',
    };
  }

  ngOnInit() {}

  suggestClickHandler() {
    this.router.navigate(['/job-list']);
  }

  chooseTab(event: any, index: number) {
    var tab = document.querySelector(`.tab-item:nth-child(${index})`);
    var tabActive = document.querySelector(`.tab-item.active`);
    tabActive?.classList.remove('active');
    tab?.classList.add('active');

    var infoContent = document.querySelector(
      `.info-content:nth-child(${index})`
    );
    var infoContentAcTive = document.querySelector(`.info-content.active`);
    infoContentAcTive?.classList.remove('active');
    infoContent?.classList.add('active');

    // var characterInfo = document.querySelector('.character-info');
    // characterInfo?.scrollIntoView({ behavior: 'smooth' });
  }
}
