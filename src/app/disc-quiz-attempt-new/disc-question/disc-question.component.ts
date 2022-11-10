import { DiscQuizCollectionModel } from './../../_model/disc-quiz/disc-quiz-collection';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-disc-question',
  templateUrl: './disc-question.component.html',
  styleUrls: ['./disc-question.component.scss'],
})
export class DiscQuestionComponent implements OnInit {
  constructor(private sharedServ: SharedService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {}
  // questions = [
  //   {
  //     id: 1,
  //     answers: [
  //       'Tôi có xu hướng là một người thận trọng',
  //       'Tôi là một người rất kiên quyết',
  //       'Tôi giỏi thuyết phục mọi người',
  //       'Tôi có xu hướng trở thành một người thân thiện',
  //     ],
  //   },
  //   {
  //     id: 2,
  //     answers: [
  //       'Tôi có xu hướng là một người thận trọng2',
  //       'Tôi là một người rất kiên quyết2',
  //       'Tôi giỏi thuyết phục mọi người2',
  //       'Tôi có xu hướng trở thành một người thân thiện2',
  //     ],
  //   },

  // ];
  totalPage = 0;
  currentQuestion = 0;
  currentPage = 0;
  quizCollections?: DiscQuizCollectionModel;
  length = 0;
  questionSlice: any;

  getData() {
    var count = 0;
    this.sharedServ.takingTestGuest(2006).subscribe((data) => {
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
      activeSameRow?.classList.remove('active-same');
      activeDiffer?.classList.remove('active-difference');
    } else {
      activeSame?.classList.remove('active-same');
      activeDifferRow?.classList.remove('active-difference');
    }
    this.clickCheckBox(event);
  }

  storeUserAnswer(index: number, answerText: any, check: string) {}

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
    // this.questionSlice = this.questions.slice(startIndex, endIndex);

    setTimeout(() => {
      document.querySelector('.content')?.scrollIntoView();
    }, 1);
  }
}
