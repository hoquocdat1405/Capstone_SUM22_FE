import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss'],
})
export class StaffPageComponent implements OnInit {
  opened = true;
  option_opened = true;

  @Input() theme = 'light';

  _userPic = '../../../assets/img/logo-qick.png';

  constructor() {}

  ngOnInit() {}

  loggedIn(){
    return true;
  }

  logout(){
  
  }
}
