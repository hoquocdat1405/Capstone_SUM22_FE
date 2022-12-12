import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-news-item',
  templateUrl: './edu-news-item.component.html',
  styleUrls: ['./edu-news-item.component.scss'],
})
export class EduNewsItemComponent implements OnInit {
  @Input() uniImg = '';
  @Input() address = '';
  @Input() name = '';
  @Input() description = '';
  @Input() uniId = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  goDetail() {
    this.router.navigate(['school', {schoolId: this.uniId}])
  }
}
