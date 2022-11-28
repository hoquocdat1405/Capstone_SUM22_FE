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
  id!: string | null;
  test!: Test;

  constructor(
    private route: ActivatedRoute,
    private sharedServ: SharedService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sharedServ
      .getTestDetail(this.id)
      .subscribe((response) => (this.test = response));
  }
}
