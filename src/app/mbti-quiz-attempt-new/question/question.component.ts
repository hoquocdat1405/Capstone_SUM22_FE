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
  postAnswer: MbtiPostQuizCollection = new MbtiPostQuizCollection();

  constructor(private shareService: SharedService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    var count = 0;
    this.shareService.takingTestGuest(1002).subscribe({
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
      document.querySelector('.container-main')?.scrollIntoView();
    }, 1);
  }

  storeUserAnswer(event: any, i: number) {
    var question: MbtiPostQuizQuestion;
    var options: MbtiPostQuizOption[] = [];
    options.push({
      id: event.target.id,
      value: event.target.value,
    });

    var param = document.querySelector(
      `.question-container:nth-child(${i + 1}) param`
    ) as HTMLInputElement;

    question = {
      id: param?.id.replace('p', '') as unknown as number,
      value: param.value,
      options: options,
    };

    this.postAnswer.id = 1;

    const index = this.postAnswer.questions.findIndex(
      (e) => e.id === question.id
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

  submitAnswer() {}
}
