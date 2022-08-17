import { Component, OnInit } from '@angular/core';
import { HollandQuizModel } from '../_model/holland-quiz/holland_quiz_model';
import data from '../holland-data.json';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-holland-quiz-attempt-page',
  templateUrl: './holland-quiz-attempt-page.component.html',
  styleUrls: ['./holland-quiz-attempt-page.component.scss'],
})
export class HollandQuizAttemptPageComponent implements OnInit {
  i!: number;

  currentQuestion!: {
    id: number;
    text: string;
    option: {
      id: number;
      text: string;
      isSelected: boolean;
    }[];
  };

  questionSet!: {
    id: number;
    text: string;
    option: {
      id: number;
      text: string;
      isSelected: boolean;
    }[];
  }[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.i = 0;
    console.log(this.i);
    this.questionSet = [
      {
        id: 1,
        text: 'This is a test question that longer than before ',
        option: [
          {
            id: 1,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 2,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 3,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 4,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 5,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 6,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 7,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 8,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
        ],
      },
      {
        id: 2,
        text: 'Test question #2 , this is the SECOND QUESTION ',
        option: [
          {
            id: 9,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 10,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 11,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 12,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 13,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 14,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 15,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 16,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
        ],
      },
      {
        id: 3,
        text: 'Test question #3 , this is the THiRD QUESTION ',
        option: [
          {
            id: 17,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 18,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 19,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 20,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 21,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 22,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 23,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 24,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
        ],
      },
      {
        id: 4,
        text: 'Test question #4 , this is the Fourth QUESTION ',
        option: [
          {
            id: 25,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 26,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 27,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 28,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 29,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 30,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 31,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
          {
            id: 32,
            text: 'abc1 si the test answer of this question',
            isSelected: false,
          },
        ],
      },
    ];
    this.currentQuestion = this.questionSet[this.i];
  }

  enableChoose(i: number) {
    this.questionSet[this.i].option[i].isSelected =
      !this.questionSet[this.i].option[i].isSelected;
  }

  nextQuestion() {
    if (this.i < this.questionSet.length - 1)
      this.currentQuestion = this.questionSet[++this.i];
    else this.currentQuestion = this.questionSet[this.questionSet.length - 1];
  }

  checkAnsweredOption(): boolean {
    let isValid: boolean = true;

    this.questionSet.forEach((question) => {
      let isAnswered: boolean = false;
      question.option.forEach((opt) => {
        if (opt.isSelected) isAnswered = true;
      });

      if (!isAnswered) isValid = isAnswered;
      isAnswered = false;
    });

    return isValid;
  }

  previousQuestion() {
    if (this.i > 0) this.currentQuestion = this.questionSet[--this.i];
    else this.currentQuestion = this.questionSet[0];
  }

  finishTest() {
    if (this.checkAnsweredOption()) {
      this.router.navigate(['/holland-result']);
    }
    else{
      alert("Hãy đảm bảo bạn đã trả lời tất cả câu hỏi của chúng tôi");
    }
  }
}
