import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.css']
})
export class ContentMenuComponent implements OnInit {

  @Input() header!:string;
  @Input() contents!:string[];

  constructor() { }

  

  ngOnInit() {
  }

}
