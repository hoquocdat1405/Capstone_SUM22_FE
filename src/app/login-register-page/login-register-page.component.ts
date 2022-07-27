import { LoginComponent } from './login/login.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.scss']
})
export class LoginRegisterPageComponent implements OnInit {
  // @ViewChild('loginComponent', { read: LoginRegisterPageComponent }) loginComponent!:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  register(){
console.log('test1234');
  }
}
