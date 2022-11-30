import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-mbti-quiz-attempt-new',
  templateUrl: './mbti-quiz-attempt-new.component.html',
  styleUrls: ['./mbti-quiz-attempt-new.component.scss'],
})
export class MbtiQuizAttemptNewComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Bài test MBTI');
  }
}
