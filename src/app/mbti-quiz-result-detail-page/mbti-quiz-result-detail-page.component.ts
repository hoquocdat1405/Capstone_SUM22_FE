import { QuizResult } from './../_model/quiz-result';
import { SharedService } from './../_services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-result-detail-page',
  templateUrl: './mbti-quiz-result-detail-page.component.html',
  styleUrls: ['./mbti-quiz-result-detail-page.component.scss'],
})
export class MbtiQuizResultDetailPageComponent implements OnInit {
  public mbtiType: { name: string; shorthand: string; imgSrc: string };
  id?: string | null;
  quizResult?: QuizResult;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedServ: SharedService
  ) {
    this.mbtiType = {
      name: 'Người che chở',
      shorthand: 'INFJ',
      imgSrc: '../../assets/svg/mbti-types/mbti-type-infj.svg',
    };
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sharedServ.getTestResult(this.id).subscribe((result) => {
      this.quizResult = result;
      console.log(this.quizResult);
      console.log(result);
    });
  }

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
