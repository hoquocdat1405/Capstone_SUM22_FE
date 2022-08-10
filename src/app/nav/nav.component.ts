import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  _username: string = '';
  _userPic: string = '';

  @Input() theme: string = 'light';

  constructor() {}

  ngOnInit() {}

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

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
