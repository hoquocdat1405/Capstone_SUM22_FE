import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  _username: string = '';
  _userPic: string = '';
  token:any;
  email:string = '';

  @Input() theme: string = 'light';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.token = this.authService.getDecodedToken();
    if(this.token) {
      this.email = this.token.email;
    }
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const userPic = localStorage.getItem('userPic');
    if (username && userPic) {
      this._username = username;
      this._userPic = userPic;
    }
    return !!token;
  }

  hasUserPic() {
    return !!this._userPic;
  }

  logout() {
    this.authService.logout();
  }
}
