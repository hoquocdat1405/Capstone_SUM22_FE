import { TestDetail } from './../_model/test.model';
import { SharedService } from 'src/app/_services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holland-quiz-attempt-new',
  templateUrl: './holland-quiz-attempt-new.component.html',
  styleUrls: ['./holland-quiz-attempt-new.component.scss'],
})
export class HollandQuizAttemptNewComponent implements OnInit {
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
