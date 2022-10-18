import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-question',
  templateUrl: './bf-question.component.html',
  styleUrls: ['./bf-question.component.scss'],
})
export class BfQuestionComponent implements OnInit {
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
        answer: '0',
      });
    });
  }

  questions = [
    {
      id: 1,
      questionText: 'I have a kind word for everyone.',
    },
    {
      id: 2,
      questionText: 'I have a kind word for everyone. 2',
    },
    {
      id: 3,
      questionText: 'I have a kind word for everyone. 3',
    },
    {
      id: 4,
      questionText: 'I have a kind word for everyone. 4',
    },
    {
      id: 5,
      questionText: 'I have a kind word for everyone. 5',
    },
    {
      id: 6,
      questionText: 'I have a kind word for everyone. 6',
    },
    {
      id: 7,
      questionText: 'I have a kind word for everyone. 7',
    },
    {
      id: 8,
      questionText: 'I have a kind word for everyone. 8',
    },
    {
      id: 9,
      questionText: 'I have a kind word for everyone. 9',
    },
    {
      id: 10,
      questionText: 'I have a kind word for everyone. 10',
    },
    {
      id: 11,
      questionText: 'I have a kind word for everyone. 11',
    },
    {
      id: 12,
      questionText: 'I have a kind word for everyone. 12',
    },
    {
      id: 13,
      questionText: 'I have a kind word for everyone. 13',
    },
    {
      id: 14,
      questionText: 'I have a kind word for everyone. 14',
    },
    {
      id: 15,
      questionText: 'I have a kind word for everyone. 15',
    },
    {
      id: 16,
      questionText: 'I have a kind word for everyone. 16',
    },
    {
      id: 17,
      questionText: 'I have a kind word for everyone. 17',
    },
    {
      id: 18,
      questionText: 'I have a kind word for everyone. 18',
    },
    {
      id: 19,
      questionText: 'I have a kind word for everyone. 19',
    },
    {
      id: 20,
      questionText: 'I have a kind word for everyone. 20',
    },
    {
      id: 21,
      questionText: 'I have a kind word for everyone. 21',
    },
    {
      id: 22,
      questionText: 'I have a kind word for everyone. 22',
    },
    {
      id: 23,
      questionText: 'I have a kind word for everyone. 23',
    },
    {
      id: 24,
      questionText: 'I have a kind word for everyone. 24',
    },
    {
      id: 25,
      questionText: 'I have a kind word for everyone. 25',
    },
    {
      id: 26,
      questionText: 'I have a kind word for everyone. 26',
    },
    {
      id: 27,
      questionText: 'I have a kind word for everyone. 27',
    },
    {
      id: 28,
      questionText: 'I have a kind word for everyone. 28',
    },
    {
      id: 29,
      questionText: 'I have a kind word for everyone. 29',
    },
    {
      id: 30,
      questionText: 'I have a kind word for everyone. 30',
    },
    {
      id: 31,
      questionText: 'I have a kind word for everyone. 31',
    },
    {
      id: 32,
      questionText: 'I have a kind word for everyone. 32',
    },
  ];
  questionSlice = this.questions.slice(0, 10);
  totalPage = 0;
  currentPage = 0;
  userAnswer: { id: number; answer: string }[] = [];

  chooseAnswer(i: number, event: any, level: string) {
    var levelAll = document.querySelectorAll(
      `.question:nth-child(${i + 1}) .checkmark`
    );

    levelAll.forEach((level) => {
      level.classList.remove('active');
    });
    this.clickCheckBox(event);
    this.storeUserAnswer(i, level);
  }

  clickCheckBox(event: any) {
    event.target.classList.add('active');
  }

  storeUserAnswer(i: number, level: string) {
    this.userAnswer[10 * this.currentPage + i].answer = level;
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    var startIndex = event.pageIndex * event.pageSize;
    var endIndex = startIndex + event.pageSize;
    if (endIndex > event.length) {
      endIndex = event.length;
    }

    setTimeout(() => {
      var userAnswerSlice = this.userAnswer.slice(startIndex, endIndex);
      for (var i = 0; i < userAnswerSlice.length; i++) {
        for (var j = 0; j < 5; j++) {
          var answer = document.querySelector(
            `.question:nth-child(${i + 1}) .input-container:nth-child(${
              j + 1
            }) input`
          ) as HTMLInputElement;

          if (answer.value === userAnswerSlice[i].answer) {
            var checkmark = document.querySelector(
              `.question:nth-child(${i + 1}) .input-container:nth-child(${
                j + 1
              }) .checkmark`
            );
            checkmark?.classList.add('active');
          }
        }
      }
    }, 2);

    this.questionSlice = this.questions.slice(startIndex, endIndex);
    setTimeout(() => {
      document.querySelector('.main-container')?.scrollIntoView();
    }, 1);
  }
}
