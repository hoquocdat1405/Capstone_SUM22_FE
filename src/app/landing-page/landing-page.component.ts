import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Test } from '../_model/test.model';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor(private shared : SharedService) {}
  quizes!:Test[];
  ngOnInit() {
    this.shared.getAllTest().subscribe((data) => {
      this.quizes = data;
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('edu-news-container')?.lastElementChild?.lastChild
      ?.remove;
  }
}
