import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-landing-school-item',
  templateUrl: './landing-school-item.component.html',
  styleUrls: ['./landing-school-item.component.scss']
})
export class LandingSchoolItemComponent implements OnInit {

  eyeIcon = faEye;

  constructor() { }

  ngOnInit() {
  }

}
