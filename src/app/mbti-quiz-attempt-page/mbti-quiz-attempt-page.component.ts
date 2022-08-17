import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-attempt-page',
  templateUrl: './mbti-quiz-attempt-page.component.html',
  styleUrls: ['./mbti-quiz-attempt-page.component.scss'],
})
export class MbtiQuizAttemptPageComponent implements OnInit {
  @ViewChild('cardFirst') cardFirst!: ElementRef;
  @ViewChild('answerLeft') answerLeft!: ElementRef;
  @ViewChild('answerRight') answerRight!: ElementRef;
  @ViewChild('dragCard') dragCard!: CdkDrag;

  currentQuestion = 0;
  currentQuestionView = 1;
  totalQuestion = 0;
  currentTag = 0;
  questions = [
    {
      question: 'Trong một buổi tiệc bạn sẽ?',
      answer: {
        left: 'Nói chuyện với tất cả mọi người, kể cả người lạ',
        right: 'Nói chuyện với những người bạn quen',
      },
      img: 'assets/img/',
      category: 0,
    },
    {
      question: 'Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?',
      answer: {
        left: 'Thực tế',
        right: 'Sáng tạo',
      },
      img: 'assets/img/',
      category: 0,
    },
    {
      question: 'Bạn nghĩ tình huống nào tồi tệ hơn?',
      answer: {
        left: 'Đầu óc của bạn cứ “bay bổng trên mây',
        right: 'Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi',
      },
      img: 'assets/img/',
      category: 0,
    },
    {
      question: 'Bạn sẽ bị ấn tượng hơn với',
      answer: {
        left: 'Các nguyên tắc',
        right: 'Những cảm xúc',
      },
      img: 'assets/img/',
      category: 0,
    },
    {
      question: 'a',
      answer: {
        left: 'test',
        right: 'test2',
      },
      img: 'assets/img/',
      category: 1,
    },
    {
      question: 'Khi quyết định việc gì đó, bạn thường hay dựa vào:',
      answer: {
        left: 'Sự thuyết phục',
        right: 'Sự đồng cảm',
      },
      img: 'assets/img/',
      category: 1,
    },
    {
      question: 'Bạn thích làm việc theo kiểu nào nhiều hơn?',
      answer: {
        left: 'Theo đúng thời hạn',
        right: 'Tùy hứng',
      },
      img: 'assets/img/',
      category: 1,
    },
    {
      question: 'Bạn có khuynh hướng đưa ra các lựa chọn',
      answer: {
        left: 'Rất cẩn thận',
        right: 'Phần nào theo cảm nhận',
      },
      img: 'assets/img/',
      category: 1,
    },
    {
      question: 'Tại các bữa tiệc, bạn thường:',
      answer: {
        left: 'Ở lại tới cùng và cảm thấy càng lúc càng hào hứng',
        right: 'Ra về sớm vì cảm thấy mệt mỏi dần',
      },
      img: 'assets/img/',
      category: 1,
    },
    {
      question: 'Kiểu người nào sẽ thu hút bạn hơn?',
      answer: {
        left: 'Người thực tế và có lý lẽ',
        right: 'Người giàu trí tưởng tượng',
      },
      img: 'assets/img/',
      category: 2,
    },
    {
      question: 'Điều nào khiến bạn thấy thích thú hơn?',
      answer: {
        left: 'Những điều thực tế',
        right: 'Những ý tưởng khả thi',
      },
      img: 'assets/img/',
      category: 2,
    },
    {
      question:
        'Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?',
      answer: {
        left: 'Luật lệ và nguyên tắc',
        right: 'Hoàn cảnh',
      },
      img: 'assets/img/',
      category: 2,
    },
    {
      question:
        'Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?',
      answer: {
        left: 'Tiếp cận theo hướng khách quan',
        right: 'Tiếp cận theo hướng sử dụng trải nghiệm cá nhân',
      },
      img: 'assets/img/',
      category: 2,
    },
    {
      question: 'Phong cách của bạn nghiêng về hướng nào hơn?',
      answer: {
        left: 'Đúng giờ, nghiêm túc',
        right: 'Nhàn nhã, thoải mái',
      },
      img: 'assets/img/',
      category: 3,
    },
    {
      question: 'Bạn cảm thấy không thoải mái khi có những việc:',
      answer: {
        left: 'Chưa hoàn thiện',
        right: 'Đã quá hoàn thiện',
      },
      img: 'assets/img/',
      category: 3,
    },
    {
      question: 'Trong các mối quan hệ xã hội, bạn thường',
      answer: {
        left: 'Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người',
        right: 'Thường biết thông tin sau những người khác',
      },
      img: 'assets/img/',
      category: 3,
    },
    {
      question: 'Với các công việc thông thường, bạn nghiêng về cách:',
      answer: {
        left: 'Làm theo cách thông thường',
        right: 'Làm theo cách của riêng mình',
      },
      img: 'assets/img/',
      category: 3,
    },
  ];

  tags = ['IE', 'SI', 'TF', 'JP'];

  userAnswer: { index: number; userAnswer: string; answered?: boolean }[] = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.reset();
      this.start();
    }, 100);
  }

  ngAfterViewInit() {}

  start() {
    for (let i = 0; i < this.questions.length; i++) {
      this.userAnswer.push({
        index: i,
        userAnswer: '',
        answered: false,
      });
    }

    let set = document.querySelector('.set0');
    if (set != null) {
      set.classList.remove('font-light');
    }

    //thay doi total question
    for (let i = 0; i < this.questions.length; i++) {
      if (0 === this.questions[i].category) {
        this.totalQuestion++;
      }
    }

    this.checkAnswer();
    this.chooseQuestion(0);
  }

  //reset drag and drop
  reset() {
    this.dragCard.reset();
  }

  changeTag(tag: number) {
    this.currentQuestionView = 1;

    //in dam selected tag
    let sets = document.querySelectorAll('.set');
    for (let i = 0; i < sets.length; i++) {
      sets[i].classList.add('font-light');
    }
    let set = document.querySelector('.set' + tag);
    if (set != null) {
      set.classList.remove('font-light');
    }

    //thay doi total question
    this.totalQuestion = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (tag === this.questions[i].category) {
        this.totalQuestion++;
      }
    }

    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category === tag) {
        this.currentTag = tag;
        this.currentQuestion = i;
        setTimeout(() => {
          this.chooseQuestion(this.currentQuestion);
        }, 1);
        return;
      }
    }
  }

  //tang currentQuestion va luu user answer
  storedQuestion(answer: string) {
    for (var i = 0; i < this.userAnswer.length; i++) {
      if (this.userAnswer[i].index === this.currentQuestion) {
        this.userAnswer[i] = {
          index: this.currentQuestion,
          userAnswer: answer,
          answered: true,
        };
      }
    }
  }

  //kiem tra nhung cau da chon
  checkAnswer() {
    for (var i = 0; i < this.userAnswer.length; i++) {
      let question = document.querySelector('.question' + i);
      if (question != null) {
        if (this.userAnswer[i].answered) {
          question.classList.add('question-done');
          question.classList.remove('question-not-done');
        } else if (!this.userAnswer[i].answered) {
          question.classList.add('question-not-done');
          question.classList.remove('question-done');
        }
      }
    }
  }

  checkSubmit() {
    let checkDone = false;
    let btnSubmit = document.querySelector('.btn-submit');
    for (let i = 0; i < this.userAnswer.length; i++) {
      if (!this.userAnswer[i].answered) {
        checkDone = false;
      } else {
        checkDone = true;
      }
    }
    if (checkDone) {
      btnSubmit?.classList.add('btn-submit-show');
    }
  }

  checkSetDone() {
    let checkAnswer = false;
    let sets = document.querySelectorAll('.set');
    for (let i = 0; i < this.userAnswer.length; i++) {
      if (this.questions[i].category == this.currentTag) {
        if (this.userAnswer[i].answered) {
          checkAnswer = true;
        } else {
          checkAnswer = false;
        }
      }
    }

    if (checkAnswer === true) {
      sets[this.currentTag].classList.add('set-done');
    } else {
      sets[this.currentTag].classList.remove('set-done');
    }
  }

  chooseQuestion(number: any) {
    //hien thi cau hien tai(currentQuestionView)
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.currentTag == this.questions[i].category) {
        count2 = i;
        break;
      } else {
        this.currentQuestion = i + 1;
        count++;
      }
    }
    this.currentQuestionView = number - count + 1;

    //doi vien cho button chon cau
    this.checkAnswer();
    let question = document.querySelector('.question' + number);
    if (question != null) {
      question.classList.remove('question-not-done');
      question.classList.remove('question-done');
    }
    this.currentQuestion = number;

    //giu nguyen cau cuoi cua moi category
    if (this.currentQuestionView > this.totalQuestion) {
      this.currentQuestionView = this.totalQuestion;
      this.currentQuestion = number - 1;
    }

    //doi mau nhung cau da chon
    setTimeout(() => {
      if (this.answerRight != undefined && this.answerLeft != undefined) {
        if (
          this.userAnswer[this.currentQuestion].userAnswer ===
          this.answerLeft.nativeElement.innerText
        ) {
          this.answerLeft.nativeElement.style.color = '#15b1aa';
          this.answerRight.nativeElement.style.color = 'black';
        } else if (
          this.userAnswer[this.currentQuestion].userAnswer ===
          this.answerRight.nativeElement.innerText
        ) {
          this.answerRight.nativeElement.style.color = '#15b1aa';
          this.answerLeft.nativeElement.style.color = 'black';
        } else {
          this.answerLeft.nativeElement.style.color = 'black';
          this.answerRight.nativeElement.style.color = 'black';
        }
      }
    }, 1);
  }

  clickAnswerLeft() {
    var x = window.matchMedia('(max-width: 850px)');
    if (!x.matches) {
      this.cardFirst.nativeElement.classList.add('move-left');
    }
    setTimeout(
      () => this.cardFirst.nativeElement.classList.remove('move-left'),
      1000
    );

    this.storedQuestion(this.answerLeft.nativeElement.innerText);
    this.checkAnswer();
    this.chooseQuestion(++this.currentQuestion);
    this.checkSubmit();
    this.checkSetDone();
  }

  clickAnswerRight() {
    var x = window.matchMedia('(max-width: 850px)');
    if (!x.matches) {
      this.cardFirst.nativeElement.classList.add('move-right');
    }
    setTimeout(
      () => this.cardFirst.nativeElement.classList.remove('move-right'),
      1000
    );

    if (this.answerRight != undefined) {
      this.storedQuestion(this.answerRight.nativeElement.innerText);
    }
    this.checkAnswer();
    this.chooseQuestion(++this.currentQuestion);
    this.checkSubmit();
    this.checkSetDone();
  }

  hoverLeft() {
    var x = window.matchMedia('(max-width: 850px)');
    if (!x.matches) {
      this.cardFirst.nativeElement.classList.add('hoverRotateLeft');
    }
  }

  unHoverLeft() {
    this.cardFirst.nativeElement.classList.remove('hoverRotateLeft');
  }

  hoverRight() {
    var x = window.matchMedia('(max-width: 850px)');
    if (!x.matches) {
      this.cardFirst.nativeElement.classList.add('hoverRotateRight');
    }
  }

  unHoverRight() {
    this.cardFirst.nativeElement.classList.remove('hoverRotateRight');
  }

  dragPosition = { x: 0, y: 0 };

  beginX: any;
  drag() {
    this.beginX = this.cardFirst.nativeElement.getBoundingClientRect().left;
    this.cardFirst.nativeElement.classList.add('no-transition');
  }

  drop(event: any) {
    var x = this.cardFirst.nativeElement.getBoundingClientRect().left;

    //tha ben trai
    if (x - this.beginX < -150) {
      this.clickAnswerLeft();
    }
    //tha ben phai
    if (x - this.beginX > 150) {
      this.clickAnswerRight();
    }
    if (x - this.beginX >= -150 && x - this.beginX <= 150) {
      this.cardFirst.nativeElement.style.transform = 'none';
    }

    //quay ve vi tri ban dau
    setTimeout(() => {
      event.source._dragRef.reset();
    }, 800);
    this.cardFirst.nativeElement.classList.remove('no-transition');
  }
}
