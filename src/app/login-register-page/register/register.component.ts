import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() registerCall = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  login(){
    this.registerCall.emit();
  }
}
