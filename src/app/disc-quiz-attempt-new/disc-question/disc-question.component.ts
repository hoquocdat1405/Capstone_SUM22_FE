import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-question',
  templateUrl: './disc-question.component.html',
  styleUrls: ['./disc-question.component.scss'],
})
export class DiscQuestionComponent implements OnInit {
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
      this.userAnswers.push({
        id: question.id,
        answers: { right: '', wrong: '' },
      });
    });
  }

  ngAfterViewInit() {}
  questions = [
    {
      id: 1,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 2,
      answers: [
        'Tôi có xu hướng là một người thận trọng2',
        'Tôi là một người rất kiên quyết2',
        'Tôi giỏi thuyết phục mọi người2',
        'Tôi có xu hướng trở thành một người thân thiện2',
      ],
    },
    {
      id: 3,
      answers: [
        'Tôi có xu hướng là một người thận trọng3',
        'Tôi là một người rất kiên quyết3',
        'Tôi giỏi thuyết phục mọi người3',
        'Tôi có xu hướng trở thành một người thân thiện3',
      ],
    },
    {
      id: 4,
      answers: [
        'Tôi có xu hướng là một người thận trọng4',
        'Tôi là một người rất kiên quyết4',
        'Tôi giỏi thuyết phục mọi người4',
        'Tôi có xu hướng trở thành một người thân thiện4',
      ],
    },
    {
      id: 5,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },

    {
      id: 6,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 7,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 8,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 9,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 10,
      answers: [
        'Tôi có xu hướng là một người thận trọng10',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 11,
      answers: [
        'Tôi có xu hướng là một người thận trọng11',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 12,
      answers: [
        'Tôi có xu hướng là một người thận trọng12',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 13,
      answers: [
        'Tôi có xu hướng là một người thận trọng13',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 14,
      answers: [
        'Tôi có xu hướng là một người thận trọng14',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 15,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 16,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 17,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 18,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 19,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 20,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 21,
      answers: [
        'Tôi có xu hướng là một người thận trọng21',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 22,
      answers: [
        'Tôi có xu hướng là một người thận trọng22',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 23,
      answers: [
        'Tôi có xu hướng là một người thận trọng23',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 24,
      answers: [
        'Tôi có xu hướng là một người thận trọng24',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 25,
      answers: [
        'Tôi có xu hướng là một người thận trọng25',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 26,
      answers: [
        'Tôi có xu hướng là một người thận trọng26',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 27,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 28,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 29,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 30,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
    {
      id: 31,
      answers: [
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
  ];

  questionSlice = this.questions.slice(0, 10);
  totalPage = 0;
  currentQuestion = 0;
  currentPage = 0;

  userAnswers: { id: number; answers: { right: string; wrong: string } }[] = [];

  chooseAnswer(i: number, j: number, event: any) {
    var activeSame = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .checkmark.active-same`
    );

    var activeSameRow = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .answer-row:nth-child(${
        j + 1
      }) .checkmark.active-same`
    );

    var activeDiffer = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .checkmark-differ.active-difference`
    );

    var activeDifferRow = document.querySelector(
      `.question-container:nth-child(${
        i + 1
      }) .answer-container .answer-row:nth-child(${
        j + 1
      }) .checkmark-differ.active-difference`
    );

    if (event.target.classList.contains('checkmark-differ')) {
      console.log('hahaah');
      activeSameRow?.classList.remove('active-same');
      activeDiffer?.classList.remove('active-difference');
    } else {
      activeSame?.classList.remove('active-same');
      activeDifferRow?.classList.remove('active-difference');
    }
    this.clickCheckBox(event);
  }

  storeUserAnswer(index: number, answerText: any, check: string) {
    if (check === 'right') {
      this.userAnswers[index].answers.right = answerText;
    } else {
      this.userAnswers[index].answers.wrong = answerText;
    }
  }

  //them active
  clickCheckBox(event: any) {
    if (event.target.classList.contains('checkmark-differ')) {
      event.target.classList.add('active-difference');
    } else {
      event.target.classList.add('active-same');
    }
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;

    var startIndex = event.pageIndex * event.pageSize;
    var endIndex = startIndex + event.pageSize;
    if (endIndex > event.length) {
      endIndex = event.length;
    }
    this.questionSlice = this.questions.slice(startIndex, endIndex);

    var userAnswerSlice = this.userAnswers.slice(startIndex, endIndex);
    setTimeout(() => {
      for (var i = 0; i < userAnswerSlice.length; i++) {
        for (var j = 0; j < 4; j++) {
          var answerText = document.querySelector(
            `.question-container:nth-child(${
              i + 1
            }) .answer-container .answer-row:nth-child(${j + 1}) .answer`
          )?.textContent;

          var answerSame = document.querySelector(
            `.question-container:nth-child(${
              i + 1
            }) .answer-container .answer-row:nth-child(${j + 1}) .checkmark`
          );

          var answerDiffer = document.querySelector(
            `.question-container:nth-child(${
              i + 1
            }) .answer-container .answer-row:nth-child(${
              j + 1
            }) .checkmark-differ`
          );

          if (userAnswerSlice[i].answers.right === answerText) {
            answerSame?.classList.add('active-same');
            answerDiffer?.classList.add('disable');
          }

          if (userAnswerSlice[i].answers.wrong === answerText) {
            answerDiffer?.classList.add('active-difference');
            answerSame?.classList.add('disable');
          }
        }
      }
    }, 2);

    setTimeout(() => {
      document.querySelector('.content')?.scrollIntoView();
    }, 1);
  }
}
