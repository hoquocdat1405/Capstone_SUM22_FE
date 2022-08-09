import { Tarot } from './../Tarot';
import { TarotServiceService } from './../tarot-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarot-detail-page',
  templateUrl: './tarot-detail-page.component.html',
  styleUrls: ['./tarot-detail-page.component.scss']
})
export class TarotDetailPageComponent implements OnInit {
  @Input() public tarotPos:Number = 0;
  currentTarot: Tarot = {
    name: "",
    pos: -1,
    url: "",
    description: ""
  };

  constructor(private data: TarotServiceService) { }

  ngOnInit(): void {
    this.data.currentObject.subscribe(tarot => this.currentTarot = tarot);
    console.log(this.tarotPos);
  }
}
