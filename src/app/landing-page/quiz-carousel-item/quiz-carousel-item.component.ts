import { Component, OnInit, Input } from '@angular/core';
import { TestTypeEnum } from 'src/app/shared/constants/app-const';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-quiz-carousel-item',
  templateUrl: './quiz-carousel-item.component.html',
  styleUrls: ['./quiz-carousel-item.component.css'],
})
export class QuizCarouselItemComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input('description') des!: string;
  @Input('imgSrc') img!: string;
  @Input() shorthand!: number;

  constructor(private router: Router) {}

  redirectTest(typeId: number, id: number, redirectType: number) {
    var redirectStr: string = '';
    if (typeId == TestTypeEnum.MBTI_TEST_ID)
      redirectStr = TestTypeEnum.MBTI_TEST;
    else if (typeId == TestTypeEnum.DISC_TEST_ID)
      redirectStr = TestTypeEnum.DISC_TEST;
    else if (typeId == TestTypeEnum.BIGFIVE_TEST_ID)
      redirectStr = TestTypeEnum.BIGFIVE_TEST;
    else if (typeId == TestTypeEnum.HOLLAND_TEST_ID)
      redirectStr = TestTypeEnum.HOLLAND_TEST;

    if (redirectType == 0)
      this.router.navigate([redirectStr + '-quiz-attempt', { id: id }]);
    else this.router.navigate([redirectStr + '-quiz-detail', { id: id }]);
  }
}
