import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;

  @Input() name!: string;
  @Input() text!:string;
  @Input() shorthand!:string;
  @Input() color!:string;
  @Input() isAllignRight!:boolean;


  constructor() {}

  ngOnInit() {}
}
