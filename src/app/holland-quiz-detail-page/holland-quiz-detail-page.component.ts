import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';
import { Test } from '../_model/test.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TestTypeEnum } from '../shared/constants/app-const';
import { QuizResult } from '../_model/quiz-result';

@Component({
  selector: 'app-holland-quiz-detail-page',
  templateUrl: './holland-quiz-detail-page.component.html',
  styleUrls: ['./holland-quiz-detail-page.component.scss'],
})
export class HollandQuizDetailPageComponent implements OnInit {
  title: string = 'Holland Quiz';
  id!: string | null;
  test!: Test;
  characters!: QuizResult[];
  colors: string[] = [
    '#003171',
    '#333366',
    '#21abcd',
    '#cc99cc',
    '#ef3038',
    '#88540b',
    '#3aa8c1',
    '#ffff33',
  ];

  constructor(
    private sharedServ: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
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
