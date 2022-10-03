import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf-question',
  templateUrl: './bf-question.component.html',
  styleUrls: ['./bf-question.component.scss'],
})
export class BfQuestionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  questions = [
    {
      id: 1,
      questionText: 'I have a kind word for everyone.',
    },
    {
      id: 2,
      questionText: 'I have a kind word for everyone. 2',
    },
    {
      id: 3,
      questionText: 'I have a kind word for everyone. 3',
    },
    {
      id: 4,
      questionText: 'I have a kind word for everyone. 4',
    },
    {
      id: 5,
      questionText: 'I have a kind word for everyone. 5',
    },
  ];

  chooseAnswer(i: number, event: any) {
    console.log(i);
    var levelAll = document.querySelectorAll(
      `.question-container:nth-child(${i + 2}) .checkmark`
    );

    levelAll.forEach((level) => {
      level.classList.remove('active');
    });
    this.clickCheckBox(event);
  }
  clickCheckBox(event: any) {
    event.target.classList.add('active');
  }
}
