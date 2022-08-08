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
  model: any = {};
  @ViewChild('container') container!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router // private state: RouterStateSnapshot
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (user) => {
        console.log(user);
        console.log('Logged in');
        
        this.router.navigate(['/']);
      }
      // (next) => {
      //   console.log('Logged in');
      //   this.router.navigate(['/']);
      // },
      // (error) => {
      //   console.log('Login error'+ error);
      // }
    );
  }

  marginRight() {
    this.container.nativeElement.style.marginLeft = '-360px';
  }

  removeMarginRight() {
    this.container.nativeElement.style.marginLeft = '0px';
  }
}
