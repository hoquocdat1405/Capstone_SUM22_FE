import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-attempt-new',
  templateUrl: './mbti-quiz-attempt-new.component.html',
  styleUrls: ['./mbti-quiz-attempt-new.component.scss'],
})
export class MbtiQuizAttemptNewComponent implements OnInit {
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
