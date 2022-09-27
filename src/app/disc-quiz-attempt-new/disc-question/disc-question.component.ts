import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-question',
  templateUrl: './disc-question.component.html',
  styleUrls: ['./disc-question.component.scss'],
})
export class DiscQuestionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
        'Tôi có xu hướng là một người thận trọng',
        'Tôi là một người rất kiên quyết',
        'Tôi giỏi thuyết phục mọi người',
        'Tôi có xu hướng trở thành một người thân thiện',
      ],
    },
  ];
  currentQuestion = 0;
  userAnswers: { id: number; answer: string }[] = [];

  chooseAnswer(i: number, j: number, event: any) {
    if (event.target.classList.contains('checkmark-differ')) {
      var activeAnswerDiffer = document.querySelector(
        `.question-container:nth-child(${
          i + 1
        }) .answer-container .checkmark-differ.active-difference`
      );
      activeAnswerDiffer?.classList.remove('active-difference');
    } else {
      var activeAnswerSame = document.querySelector(
        `.question-container:nth-child(${
          i + 1
        }) .answer-container .checkmark.active-same`
      );
      activeAnswerSame?.classList.remove('active-same');
    }

    this.clickCheckBox(event);
    this.disableAnswer(i, j, event);

    // var userAnswer = document.querySelector(
    //   `.question-container:nth-child(${
    //     i + 1
    //   }) .answer-container .answer:nth-child(${j + 1})`
    // );
    // userAnswer?.classList.add('active');

    // var answerText = document.querySelector(
    //   `.question-container:nth-child(${
    //     i + 1
    //   }) .answer-container .answer:nth-child(${j + 1}) .answer-text`
    // ) as HTMLElement;
    // this.currentQuestion = i + 1;
    // this.storeUserAnswer(i, answerText?.innerText);
    // this.changeQuestion(i + 1, 'click');

    // var questionNumber = document.querySelector(
    //   `.question-number:nth-child(${i + 1})`
    // );
    // questionNumber?.classList.add('done');
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

  onResize(event: any) {
    this.changeQuestion(this.currentQuestion + 1, 'change');
  }

  clickCheckBox(event: any) {
    if (event.target.classList.contains('checkmark-differ')) {
      event.target.classList.add('active-difference');
    } else {
      event.target.classList.add('active-same');
    }
  }

  disableAnswer(i: number, j: number, event: any) {
    var answerDiffer = document.querySelector(
      `.question-container:nth-child(${i + 1}) .answer-row:nth-child(${
        j + 1
      }) .checkmark-differ`
    );
    var answerSame = document.querySelector(
      `.question-container:nth-child(${i + 1}) .answer-row:nth-child(${
        j + 1
      }) .checkmark`
    );

    var answerDifferAll = document.querySelectorAll(
      `.question-container:nth-child(${i + 1}) .checkmark-differ`
    );
    var answerSameAll = document.querySelectorAll(
      `.question-container:nth-child(${i + 1}) .answer-row .checkmark`
    );

    if (event.target.classList.contains('checkmark-differ')) {
      answerDifferAll.forEach((differ) => {
        differ.classList.remove('disable');
      });
      answerSame?.classList.add('disable');
    } else {
      answerSameAll.forEach((same) => {
        same.classList.remove('disable');
      });
      answerDiffer?.classList.add('disable');
    }

    console.log(event.target.classList);
  }
}
