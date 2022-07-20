import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
    // private state: RouterStateSnapshot
  ) {}

  ngOnInit() {}

  login() {
    // this.authService.login(this.model).subscribe(
    //   (next) => {
    //     console.log('Logged in');
    //   },
    //   (error) => {
    //     console.log('Login error');
    //   }
    // );
    localStorage.setItem('token', 'abcdfdsfsdf');
    localStorage.setItem('username', 'bla bla');
    this.router.navigate(['/']);
  }
}
