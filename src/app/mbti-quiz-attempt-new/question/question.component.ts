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
    userAnswer?.classList.add('active');

    var answerText = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .answer:nth-child(${j + 1}) .answer-text`
    ) as HTMLElement;
    this.currentQuestion = i + 1;
    this.storeUserAnswer(i, answerText?.innerText);
    this.changeQuestion(i + 1, 'click');

    var questionNumber = document.querySelector(
      `.question-number:nth-child(${i + 1})`
    );
    console.log(questionNumber);
    questionNumber?.classList.add('done');
  }

  storeUserAnswer(index: number, answerText: string) {
    this.userAnswers[index].answer = answerText;
  }

  changeQuestion(i: number, method: string) {
    var currentAnswerContainer = document.querySelector(
      `.question-container:nth-child(${i + 1})`
    );

    if (method === 'click') {
      currentAnswerContainer?.scrollIntoView({ behavior: 'smooth' });
    }
    if (method === 'change') {
      currentAnswerContainer?.scrollIntoView();
    }
  }

  checkUserAnswer(): boolean {
    for (var i = 0; i < this.userAnswers.length; i++) {
      var txtError = document.querySelector(
        `.question-container:nth-child(${i + 1}) .error-text`
      ) as HTMLElement;

      if (this.userAnswers[i].answer === '') {
        txtError?.classList.add('active');
        this.changeQuestion(i, 'click');
        return false;
      } else {
        txtError?.classList.remove('active');
      }
    }
    return true;
  }

  chooseOption(event: any) {
    var userChooseOption = event.target.value;
    var container = document.querySelector('.container-main');
    if (userChooseOption === 'single') {
      container?.classList.add('single');
      this.changeQuestion(this.currentQuestion, 'change');
    }
    if (userChooseOption === 'multiple') {
      container?.classList.remove('single');
      this.changeQuestion(this.currentQuestion, 'change');
    }
  }

  onResize(event: any) {
    this.changeQuestion(this.currentQuestion + 1, 'change');
  }
}
