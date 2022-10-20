import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../_model/test.model';
import { SharedService } from '../_services/shared.service';
@Component({
  selector: 'app-disc-quiz-detail-page',
  templateUrl: './disc-quiz-detail-page.component.html',
  styleUrls: ['./disc-quiz-detail-page.component.scss'],
})
export class DiscQuizDetailPageComponent implements OnInit {
  public discTypes: { name: string; shorthand: string; imgSrc: string }[];

  id!: string | null;

  test!: Test;

  constructor(
    private route: ActivatedRoute,
    private sharedServ: SharedService
  ) {
    this.discTypes = [
      {
        name: 'Người chiến thắng',
        shorthand: 'D',
        imgSrc: 'assets/svg/disc-types/disc-d-type.svg',
      },
      {
        name: 'Người thách thức',
        shorthand: 'DC',
        imgSrc: 'assets/svg/disc-types/disc-dc-type.svg',
      },
      {
        name: 'Người tìm kiếm',
        shorthand: 'DI',
        imgSrc: 'assets/svg/disc-types/disc-di-type.svg',
      },
      {
        name: 'Người lạc quan',
        shorthand: 'ID',
        imgSrc: 'assets/svg/disc-types/disc-id-type.svg',
      },
      {
        name: 'Người nhiệt tình',
        shorthand: 'I',
        imgSrc: 'assets/svg/disc-types/disc-i-type.svg',
      },
      {
        name: 'Người bạn',
        shorthand: 'IS',
        imgSrc: 'assets/svg/disc-types/disc-is-type.svg',
      },
      {
        name: 'Người cộng tác',
        shorthand: 'SI',
        imgSrc: 'assets/svg/disc-types/disc-si-type.svg',
      },
      {
        name: 'Người nâng đỡ',
        shorthand: 'S',
        imgSrc: 'assets/svg/disc-types/disc-s-type.svg',
      },
      {
        name: 'Kỹ thuật viên ',
        shorthand: 'SC',
        imgSrc: 'assets/svg/disc-types/disc-sc-type.svg',
      },
      {
        name: 'Nhà phân tích ',
        shorthand: 'C',
        imgSrc: 'assets/svg/disc-types/disc-c-type.svg',
      },
      {
        name: 'Người tạo nền tảng',
        shorthand: 'CS',
        imgSrc: 'assets/svg/disc-types/disc-cs-type.svg',
      },
      {
        name: 'Người cầu toàn',
        shorthand: ' CD',
        imgSrc: 'assets/svg/disc-types/disc-cd-type.svg',
      },
    ];
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sharedServ
      .getTestDetail(this.id)
      .subscribe((response) => (this.test = response));
  }
}
