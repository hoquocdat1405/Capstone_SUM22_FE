import { DiscPostQuizOption } from './../../_model/disc-quiz/disc-quiz-option';
import { DiscPostQuizQuestion } from './../../_model/disc-quiz/disc-quiz-question';
import {
  DiscQuizCollectionModel,
  DiscPostQuizCollection,
} from './../../_model/disc-quiz/disc-quiz-collection';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-disc-question',
  templateUrl: './disc-question.component.html',
  styleUrls: ['./disc-question.component.scss'],
})
export class DiscQuestionComponent implements OnInit {
  @Input() id!: string | null;
  totalPage = 0;
  currentQuestion = 0;
  currentPage = 0;
  quizCollections?: DiscQuizCollectionModel;
  length = 0;
  questionSlice: any;
  postAnswer?: DiscPostQuizCollection = {
    testId: 0,
    questions: [],
  };
  hamburgerFlag: boolean = false;
  pageObject = {
    previouPageIndex: 0,
    pageIndex: 0,
    pageSize: 10,
    Lenghth: 0,
  };

  countSubmit = 0;

  constructor(private sharedServ: SharedService, private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    var count = 0;
    this.sharedServ
      .takingTestGuest(this.id as unknown as number)
      .subscribe((data) => {
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

  chooseAnswer(
    i: number,
    j: number,
    event: any,
    selectedField: boolean,
    indexQuestion: number
  ) {
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
      activeSameRow?.classList.remove('active-same');
      activeDiffer?.classList.remove('active-difference');
    } else {
      activeSame?.classList.remove('active-same');
      activeDifferRow?.classList.remove('active-difference');
    }
    this.clickCheckBox(event);
    this.storeUserAnswer(i, j, indexQuestion, selectedField);
  }

  storeUserAnswer(
    i: any,
    j: number,
    indexQuestion: number,
    selectedField: boolean
  ) {
    var question: DiscPostQuizQuestion;
    var option: DiscPostQuizOption;
    var options: DiscPostQuizOption[] = [];

    this.postAnswer!.testId = this.quizCollections!.id as unknown as number;

    var paramAnswer = document.querySelector(
      `.question-container:nth-child(${i + 1}) .answer-row:nth-child(${
        j + 1
      }) param`
    ) as any;

    option = {
      optionId: paramAnswer?.id as unknown as number,
      optionValue: paramAnswer?.value,
      selectedField: selectedField,
    };
    options.push(option);

    var param = document.querySelector(
      `.question-container:nth-child(${i + 1}) param`
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
      var indexx = this.postAnswer!.questions[index].options.findIndex(
        (e) => e.optionId === option.optionId
      );

      if (indexx > -1) {
        if (
          this.postAnswer!.questions[index].options[indexx].selectedField !==
          selectedField
        ) {
          this.postAnswer!.questions[index].options = [];
        }
      }

      var indexOption = this.postAnswer!.questions[index].options.findIndex(
        (e) =>
          e.selectedField === selectedField || e.optionId === option.optionId
      );
      if (indexOption > -1) {
        this.postAnswer!.questions[index].options[indexOption] = option;
      } else {
        this.postAnswer!.questions[index].options.push(option);
      }
      if (this.postAnswer!.questions[index].options.length === 2) {
        document
          .querySelector(`.question-item:nth-child(${indexQuestion}`)
          ?.classList.add('active');
      } else {
        document
          .querySelector(`.question-item:nth-child(${indexQuestion}`)
          ?.classList.remove('active');
      }
    } else {
      this.postAnswer!.questions.push(question);
    }

    var questionItems = document.querySelectorAll('.question-item.active');
    var btnSubmit = document.querySelector('.submit-btn');
    if (questionItems.length === this.quizCollections?.questions.length) {
      btnSubmit?.classList.add('active');
    } else {
      btnSubmit?.classList.remove('active');
    }

    console.log(this.postAnswer);
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
    this.questionSlice = this.quizCollections?.questions.slice(
      startIndex,
      endIndex
    );

    setTimeout(() => {
      document.querySelector('.content')?.scrollIntoView();
    }, 1);

    //lấy dữ liệu hiển thị
    setTimeout(() => {
      for (let i = 0; i < this.questionSlice.length; i++) {
        for (let j = 0; j < this.postAnswer!.questions.length; j++) {
          if (
            this.questionSlice[i].id == this.postAnswer!.questions[j].questionId
          ) {
            for (
              let z = 0;
              z < this.postAnswer!.questions[j].options.length;
              z++
            ) {
              var input = document.querySelectorAll(
                `#a${this.postAnswer!.questions[j].options[z].optionId}`
              ) as NodeListOf<HTMLInputElement>;
              if (
                this.postAnswer!.questions[j].options[z].selectedField === true
              ) {
                input[0].classList.add('active-same');
              } else {
                input[1].classList.add('active-difference');
              }
            }
          }
        }
      }
    }, 1);
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

  submit() {
    this.sharedServ.submitTestDisc(this.postAnswer).subscribe((result) => {
      if (result !== null) {
        this.router.navigate([
          'disc-result/',
          { id: result.id, shortName: result.resultShortName },
        ]);
      }
    });
  }
}
