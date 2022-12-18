import {
  BigFiveQuizCollectionModel,
  BigFivePostQuizCollection,
} from './../../_model/big-five-quiz/big-five-collection';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from './../../_services/shared.service';
import { Component, OnInit } from '@angular/core';

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
  postAnswer?: BigFivePostQuizCollection;
  questionSlice: any;
  pageObject = {
    previouPageIndex: 0,
    pageIndex: 0,
    pageSize: 10,
    Lenghth: this.quizCollections?.questions.length,
  };
  hamburgerFlag: boolean = false;

  constructor(
    private shareService: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData(2004);
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
  }

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
    // this.userAnswer[10 * this.currentPage + i].answer = level;
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
}
