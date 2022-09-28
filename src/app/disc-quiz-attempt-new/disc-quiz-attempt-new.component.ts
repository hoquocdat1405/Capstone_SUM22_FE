import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-quiz-attempt-new',
  templateUrl: './disc-quiz-attempt-new.component.html',
  styleUrls: ['./disc-quiz-attempt-new.component.scss'],
})
export class DiscQuizAttemptNewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  clickSpan() {
    var questionListContainer = document.querySelector(
      '.question-list-container'
    );
    var iconArrow = document.querySelector('.icon-arrow');
    var questionList = document.querySelector('.question-list');
    questionListContainer?.classList.toggle('active');
    iconArrow?.classList.toggle('active');
    questionList?.classList.toggle('active');
  }
}
