import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/_model/User';
import { AuthService } from '../../_services/auth.service';
// import UsersJson from '../users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  errorMessage = '';
  @ViewChild('container') container!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router // private state: RouterStateSnapshot
  ) {}

  ngOnInit() {}

  onSubmit(): void {

    const { email, password } = this.form;
console.log(this.form);
    this.authService.login(email, password).subscribe({
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  
  // login() {
  //   console.log(this.model);
  //   this.authService.login(this.model).subscribe(
  //     // (user) => {
  //     //   console.log(user);
  //     //   console.log('Logged in');
        
  //     //   this.router.navigate(['/']);
  //     // },
  //     (error) => {
  //       console.log('Login error'+ error.toString());
  //     }
  //   );

    // localStorage.setItem('username','Liem Nguyen');
    // localStorage.setItem('token','xxxxxxxxxxxx');
    // localStorage.setItem('userPic','../../assets/img/logo-qick.png');
    // this.router.navigate(['/']);

  }

  marginRight() {
    this.container.nativeElement.style.marginLeft = '-360px';
  }

  removeMarginRight() {
    this.container.nativeElement.style.marginLeft = '0px';
  }
}
