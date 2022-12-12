import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit, AfterContentInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  ngAfterContentInit(): void {}
  redirectToDetail() {
    this.router.navigate(['news-detail']);
  }
}
