import { UniversityService } from './../_services/university.service';
import { University } from './../_model/uni';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Test } from '../_model/test.model';
import { SharedService } from '../_services/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  uniList: University[] = [];
  uniListRandom: University[] = [];

  quizes!: Test[];
  constructor(
    private uniSer: UniversityService,
    private shared: SharedService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Trang chủ');
    this.getData();

    this.shared.getAllTest().subscribe((data) => {
      this.quizes = data;
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('edu-news-container')?.lastElementChild?.lastChild
      ?.remove;
  }

  getData() {
    this.uniSer.getAllUniversity().subscribe((data) => {
      this.uniList = data;
      console.log(data);
    });
  }
}
