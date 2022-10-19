import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holland-question',
  templateUrl: './holland-question.component.html',
  styleUrls: ['./holland-question.component.scss'],
})
export class HollandQuestionComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    var totalQuestions = this.questions.length;
    var sliceQuestion = this.questionSlice.length;
    this.totalPage =
      (totalQuestions - (totalQuestions % sliceQuestion)) / sliceQuestion;
    if (totalQuestions / sliceQuestion !== 0) {
      this.totalPage++;
    }

    this.questions.forEach((question) => {
      this.userAnswer.push({
        id: question.id,
        answer: [],
      });
    });
  }

  ngAfterViewInit() {}

  questions = [
    {
      id: 1,
      questionText: 'What does HTML stand for?',
      answers: [
        'Hypertext 1234 asasssssssssssasas',
        'Hypertext 2222 asasssssssssssasas',
        'Hypertext 3333 asasssssssssssasas',
        'Hypertext 4444 asasssssssssssasas',
        'Hypertext 5555 asasssssssssssasas',
        'Hypertext 6666 asasssssssssssasas',
      ],
    },
    {
      id: 2,
      questionText: 'What does HTML stand for2?',
      answers: ['Hypertext 1111', 'Hypertext 9999', 'Hypertext 121111'],
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
    {
      id: 11,
      questionText: 'What does HTML stand for11?',
      answers: ['Hypertext 4444', 'Hypertext 111111'],
    },
    {
      id: 12,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 13,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 14,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 15,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 16,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 17,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 18,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 19,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 20,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 21,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 22,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 23,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 24,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 25,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 26,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 27,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 28,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 29,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 30,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
    {
      id: 31,
      questionText: 'What does HTML stand for5?',
      answers: ['Hypertext 4444', 'Hypertext 6666'],
    },
  ];
  currentQuestion = 0;
  questionSlice = this.questions.slice(0, 10);
  totalPage = 0;
  currentPage = 0;
  userAnswer: { id: number; answer: string[] }[] = [];

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    var startIndex = event.pageIndex * event.pageSize;
    var endIndex = startIndex + event.pageSize;
    if (endIndex > event.length) {
      endIndex = event.length;
    }
    this.questionSlice = this.questions.slice(startIndex, endIndex);

    setTimeout(() => {
      var userAnswerSlice = this.userAnswer.slice(startIndex, endIndex);
      var questionSlice = this.questions.slice(startIndex, endIndex);

      for (var i = 0; i < userAnswerSlice.length; i++) {
        for (var j = 0; j < questionSlice[i].answers.length; j++) {
          var answer = document.querySelector(
            `.question-container:nth-child(${i + 1}) .answer:nth-child(${
              j + 1
            }) input`
          ) as HTMLInputElement;

          userAnswerSlice[i].answer.forEach((text) => {
            if (answer.value === text) {
              answer.checked = true;
            }
          });
        }
      }
    }, 2);

    setTimeout(() => {
      document.querySelector('.container-main')?.scrollIntoView();
    }, 1);
  }

  storeUserAnswer(event: any, i: number) {
    if (event.target.checked === true) {
      this.userAnswer[10 * this.currentPage + i].answer.push(
        event.target.value
      );
    } else {
      const index = this.userAnswer[10 * this.currentPage + i].answer.indexOf(
        event.target.value
      );
      if (index > -1) {
        this.userAnswer[10 * this.currentPage + i].answer.splice(index, 1);
      }
    }
  }
}
