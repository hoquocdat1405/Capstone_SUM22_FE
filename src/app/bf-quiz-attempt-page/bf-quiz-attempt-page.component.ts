import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-quiz-attempt-page',
  templateUrl: './bf-quiz-attempt-page.component.html',
  styleUrls: ['./bf-quiz-attempt-page.component.scss']
})
export class BfQuizAttemptPageComponent implements OnInit {

  counter(i: number) {
    return new Array(i);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
