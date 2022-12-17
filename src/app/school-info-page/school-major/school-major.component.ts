import { UniDetailSpec } from './../../_model/uni';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-major',
  templateUrl: './school-major.component.html',
  styleUrls: ['./school-major.component.scss']
})
export class SchoolMajorComponent implements OnInit {
  @Input() header!: string;
  @Input() contents!: UniDetailSpec[];
  constructor() { }

  ngOnInit(): void {
  }

}
