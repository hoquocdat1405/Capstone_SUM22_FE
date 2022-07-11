import { Component, OnInit,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit,AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

}
