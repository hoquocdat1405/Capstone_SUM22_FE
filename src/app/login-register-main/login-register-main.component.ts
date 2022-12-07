import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login-register-main',
  templateUrl: './login-register-main.component.html',
  styleUrls: ['./login-register-main.component.scss'],
})
export class LoginRegisterMainComponent implements OnInit {
  email: string = '';
  password: string = '';

  // registerName: string = '';
  // emailReg: string = '';
  // passwordReg: string = '';
  // confirmPasswordReg: string = '';

  @Input()
  isActiveLogin = false;
  isActiveRegister1 = false;
  isActiveRegister2 = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private title: Title,
    private route: Router
  ) {}

  loginFormIns = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  registerFormIns = this.fb.group({
    registerName: ['', [Validators.required]],
    emailReg: ['', [Validators.required, Validators.email]],
    passwordReg: ['', [Validators.required]],
    confirmPasswordReg: ['', [Validators.required]],
  });

  get loginF() {
    return this.loginFormIns.controls;
  }

  get passwordF() {
    return this.registerFormIns.controls;
  }

  ngOnInit() {
    this.title.setTitle('Đăng nhập');
    alertify.set('notifier', 'delay', 3);
  }

  login() {
    this.authService
      .login(this.loginFormIns.value.email, this.loginFormIns.value.password)
      .subscribe({
        next: () => {
          const token = localStorage.getItem('token');
          if (token) {
            alertify.success('Login Successfully!');
            this.router.navigate(['/home']);
          }
        },
        error: () => {
          alertify.set('notifier', 'position', 'top-center');
          alertify.error('Login Failed!');
        },
      });
  }

  registerValidate() {
    return (
      this.registerFormIns.get('passwordReg')!.value ===
      this.registerFormIns.get('confirmPasswordReg')!.value
    );
  }

  register() {
    if (this.registerValidate())
      this.authService
        .register(
          this.registerFormIns.get('emailReg')!.value,
          this.registerFormIns.get('registerName')!.value,
          this.registerFormIns.get('passwordReg')!.value
        )
        .subscribe({
          next: () => {
            // alertify.success('Register Successfully!');
            this.route.navigate(['verify-account']);
          },
          error: () => {
            alertify.success('Register Failed');
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
