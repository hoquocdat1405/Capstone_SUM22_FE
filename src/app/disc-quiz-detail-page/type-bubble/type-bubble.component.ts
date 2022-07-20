import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-bubble',
  templateUrl: './type-bubble.component.html',
  styleUrls: ['./type-bubble.component.scss'],
})
export class TypeBubbleComponent implements OnInit {
  @Input() name!: string;
  @Input() shorthand!: string;
  @Input() imgSrc!: string;

  constructor() {}

  ngOnInit() {}
}
