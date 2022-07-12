import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone,faLocationPin } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailIcon = faEnvelope;
  phoneIcon = faPhone;
  locationIcon = faLocationPin;

  constructor() { }

  ngOnInit() {
  }

}
