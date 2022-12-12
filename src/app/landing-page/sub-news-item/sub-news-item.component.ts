import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-news-item',
  templateUrl: './sub-news-item.component.html',
  styleUrls: ['./sub-news-item.component.scss'],
})
export class SubNewsItemComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  redirectToDetail() {
    this.router.navigate(['news-detail']);
  }
}
