import { UniversityService } from './../_services/university.service';
import { University } from './../_model/uni';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Test } from '../_model/test.model';
import { SharedService } from '../_services/shared.service';
import { Title } from '@angular/platform-browser';
import { News } from './../_model/news.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  uniList: University[] = [];
  uniListRandom: University[] = [];
  newsList: News[] = [];

  firstNews?: News;

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
    this.uniSer.getAllNews().subscribe((data) => {
      this.newsList = data;
      this.firstNews = this.newsList[0];
      this.newsList.shift();
      this.newsList.splice(4, this.newsList.length - 1);
      console.log(this.newsList);
    });
  }
}
