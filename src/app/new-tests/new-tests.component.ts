import { TestTypeEnum } from './../shared/constants/app-const';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from './../_services/shared.service';
import { Test } from './../_model/test.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tests',
  templateUrl: './new-tests.component.html',
  styleUrls: ['./new-tests.component.scss']
})
export class NewTestsComponent implements OnInit {
  tests: Test[] = [];

  constructor(
    private sharedServ: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Danh sách bài test');
    this.sharedServ.getAllTest().subscribe((response) => {
      this.tests = response;
      this.tests.forEach((test) => {
        test.introduction = test.introduction.slice(0, 150) + '...';
      });
    });
  }

  redirectTest(typeId: number, id: number, type: number) {
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
