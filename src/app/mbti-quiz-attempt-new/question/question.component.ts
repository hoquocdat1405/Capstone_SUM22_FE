import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  currentQuestion = 0;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  questions = [
    {
      id: 1,
      questionText: 'What does HTML stand for?',
      answers: ['Hypertext 1234', 'Hypertext 1235'],
    },
    {
      id: 2,
      questionText: 'What does HTML stand for2?',
      answers: ['Hypertext 1111', 'Hypertext 9999'],
    },
    {
      id: 3,
      questionText: 'What does HTML stand for3?',
      answers: ['Hypertext 2222', 'Hypertext 8888'],
    },
    {
      id: 4,
      questionText: 'What does HTML stand for4?',
      answers: ['Hypertext 3333', 'Hypertext 7777'],
    },
    {
      id: 5,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },

    {
      id: 6,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 7,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 8,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 9,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 10,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
  ];
}
