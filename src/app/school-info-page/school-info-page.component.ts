import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-info-page',
  templateUrl: './school-info-page.component.html',
  styleUrls: ['./school-info-page.component.scss']
})
export class SchoolInfoPageComponent implements OnInit {

  constructor() { }

  header = 'Header';
  contents = ['Content1','Content2','Content3','Content4']

  ngOnInit() {
  }

}
