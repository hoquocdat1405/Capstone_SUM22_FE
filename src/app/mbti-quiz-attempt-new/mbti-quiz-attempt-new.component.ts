import { ActivatedRoute } from '@angular/router';
import { TestDetail } from './../_model/test.model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-mbti-quiz-attempt-new',
  templateUrl: './mbti-quiz-attempt-new.component.html',
  styleUrls: ['./mbti-quiz-attempt-new.component.scss'],
})
export class MbtiQuizAttemptNewComponent implements OnInit {
  testDetail?: TestDetail;
  id?: string | null;
  constructor(
    private title: Title,
    private shareService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.title.setTitle('Bài test MBTI');
    this.getData();
  }

  getData() {
    this.shareService.getTestDetail(this.id).subscribe((data) => {
      this.testDetail = data;
    });
  }
}
