import { UniversityService } from './../_services/university.service';
import { University } from './../_model/uni';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  uniList: University[] = [];
  uniListRandom: University[] = [];
  constructor(private uniSer: UniversityService) {}

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit(): void {
    document.querySelector('edu-news-container')?.lastElementChild?.lastChild
      ?.remove;
  }

  getData() {
    this.uniSer.getAllUniversity().subscribe((data) => {
      this.uniList = data;
    });
  }
}
