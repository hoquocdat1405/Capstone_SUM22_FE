import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.scss']
})
export class JobListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.router.navigate(['/job-detail']);
  }

}
