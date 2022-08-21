import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-quiz-attempt-page',
  templateUrl: './bf-quiz-attempt-page.component.html',
  styleUrls: ['./bf-quiz-attempt-page.component.scss'],
})
export class BfQuizAttemptPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.start();
  }

  questions = [
    {
      id: 1,
      question: 'I have a kind word for everyone.',
    },
    {
      id: 2,
      question: 'I am always prepared.',
    },
    {
      id: 3,
      question: 'I feel comfortable around people.',
    },
    {
      id: 4,
      question: 'I often feel blue.',
    },
    {
      id: 5,
      question: 'I believe in the importance of art.',
    },
  ];

  userAnswers: { id: number; answer: number }[] = [];

  currentQuestion = 0;

  start() {
    for (let i = 0; i < this.questions.length; i++) {
      this.userAnswers.push({
        id: this.questions[i].id,
        answer: -1,
      });
    }

    // var questionDot = document.querySelector('#question-dot0');
    // questionDot?.classList.add('question-current');
    this.changeQuestionDot(this.currentQuestion);
  }

  changeQuestionDot(i: number) {
    var questionDots = document.querySelectorAll('.question-dot');
    for (let i = 0; i < questionDots.length; i++) {
      questionDots[i].classList.remove('question-current');
      if (this.userAnswers[i].answer != -1) {
        questionDots[i].classList.add('question-done');
      } else {
        questionDots[i].classList.remove('question-done');
      }
    }

    var questionDot = document.querySelector('#question-dot' + i);
    questionDot?.classList.add('question-current');
  }

  checkDone() {
    let checkDone = false;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i].answer != -1) {
        checkDone = true;
      } else {
        checkDone = false;
        break;
      }
    }

    let btnSubmit = document.querySelector('.btn-submit');
    if (checkDone === true) {
      btnSubmit?.classList.add('submit-active');
    } else {
      btnSubmit?.classList.remove('submit-active');
    }
  }

  chooseAnswer() {
    for (let i = 0; i < this.userAnswers.length; i++) {
      var buttonRadio = document.getElementById(
        'radio' + i
      ) as HTMLInputElement;
      if (buttonRadio.checked) {
        this.userAnswers[this.currentQuestion].answer = i;
      }
    }

    this.checkDone();
  }

  choosePrevQuestion() {
    if (this.currentQuestion - 1 >= 0) {
      this.currentQuestion -= 1;
      this.checkedAnswer();
      this.changeQuestionDot(this.currentQuestion);
    }
  }

  chooseNextQuestion() {
    if (this.currentQuestion + 1 < this.questions.length) {
      this.currentQuestion += 1;
      this.checkedAnswer();
      this.changeQuestionDot(this.currentQuestion);
    }
  }

  chooseQuestion(i: number) {
    this.currentQuestion = i;
    this.checkedAnswer();
    this.changeQuestionDot(this.currentQuestion);
  }

  checkedAnswer() {
    if (this.userAnswers[this.currentQuestion].answer == -1) {
      var buttons = document.querySelectorAll(
        '.radio'
      ) as NodeListOf<HTMLInputElement>;
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].checked = false;
      }
    }

    var buttonRadio = document.getElementById(
      'radio' + this.userAnswers[this.currentQuestion].answer
    ) as HTMLInputElement;

    if (buttonRadio !== null) {
      buttonRadio.checked = true;
    }
  }
}
