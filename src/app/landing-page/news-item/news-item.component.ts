import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/_model/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit, AfterContentInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() news!: News;
  newsYear!: number;
  ngOnInit() {
    const date = new Date(this.news.createDate);
    this.newsYear = date.getFullYear();
  }

  ngAfterContentInit(): void {}

  redirectToDetail(id: number) {
    this.router.navigate(['news-detail', { id: id }]);
  }
}
