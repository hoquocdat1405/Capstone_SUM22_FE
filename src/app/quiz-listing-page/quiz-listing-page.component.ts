import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';
import { Test } from '../_model/test.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TestTypeEnum } from '../shared/constants/app-const';
@Component({
  selector: 'app-quiz-listing-page',
  templateUrl: './quiz-listing-page.component.html',
  styleUrls: ['./quiz-listing-page.component.css'],
})
export class QuizListingPageComponent implements OnInit {
  public tests: Test[] = [];

  constructor(
    private sharedServ: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Danh sách bài test');
    this.sharedServ.getAllTest().subscribe((response) => {
      this.tests = response;
      console.log(this.tests.length);
      this.tests.forEach((test) => {
        test.introduction = test.introduction.slice(0, 150) + '...';
      });
    });

    setTimeout(() => {
      this.responsive();
    }, 50);
  }

  responsive() {
    console.log(111);
    var width = window.matchMedia('(max-width: 700px)');
    var quizCard = document.querySelectorAll('.quiz-card');
    if (width.matches) {
      quizCard.forEach((card) => {
        card.classList.remove('quiz-card-hover');
      });
    } else {
      quizCard.forEach((card) => {
        card.classList.add('quiz-card-hover');
      });
    }
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
