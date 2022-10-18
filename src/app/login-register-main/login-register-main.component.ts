import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register-main',
  templateUrl: './login-register-main.component.html',
  styleUrls: ['./login-register-main.component.scss'],
})
export class LoginRegisterMainComponent implements OnInit {
  email: string = '';
  password: string = '';
  registerName: string = '';
  emailReg: string = '';
  passwordReg: string = '';
  confirmPasswordReg: string = '';

  @Input()
  isActive = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  loginFormIns = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get f() {
    return this.loginFormIns.controls;
  }

  ngOnInit() {}

  login() {
    this.authService
      .login(this.loginFormIns.value.email, this.loginFormIns.value.password)
      .subscribe({
        next: () => {
          const token = localStorage.getItem('token');
          if (token) {
            this.router.navigate(['/home']);
          }
        },
      });
  }

  registerValidate() {
    return this.passwordReg === this.confirmPasswordReg;
  }

  register() {
    if (this.registerValidate())
      this.authService
        .register(this.emailReg, this.registerName, this.passwordReg)
        .subscribe({
          next: () => {
            console.log('register success');
          },
          error: () => {
            console.error('register fail');
          },
        });
  }

  changePosition() {
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
