import { MatPaginator } from '@angular/material/paginator';
import { BigFivePostQuizOption } from './../../_model/big-five-quiz/big-five-option';
import { BigFivePostQuizQuestion } from './../../_model/big-five-quiz/big-five-question';
import {
  BigFiveQuizCollectionModel,
  BigFivePostQuizCollection,
} from './../../_model/big-five-quiz/big-five-collection';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from './../../_services/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bf-question',
  templateUrl: './bf-question.component.html',
  styleUrls: ['./bf-question.component.scss'],
})
export class BfQuestionComponent implements OnInit {
  // questionSlice = this.questions.slice(0, 10);
  totalPage = 0;
  currentPage = 0;
  userAnswer: { id: number; answer: string }[] = [];
  quizCollections?: BigFiveQuizCollectionModel;
  postAnswer: BigFivePostQuizCollection = {
    testId: 0,
    questions: [],
  };
  questionSlice: any;
  pageObject = {
    previouPageIndex: 0,
    pageIndex: 0,
    pageSize: 10,
    Lenghth: this.quizCollections?.questions.length,
  };
  hamburgerFlag: boolean = false;
  length = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private shareService: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData(2004);
    this.postAnswer!.testId = 0;
  }

  getData(id: number) {
    var count = 0;
    this.shareService.takingTestGuest(id).subscribe({
      next: (data) => {
        this.quizCollections = data;
        this.quizCollections?.questions.forEach((question) => {
          question.index = count++;
        });
        this.questionSlice = this.quizCollections?.questions.slice(0, 10);
        this.getTotal();
      },
    });
  }

  getTotal() {
    var totalQuestions = this.quizCollections!.questions.length;
    var sliceQuestion = this.questionSlice.length;
    this.totalPage =
      (totalQuestions - (totalQuestions % sliceQuestion)) / sliceQuestion;
    if (totalQuestions % sliceQuestion !== 0) {
      this.totalPage++;
    }

    this.length = this.quizCollections?.questions.length as unknown as number;
  }

  chooseAnswer(i: number, event: any, level: string, j: number) {
    var levelAll = document.querySelectorAll(
      `.question:nth-child(${i + 1}) .checkmark`
    );

    levelAll.forEach((level) => {
      level.classList.remove('active');
    });
    this.clickCheckBox(event);
    this.storeUserAnswer(event, i, level, j);
  }

  clickCheckBox(event: any) {
    event.target.classList.add('active');
  }

  storeUserAnswer(event: any, i: number, level: string, j: number) {
    this.postAnswer!.testId = this.quizCollections!.id as unknown as number;

    var question: BigFivePostQuizQuestion;
    var options: BigFivePostQuizOption[] = [];
    var paramAnswer = document.querySelector(
      `.question:nth-child(${i + 1}) .input-container:nth-child(${
        j + 1
      }) .param-answer`
    ) as HTMLInputElement;
    options.push({
      optionId: paramAnswer.id as unknown as number,
      optionValue: paramAnswer.value,
    });
    var param = document.querySelector(
      `.question-container .question:nth-child(${i + 1}) param`
    ) as HTMLInputElement;
    question = {
      questionId: param?.id.replace('p', '') as unknown as number,
      questionValue: param.value,
      options: options,
    };

    const index = this.postAnswer!.questions.findIndex(
      (e) => e.questionId === question.questionId
    );
    if (index > -1) {
      this.postAnswer!.questions[i] = question;
    } else {
      this.postAnswer!.questions.push(question);
    }
    if (
      this.postAnswer!.questions.length ===
      this.quizCollections!.questions.length
    ) {
      var btnSubmit = document.querySelector('.submit-btn');
      btnSubmit?.classList.add('active');
    }
    document
      .querySelector(
        `.question-item:nth-child(${i + this.pageObject.pageIndex * 10 + 1}`
      )
      ?.classList.add('active');

    var questionItems = document.querySelectorAll('.question-item.active');
    var btnSubmit = document.querySelector('.view-result');
    if (questionItems.length === this.quizCollections?.questions.length) {
      btnSubmit?.classList.add('active');
    } else {
      btnSubmit?.classList.remove('active');
    }

    console.log(this.postAnswer);
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    var startIndex = event.pageIndex * event.pageSize;
    var endIndex = startIndex + event.pageSize;
    if (endIndex > event.length) {
      endIndex = event.length;
    }
    this.questionSlice = this.quizCollections?.questions.slice(
      startIndex,
      endIndex
    );
    setTimeout(() => {
      document.querySelector('.content-row')?.scrollIntoView();
    }, 1);

    //lấy dữ liệu hiển thị
    setTimeout(() => {
      for (let i = 0; i < this.questionSlice.length; i++) {
        for (let j = 0; j < this.postAnswer!.questions.length; j++) {
          if (
            this.questionSlice[i].id == this.postAnswer?.questions[j].questionId
          ) {
            var input = document.getElementById(
              `${this.postAnswer?.questions[j].options[0].optionId}`
            ) as HTMLInputElement;
            input.checked = true;
          }
        }
      }
    }, 1);

    this.pageObject = event;
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

  submitTest() {
    this.router.navigate([
      'bf-result/',
      { postAnswer: JSON.stringify(this.postAnswer) },
    ]);
  }
}
