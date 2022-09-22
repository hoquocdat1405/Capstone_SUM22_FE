import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-main',
  templateUrl: './login-register-main.component.html',
  styleUrls: ['./login-register-main.component.scss'],
})
export class LoginRegisterMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changePosition() {
    var infoContainer = document.querySelector('.info-container');
    infoContainer?.classList.toggle('toggle');
  }
}
