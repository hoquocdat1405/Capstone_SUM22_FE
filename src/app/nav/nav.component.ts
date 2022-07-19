import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  _username: string = '';

  constructor() {}

  ngOnInit() {}

  loggedIn() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (username) {
      this._username = username;
    }
    return !!token;
  }

  logout() {
    localStorage.getItem('token');
    console.log('logged out');
  }
}
