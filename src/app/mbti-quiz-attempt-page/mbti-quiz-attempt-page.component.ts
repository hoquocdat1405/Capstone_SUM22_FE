import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-attempt-page',
  templateUrl: './mbti-quiz-attempt-page.component.html',
  styleUrls: ['./mbti-quiz-attempt-page.component.scss']
})
export class MbtiQuizAttemptPageComponent implements OnInit {
  @ViewChild('cardFirst') cardFirst!:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  clickAnswerLeft(){
    this.cardFirst.nativeElement.classList.add('move-left');
    setTimeout(() =>this.cardFirst.nativeElement.classList.remove('move-left')
    ,1000)
}

clickAnswerRight(){
  this.cardFirst.nativeElement.classList.add('move-right'); 
  setTimeout(() =>this.cardFirst.nativeElement.classList.remove('move-right')
  ,1000)
}


hoverLeft(){
  this.cardFirst.nativeElement.classList.add('hoverRotateLeft');
}

unHoverLeft(){
   this.cardFirst.nativeElement.classList.remove('hoverRotateLeft');
}

hoverRight(){
  this.cardFirst.nativeElement.classList.add('hoverRotateRight');
}

unHoverRight(){
  this.cardFirst.nativeElement.classList.remove('hoverRotateRight');
}
}
