import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holland-quiz-attempt-new',
  templateUrl: './holland-quiz-attempt-new.component.html',
  styleUrls: ['./holland-quiz-attempt-new.component.scss'],
})
export class HollandQuizAttemptNewComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Bài test Holland');
  }
}
