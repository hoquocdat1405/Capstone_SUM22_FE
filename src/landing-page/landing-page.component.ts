import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    document.querySelector('edu-news-container')?.lastElementChild?.lastChild?.remove
     
  }
}
