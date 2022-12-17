import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-bubble-bigfive',
  templateUrl: './type-bubble-bigfive.component.html',
  styleUrls: ['./type-bubble-bigfive.component.scss']
})
export class TypeBubbleBigfiveComponent implements OnInit {
  @Input() name!: string;
  @Input() shorthand!: string;
  @Input() imgSrc!: string;

  constructor() { }

  ngOnInit() { }
}
