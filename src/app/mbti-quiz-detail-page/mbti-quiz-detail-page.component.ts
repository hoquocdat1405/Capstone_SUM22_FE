import { Title } from '@angular/platform-browser';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QuizResult } from '../_model/quiz-result';
import { Test } from '../_model/test.model';
import { SharedService } from '../_services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TestTypeEnum } from '../shared/constants/app-const';
@Component({
  selector: 'app-mbti-quiz-detail-page',
  templateUrl: './mbti-quiz-detail-page.component.html',
  styleUrls: ['./mbti-quiz-detail-page.component.scss'],
})
export class MbtiQuizDetailPageComponent implements OnInit {
  @ViewChild('card') card!: ElementRef;
  id!: string | null;
  test!: Test;
  characters!: QuizResult[];

  constructor(
    private sharedServ: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Chi tiết MBTI');

    this.id = this.route.snapshot.paramMap.get('id');
    this.sharedServ.getTestDetail(this.id).subscribe((response) => {
      this.test = response;
      this.sharedServ.getTestResult(this.id, '').subscribe((response) => {
        this.characters = response;
      });
    });
  }
  redirectTest(typeId: number, id: number, type: number) {
    console.log(typeId);
    var redirectStr: string = '';
    if (typeId == TestTypeEnum.MBTI_TEST_ID)
      redirectStr = TestTypeEnum.MBTI_TEST;
    else if (typeId == TestTypeEnum.DISC_TEST_ID)
      redirectStr = TestTypeEnum.DISC_TEST;
    else if (typeId == TestTypeEnum.BIGFIVE_TEST_ID)
      redirectStr = TestTypeEnum.BIGFIVE_TEST;
    else if (typeId == TestTypeEnum.HOLLAND_TEST_ID)
      redirectStr = TestTypeEnum.HOLLAND_TEST;
    console.log('id : ' + id);
    console.log(redirectStr + '-quiz-attempt?id=' + id);
    if (type == 0)
      this.router.navigate([redirectStr + '-quiz-attempt', { id: id }]);
    else this.router.navigate([redirectStr + '-quiz-detail', { id: id }]);
  }
}
