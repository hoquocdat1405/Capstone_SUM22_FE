import { TestDetail } from './../_model/test.model';
import { SharedService } from 'src/app/_services/shared.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disc-quiz-attempt-new',
  templateUrl: './disc-quiz-attempt-new.component.html',
  styleUrls: ['./disc-quiz-attempt-new.component.scss'],
})
export class DiscQuizAttemptNewComponent implements OnInit {
  id!: string | null;
  testDetail?: TestDetail;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private shareService: SharedService
  ) {}

  ngOnInit() {
    this.title.setTitle('Bài test DISC');
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.shareService.getTestDetail(this.id).subscribe((data) => {
      this.testDetail = data;
    });
  }
}
