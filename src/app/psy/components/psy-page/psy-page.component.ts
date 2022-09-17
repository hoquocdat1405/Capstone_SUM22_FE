import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-psy-page',
  templateUrl: './psy-page.component.html',
  styleUrls: ['./psy-page.component.scss']
})
export class PsyPageComponent implements OnInit {

  opened = true;
  option_opened = true;

  @Input() theme = 'light';

  _userPic = '../../../assets/img/logo-qick.png';

  constructor() { }

  ngOnInit() { }

  loggedIn() {
    return true;
  }

  logout() {

  }
}
