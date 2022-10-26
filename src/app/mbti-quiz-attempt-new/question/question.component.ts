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
  countAnswer = 0;
  checkAnswer = false;
  postAnswer: MbtiPostQuizCollection = new MbtiPostQuizCollection();

  constructor(private shareService: SharedService) {}

  ngOnInit() {
    this.getData();
  }

  // {
  //   id:int,
  //   questions:[
  //     {
  //       questionId:int,
  //       value:string,
  //       options:[
  //         {
  //           optionId:int,
  //           value:string
  //         }
  //       ]
  //     }
  //   ]
  // }

  // userAnswer: MbtiQuizCollection = new MbtiQuizCollection();

  getData() {
    this.shareService.takingTestGuest(1).subscribe({
      next: (data) => {
        this.quizCollections = data;
        this.questionSlice = this.quizCollections.questions.slice(0, 10);
        this.getTotal();
      },
    });
    console.log(this.quizCollections);
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

    // setTimeout(() => {
    //   var userAnswerSlice = this.userAnswer.slice(startIndex, endIndex);
    //   for (var i = 0; i < userAnswerSlice.length; i++) {
    //     for (var j = 0; j < 2; j++) {
    //       var answer = document.querySelector(
    //         `.question-container:nth-child(${i + 1}) .answer:nth-child(${
    //           j + 1
    //         }) input`
    //       ) as HTMLInputElement;

    //       if (answer.value === userAnswerSlice[i].answer) {
    //         answer.checked = true;
    //       }
    //     }
    //   }
    // }, 1);

    setTimeout(() => {
      document.querySelector('.container-main')?.scrollIntoView();
    }, 1);
  }

  storeUserAnswer(event: any, i: number) {
    // this.userAnswer[10 * this.currentPage + i].answer = event.target.value;

    // this.userAnswer.forEach((answer) => {
    //   if (answer.answer === '') {
    //     check = false;
    //   }
    //   if (check !== false) {
    //     var btnSubmit = document.querySelector('.submit-btn');
    //     btnSubmit?.classList.add('active');
    //   }
    // });

    // this.userAnswer;

    // var btnSubmit = document.querySelector('.submit-btn');
    // var inputRowAll = document.querySelectorAll(
    //   `.question-container:nth-child(${i + 1}) input`
    // ) as NodeListOf<HTMLInputElement>;

    // inputRowAll.forEach((input) => {
    //   if (input.checked) {
    //     this.checkAnswer = true;
    //   }
    // });

    // if (this.checkAnswer === false) {
    //   this.countAnswer++;
    //   this.checkAnswer = false;
    // }
    console.log(this.countAnswer);

    this.postAnswer.id = i;
    this.postAnswer.questions.push();
  }

  // {
  //   id:int,
  //   questions:[
  //     {
  //       questionId:int,
  //       value:string,
  //       options:[
  //         {
  //           optionId:int,
  //           value:string
  //         }
  //       ]
  //     }
  //   ]
  // }

  submitAnswer(idTest: number, questionCollection: MbtiPostQuizQuestion) {
    this.postAnswer.id = idTest;
    for (var i = 0; i < this.quizCollections.questions.length; i++) {
      this.postAnswer.questions.push(questionCollection);
    }
  }
}
