import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-register-main',
  templateUrl: './login-register-main.component.html',
  styleUrls: ['./login-register-main.component.scss'],
})
export class LoginRegisterMainComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // let role:string = this.authService.currentUserValue.currentUser.role;
    // this.router.navigate([role.toLowerCase()]);
  }

  ngOnInit() { }

  // get f() {
  //   return this.form.controls;
  // }

  async login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        const token = localStorage.getItem('token');
        if (token) {
          this.router.navigate(['/home']);
        }
      }
    });

    

  }

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
