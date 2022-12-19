import { TestDetail } from './../_model/test.model';
import { SharedService } from 'src/app/_services/shared.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-quiz-attempt-new',
  templateUrl: './bf-quiz-attempt-new.component.html',
  styleUrls: ['./bf-quiz-attempt-new.component.scss'],
})
export class BfQuizAttemptNewComponent implements OnInit {
  id!: string | null;
  testDetail?: TestDetail;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private shareService: SharedService
  ) {}

  ngOnInit() {
    this.title.setTitle('Bài test Holland');
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.shareService.getTestDetail(this.id).subscribe((data) => {
      this.testDetail = data;
    });
  }
}
