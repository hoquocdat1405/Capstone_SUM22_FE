import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/_model/news.model';

@Component({
  selector: 'app-sub-news-item',
  templateUrl: './sub-news-item.component.html',
  styleUrls: ['./sub-news-item.component.scss'],
})
export class SubNewsItemComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() news!: News;
  newsYear! : number;
  ngOnInit() {
    const date = new Date(this.news.createDate);
    this.newsYear = date.getFullYear();
  }

  redirectToDetail(id: number) {
    this.router.navigate(['news-detail',{id:id}]);
  }
}
