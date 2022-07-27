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

  ngAfterViewInit(){
    var beginX = this.cardFirst.nativeElement.getBoundingClientRect().left;
    console.log(beginX);

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

  beginX:any;
drag(){
  this.beginX = this.cardFirst.nativeElement.getBoundingClientRect().left;
}

drop() {
  var x = this.cardFirst.nativeElement.getBoundingClientRect().left;
  console.log("x:" +x);

  //tha ben trai
  if(x-this.beginX <-150){
    this.clickAnswerLeft();
    console.log("x:" +x);
    console.log("this.beginX: " +this.beginX);
  }
  //tha ben phai
  if(x-this.beginX > 150){
    this.clickAnswerRight();
  }
  if(x-this.beginX >= -150 && x-this.beginX <= 150){
    this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y};
    return;
  }

  //quay ve vi tri ban dau
  setTimeout(()=>this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y},800);
  
}
}
