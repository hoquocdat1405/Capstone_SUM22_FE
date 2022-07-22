import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mbti-quiz-attempt-page',
  templateUrl: './mbti-quiz-attempt-page.component.html',
  styleUrls: ['./mbti-quiz-attempt-page.component.scss']
})
export class MbtiQuizAttemptPageComponent implements OnInit {
  @ViewChild('cardFirst') cardFirst!:ElementRef;
  @ViewChild('answerLeft') answerLeft!:ElementRef;
  @ViewChild('answerRight') answerRight!:ElementRef;
  

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
  console.log('aaaa');
}

unHoverRight(){
  this.cardFirst.nativeElement.classList.remove('hoverRotateRight');
}

dragPosition = {x: 0, y: 0};

drop() {
  var x = this.cardFirst.nativeElement.getBoundingClientRect().left;
  var width = this.cardFirst.nativeElement.offsetWidth;

  //tha ben trai
  if(x-width <-100){
    this.clickAnswerLeft();
  }
  //tha ben phai
  if(x-width > 100){
    this.clickAnswerRight();
  }
  if(x-width >= -100 && x-width <= 100){
    this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y};
    return;
  }

  //quay ve vi tri ban dau
  setTimeout(()=>this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y},800);
  
}
}
