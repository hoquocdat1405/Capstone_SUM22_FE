import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.start();
  }

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
  ];

  userAnswers: { id: number; answer: string }[] = [];

  start() {
    this.questions.forEach((question) => {
      this.userAnswers.push({
        id: question.id,
        answer: '',
      });
    });
  }

  chooseAnswer(i: number, j: number) {
    var activeAnswer = document.querySelector(
      `.question-container:nth-child(${i + 1}) .answer-container .answer.active`
    );
    activeAnswer?.classList.remove('active');

    var userAnswer = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .answer:nth-child(${j + 1})`
    );

    // if (activeAnswer !== userAnswer) {
    userAnswer?.classList.add('active');
    // }

    var answerText = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .answer:nth-child(${j + 1}) .answer-text`
    ) as HTMLElement;
    this.storeUserAnswer(i, answerText?.innerText);
    this.changeQuestion(i + 1);
    // this.checkUserAnswer();
  }

  storeUserAnswer(index: number, answerText: string) {
    this.userAnswers[index].answer = answerText;
  }

  changeQuestion(i: number) {
    var currentAnswerContainer = document.querySelector(
      `.question-container:nth-child(${i + 1})`
    );
    currentAnswerContainer?.scrollIntoView({ behavior: 'smooth' });
  }

  checkUserAnswer(): boolean {
    for (var i = 0; i < this.userAnswers.length; i++) {
      var txtError = document.querySelector(
        `.question-container:nth-child(${i + 1}) .error-text`
      ) as HTMLElement;

      if (this.userAnswers[i].answer === '') {
        txtError?.classList.add('active');
        this.changeQuestion(i);
        return false;
      } else {
        txtError?.classList.remove('active');
      }
    }
    return true;
  }
}
