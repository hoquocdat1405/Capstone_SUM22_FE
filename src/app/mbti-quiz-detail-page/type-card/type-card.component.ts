import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss'],
})
export class TypeCardComponent implements OnInit {
  @Input() name!: string;
  @Input('shorthand') shorthand!: string;
  @Input('imgSrc') img!: string;

  constructor() {}

  ngOnInit() {}
}
