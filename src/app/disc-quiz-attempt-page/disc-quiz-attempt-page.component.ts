import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-disc-quiz-attempt-page',
  templateUrl: './disc-quiz-attempt-page.component.html',
  styleUrls: ['./disc-quiz-attempt-page.component.scss'],
})
export class DiscQuizAttemptPageComponent implements OnInit {
  constructor() {}

  @ViewChild('left') left!: ElementRef;
  @ViewChild('right') right!: ElementRef;
  @ViewChild('coin') coin!: ElementRef;

  buttonTrue = false;
  buttonFalse = false;
  buttonNone = true;

  currentQuestion = 0;
  totalQuestion = 0;

  questionsSet = [
    {
      id: 1,
      answer: [
        'Enthusiastic: hăng hái, nhiệt tình, say mê',
        'Daring: táo bạo và cả gan',
        'Diplomatic: có tài ngoại giao',
        'Satisfied: dễ thỏa mãn',
      ],
    },
    {
      id: 2,
      answer: [
        'Cautious: thận trọng, cẩn trọng',
        'Determined: quả quyết, kiên quyết',
        'Convincing: có sức thuyết phục',
        'Good natured: có tính thiện, bản chất tốt',
      ],
    },
    {
      id: 3,
      answer: [
        'Friendly: thân thiện',
        'Accurate: chính đáng, xác đáng',
        'Outspoken: nói thẳng, trực tính',
        'Calm: điềm tĩnh',
      ],
    },
    {
      id: 4,
      answer: [
        'Talkative: nói nhiều',
        'Controlled: có kiểm soát, tiết chế',
        'Conventional: nói theo thói quen',
        'Decisive: kiên quyết, quả quyết, dứt khoát',
      ],
    },
    {
      id: 5,
      answer: [
        'Adventurous: liều lĩnh, thích phiêu lưu, mạo hiểm',
        'Insightful: sâu sắc, sáng suốt',
        'Out-going: dễ gần, thoải mái, chan hòa',
        'Moderate: ôn hòa',
      ],
    },
  ];

  userAnswer: { id: number; answer: { right: string; wrong: string } }[] = [];

  ngOnInit() {
    this.start();
  }
  ngAfterViewInit() {
    if (this.currentQuestion === 1) {
      this.left.nativeElement.style.visibility = 'hidden';
    }
    this.checkAnswer();
  }

  start() {
    this.currentQuestion = 1;
    this.totalQuestion = this.questionsSet.length;

    for (let i = 0; i < this.questionsSet.length; i++) {
      this.userAnswer.push({
        id: this.questionsSet[i].id,
        answer: {
          right: '',
          wrong: '',
        },
      });
    }
  }

  disableButton(message: any) {
    if (message === 'none') {
      return;
    }
    let button = document.getElementsByClassName(
      'button-' + message
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (var i = 0; i < button.length; i++) {
      button[i].hidden = true;
    }
  }

  activateButton() {
    this.buttonFalse = false;
    var buttonsFalse = document.getElementsByClassName(
      'button-false'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (var i = 0; i < buttonsFalse.length; i++) {
      if (buttonsFalse[i].classList.contains('active')) {
        this.buttonFalse = true;
        buttonsFalse[i].hidden = false;
        break;
      }
    }

    this.buttonTrue = false;
    var buttonsTrue = document.getElementsByClassName(
      'button-true'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (var i = 0; i < buttonsTrue.length; i++) {
      if (buttonsTrue[i].classList.contains('active')) {
        this.buttonTrue = true;
        buttonsTrue[i].hidden = false;
        break;
      }
    }

    if (this.buttonFalse === false) {
      for (var i = 0; i < buttonsFalse.length; i++) {
        buttonsFalse[i].hidden = false;
      }
    }

    if (this.buttonTrue === false) {
      for (var i = 0; i < buttonsTrue.length; i++) {
        buttonsTrue[i].hidden = false;
      }
    }

    var buttonsNone = document.getElementsByClassName(
      'button-none'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    if (this.buttonTrue === true && this.buttonFalse === true) {
      for (var i = 0; i < buttonsNone.length; i++) {
        if (buttonsNone[i].classList.contains('active')) {
          buttonsNone[i].hidden = true;
        }
      }
    } else {
      for (var i = 0; i < buttonsNone.length; i++) {
        if (buttonsNone[i].classList.contains('active')) {
          buttonsNone[i].hidden = false;
        }
      }
    }
  }

  messageClick(event: any) {
    var round = document.querySelectorAll('.round') as NodeListOf<HTMLElement>;
    var buttonFalse = document.querySelectorAll('.button-false');
    var buttonTrue = document.querySelectorAll('.button-true');
    var buttonNone = document.querySelectorAll('.button-none');
    this.disableButton(event.message);
    if (event.message === 'false') {
      this.activateButton();
      this.storeUserAnswer(event);
      this.checkAnswer();
      this.checkDone();
    } else if (event.message === 'true') {
      this.activateButton();
      this.storeUserAnswer(event);
      this.checkAnswer();
      this.checkDone();
    } else {
      this.activateButton();
      this.storeUserAnswer(event);
      this.checkAnswer();
      this.checkDone();
    }
  }

  nextQuestion() {
    this.currentQuestion++;
    if (this.currentQuestion === this.questionsSet.length) {
      this.right.nativeElement.style.visibility = 'hidden';
    } else {
      this.left.nativeElement.style.visibility = 'visible';
    }

    setTimeout(() => this.changCoin(), 1);
    this.chooseQuestion(this.currentQuestion - 1);
  }

  prevQuestion() {
    this.currentQuestion--;
    if (this.currentQuestion === 1) {
      this.left.nativeElement.style.visibility = 'hidden';
    } else {
      this.right.nativeElement.style.visibility = 'visible';
    }
    setTimeout(() => this.changCoin(), 1);
    this.chooseQuestion(this.currentQuestion - 1);
  }

  storeUserAnswer(event: any) {
    if (event.message === 'false') {
      this.userAnswer[this.currentQuestion - 1].answer.wrong = event.text;
      if (
        this.userAnswer[this.currentQuestion - 1].answer.wrong ===
        this.userAnswer[this.currentQuestion - 1].answer.right
      ) {
        this.userAnswer[this.currentQuestion - 1].answer.right = '';
      }
    } else if (event.message === 'true') {
      this.userAnswer[this.currentQuestion - 1].answer.right = event.text;
      if (
        this.userAnswer[this.currentQuestion - 1].answer.wrong ===
        this.userAnswer[this.currentQuestion - 1].answer.right
      ) {
        this.userAnswer[this.currentQuestion - 1].answer.wrong = '';
      }
    } else if (event.message === 'none') {
      if (
        this.userAnswer[this.currentQuestion - 1].answer.wrong === event.text
      ) {
        this.userAnswer[this.currentQuestion - 1].answer.wrong = '';
      }
      if (
        this.userAnswer[this.currentQuestion - 1].answer.right === event.text
      ) {
        this.userAnswer[this.currentQuestion - 1].answer.right = '';
      }
    }
  }

  changCoin() {
    var coin = document.querySelectorAll<HTMLElement>('.coin');
    var answer = document.querySelectorAll<HTMLElement>('.answer');
    var buttonsTrue = document.querySelectorAll<HTMLElement>('.button-true');
    var buttonsFalse = document.querySelectorAll<HTMLElement>('.button-false');
    var buttonsNone = document.querySelectorAll<HTMLElement>('.button-none');

    var iconsFalse = document.querySelectorAll<HTMLElement>(
      '.button-false .icon'
    );
    var iconsTrue =
      document.querySelectorAll<HTMLElement>('.button-true .icon');
    var iconsNone =
      document.querySelectorAll<HTMLElement>('.button-none .icon');
    this.buttonFalse = false;
    this.buttonTrue = false;
    for (let i = 0; i < answer.length; i++) {
      if (
        answer[i].textContent?.trim() ==
        this.userAnswer[this.currentQuestion - 1].answer.wrong.trim()
      ) {
        this.disableButton('false');
        buttonsFalse[i].hidden = false;
        buttonsFalse[i].classList.add('active');
        buttonsNone[i].classList.remove('active');
        coin[i].classList.add('coin-wrong');
        answer[i].classList.add('white-font');
        buttonsFalse[i].style.background =
          'linear-gradient(to right, 	#ba3030, #ce2525)';
        iconsFalse[i].classList.add('white-font');
        this.buttonFalse = true;
      }
      if (
        answer[i].textContent?.trim() ==
        this.userAnswer[this.currentQuestion - 1].answer.right.trim()
      ) {
        this.disableButton('true');
        buttonsTrue[i].hidden = false;
        buttonsTrue[i].classList.add('active');
        buttonsNone[i].classList.remove('active');
        coin[i].classList.add('coin-right');
        answer[i].classList.add('white-font');
        answer[i].classList.add('white-font');
        buttonsTrue[i].style.background =
          'linear-gradient(135deg, #01a29d, #a0feb0)';
        iconsTrue[i].classList.add('white-font');

        this.buttonTrue = true;
      }

      for (let i = 0; i < answer.length; i++) {
        if (this.buttonTrue === true && this.buttonFalse === true) {
          if (buttonsNone[i].classList.contains('active')) {
            buttonsNone[i].hidden = true;
          }
        } else {
          if (buttonsNone[i].classList.contains('active')) {
            buttonsNone[i].hidden = false;
          }
        }
      }
    }
  }

  checkAnswer() {
    for (var i = 0; i < this.userAnswer.length; i++) {
      let question = document.querySelector('.question' + i);
      if (question != null) {
        if (this.userAnswer[i].answer.right !== '') {
          question.classList.add('question-done');
          question.classList.remove('question-not-done');
        } else if (this.userAnswer[i].answer.wrong !== '') {
          question.classList.add('question-done');
          question.classList.remove('question-not-done');
        } else {
          question.classList.add('question-not-done');
          question.classList.remove('question-done');
        }
      }
    }
    var questions = document.querySelectorAll('.question');
    questions[this.currentQuestion - 1].classList.remove('question-not-done');
    questions[this.currentQuestion - 1].classList.remove('question-done');
  }

  chooseQuestion(numberQuestion: any) {
    this.currentQuestion = numberQuestion + 1;
    this.checkAnswer();
    if (this.currentQuestion == 1) {
      this.left.nativeElement.style.visibility = 'hidden';
    } else {
      this.left.nativeElement.style.visibility = 'visible';
    }

    if (this.currentQuestion === this.questionsSet.length) {
      this.right.nativeElement.style.visibility = 'hidden';
    } else {
      this.right.nativeElement.style.visibility = 'visible';
    }
    setTimeout(() => this.changCoin());
  }

  checkDone() {
    let checkDone = false;
    for (let i = 0; i < this.userAnswer.length; i++) {
      if (
        this.userAnswer[i].answer.right != '' ||
        this.userAnswer[i].answer.wrong != ''
      ) {
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
}
