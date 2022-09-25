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
    console.log(window.innerWidth);
    if (window.innerWidth <= 800) {
      var registerContainer = document.querySelector(
        '.register-form'
      ) as HTMLDivElement;
      var loginContainer = document.querySelector(
        '.login-form'
      ) as HTMLDivElement;

      registerContainer?.classList.toggle('active');
      loginContainer?.classList.toggle('active');
    } else {
      var infoContainer = document.querySelector('.info-container');
      infoContainer?.classList.toggle('toggle');
    }
  }
}
