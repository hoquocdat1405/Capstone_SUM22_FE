import { Router } from '@angular/router';
import { HollandPostQuizOption } from './../../_model/holland-quiz/holland-quiz-option';
import { HollandPostQuizQuestion } from './../../_model/holland-quiz/holland-quiz-question';
import {
  HollandQuizCollectionModel,
  HollandPostQuizCollection,
} from './../../_model/holland-quiz/holland-quiz-collection';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { SharedService } from 'src/app/_services/shared.service';
@Component({
  selector: 'app-holland-question',
  templateUrl: './holland-question.component.html',
  styleUrls: ['./holland-question.component.scss'],
})
export class HollandQuestionComponent implements OnInit {
  constructor(private sharedServ: SharedService, private router: Router) {}
  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {}

  hamburgerFlag: boolean = false;
  quizCollections?: HollandQuizCollectionModel;
  currentQuestion = 0;
  questionSlice: any;
  totalPage = 0;
  currentPage = 0;
  userAnswer: { id: number; answer: string[] }[] = [];
  length = 0;
  postAnswer: HollandPostQuizCollection = new HollandPostQuizCollection();
  pageObject = {
    previousPageIndex: 0,
    pageIndex: 0,
    pageSize: 10,
    Length: 0,
  };

  getData() {
    var count = 0;
    this.sharedServ.takingTestGuest(1003).subscribe((data) => {
      this.quizCollections = data;
      this.quizCollections?.questions.forEach((question) => {
        question.index = count++;
      });
      this.questionSlice = this.quizCollections?.questions.slice(0, 10);
      this.getTotal();
    });
  }

  getTotal() {
    var totalQuestions = this.quizCollections?.questions.length;
    var sliceQuestion = this.questionSlice.length;
    this.totalPage =
      (totalQuestions! - (totalQuestions! % sliceQuestion)) / sliceQuestion;
    if (totalQuestions! % sliceQuestion !== 0) {
      this.totalPage++;
    }
    this.length = this.quizCollections?.questions.length as unknown as number;
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    var startIndex = event.pageIndex * event.pageSize;
    var endIndex = startIndex + event.pageSize;
    if (endIndex > event.length) {
      endIndex = event.length;
    }
    this.questionSlice = this.quizCollections!.questions.slice(
      startIndex,
      endIndex
    );

    setTimeout(() => {
      document.querySelector('.container-main')?.scrollIntoView();
    }, 1);
  }

  storeUserAnswer(event: any, i: number, j: number) {
    var question: HollandPostQuizQuestion;
    var option: HollandPostQuizOption;
    var optionCollect: HollandPostQuizOption[] = [];

    option = {
      optionId: event.target.id,
      optionValue: event.target.value,
    };
    optionCollect.push(option);

    var param = document.querySelector(
      `.question-container:nth-child(${i + 1}) param`
    ) as HTMLInputElement;

    question = {
      questionId: param?.id.replace('p', '') as unknown as number,
      questionValue: param.value,
      options: optionCollect,
    };

    const indexQuestion = this.postAnswer.questions.findIndex(
      (e) => e.questionId === question.questionId
    );
    if (indexQuestion > -1) {
      const indexAnswer = this.postAnswer.questions[
        indexQuestion
      ].options.findIndex((e) => e.optionId === option.optionId);
      if (indexAnswer > -1) {
        this.postAnswer.questions[indexQuestion].options.splice(indexAnswer, 1);

        //option = 0 xoa question
        if (this.postAnswer.questions[indexQuestion].options.length === 0) {
          this.postAnswer.questions.splice(indexQuestion, 1);
          document
            .querySelector(`.question-item:nth-child(${j}`)
            ?.classList.remove('active');
        }
      } else {
        this.postAnswer.questions[indexQuestion].options.push(option);
      }
    } else {
      this.postAnswer.questions.push({
        questionId: param?.id.replace('p', '') as unknown as number,
        questionValue: param.value,
        options: optionCollect,
      });
      document
        .querySelector(`.question-item:nth-child(${j}`)
        ?.classList.add('active');
    }
    if (
      this.postAnswer.questions.length ===
      this.quizCollections!.questions.length
    ) {
      var btnSubmit = document.querySelector('.submit-btn');
      btnSubmit?.classList.add('active');
    }
    console.log(this.postAnswer);
  }

  submitAnswer() {
    this.sharedServ.submitTest(this.postAnswer).subscribe((result) => {
      if (result !== null) {
        this.router.navigate([
          'holland-result/',
          { id: result.id, shortName: result.resultShortName },
        ]);
      }
    });
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
    // this.pageObject.pageIndex = Math.floor(index / 10);
    // this.pageObject.Length = this.length;
    // this.changePage(this.pageObject);
    const questionContainer = document.querySelector(
      `.question-container:nth-child(${index})`
    );

    const yOffset = -10;
    const y =
      questionContainer!.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    questionContainer?.scrollIntoView(true);
  }
}
