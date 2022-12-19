import { PageEvent } from '@angular/material/paginator';
import { MbtiPostQuizOption } from './../../_model/mbti-quiz/mbti-quiz-option';
import {
  MbtiQuizQuestion,
  MbtiPostQuizQuestion,
} from './../../_model/mbti-quiz/mbti-quiz-question';
import { SharedService } from './../../_services/shared.service';
import {
  MbtiQuizCollection,
  MbtiPostQuizCollection,
} from './../../_model/mbti-quiz/mbti-quiz-collection';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// mbti-result
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  quizCollections: MbtiQuizCollection = new MbtiQuizCollection();
  ngAfterViewInit() {}
  currentQuestion = 0;
  questionSlice: any;
  totalPage = 0;
  currentPage = 0;
  countAnswerValue = 0;
  hamburgerFlag: boolean = false;
  pageObject = {
    previouPageIndex: 0,
    pageIndex: 0,
    pageSize: 10,
    Lenghth: this.quizCollections.questions.length,
  };
  currentRoutes: any = [];

  pageEvent?: PageEvent;
  datasource?: null;
  pageIndex?: number;
  pageSize?: number;
  length?: number;

  postAnswer: MbtiPostQuizCollection = new MbtiPostQuizCollection();

  constructor(
    private shareService: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.getData(id as unknown as number);
  }

  checked() {}

  getData(id: number) {
    var count = 0;
    this.shareService.takingTestGuest(id).subscribe({
      next: (data) => {
        this.quizCollections = data;
        this.quizCollections.questions.forEach((question) => {
          question.index = count++;
        });
        this.questionSlice = this.quizCollections.questions.slice(0, 10);
        this.getTotal();
      },
    });
  }

  getTotal() {
    var totalQuestions = this.quizCollections.questions.length;
    var sliceQuestion = this.questionSlice.length;
    this.totalPage =
      (totalQuestions - (totalQuestions % sliceQuestion)) / sliceQuestion;
    if (totalQuestions % sliceQuestion !== 0) {
      this.totalPage++;
    }
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    var startIndex = event.pageIndex * event.pageSize;
    var endIndex = startIndex + event.pageSize;
    if (endIndex > event.length) {
      endIndex = event.length;
    }
    this.questionSlice = this.quizCollections.questions.slice(
      startIndex,
      endIndex
    );
    setTimeout(() => {
      document.querySelector('.content-row')?.scrollIntoView();
    }, 1);

    //lấy dữ liệu hiển thị
    setTimeout(() => {
      for (let i = 0; i < this.questionSlice.length; i++) {
        for (let j = 0; j < this.postAnswer.questions.length; j++) {
          if (
            this.questionSlice[i].id == this.postAnswer.questions[j].questionId
          ) {
            var input = document.getElementById(
              `${this.postAnswer.questions[j].options[0].optionId}`
            ) as HTMLInputElement;
            input.checked = true;
          }
        }
      }
    }, 1);

    this.pageObject = event;
  }

  storeUserAnswer(event: any, i: number, indexQuestion: number) {
    var question: MbtiPostQuizQuestion;
    var options: MbtiPostQuizOption[] = [];
    options.push({
      optionId: event.target.id,
      optionValue: event.target.value,
    });

    var param = document.querySelector(
      `.question-container:nth-child(${i + 1}) param`
    ) as HTMLInputElement;

    question = {
      questionId: param?.id.replace('p', '') as unknown as number,
      questionvalue: param.value,
      options: options,
    };

    this.postAnswer.testId = this.quizCollections.id;

    const index = this.postAnswer.questions.findIndex(
      (e) => e.questionId === question.questionId
    );
    if (index > -1) {
      this.postAnswer.questions[i] = question;
    } else {
      this.postAnswer.questions.push(question);
    }

    if (
      this.postAnswer.questions.length === this.quizCollections.questions.length
    ) {
      var btnSubmit = document.querySelector('.submit-btn');
      btnSubmit?.classList.add('active');
    }

    document
      .querySelector(`.question-item:nth-child(${indexQuestion}`)
      ?.classList.add('active');

    console.log(this.postAnswer);
  }

  hamburgerClick() {
    this.hamburgerFlag = !this.hamburgerFlag;
    document.querySelector('.sidebar-container')?.classList.toggle('active');
    document.querySelector('.main-content')?.classList.toggle('active');
    document.querySelector('.nav-row .hamburger')?.classList.toggle('active');
    document.querySelectorAll('.nav-item-title')?.forEach((item) => {
      item.classList.toggle('active');
    });
  }

  chooseQuestion(index: number) {
    this.pageObject.pageIndex = Math.floor(index / 10);
    this.changePage(this.pageObject);
  }

  submitAnswer() {
    this.router.navigate([
      'mbti-result/',
      { postAnswer: JSON.stringify(this.postAnswer) },
    ]);
  }
}
