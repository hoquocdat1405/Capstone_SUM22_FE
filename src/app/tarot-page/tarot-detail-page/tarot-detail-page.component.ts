import { Tarot } from './../Tarot';
import { TarotServiceService } from './../tarot-service.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarot-detail-page',
  templateUrl: './tarot-detail-page.component.html',
  styleUrls: ['./tarot-detail-page.component.scss']
})
export class TarotDetailPageComponent implements OnInit, OnChanges {
  @Input() tarotPos?:Number;
  currentTarot: Tarot = {
    name: "",
    pos: -1,
    url: "",
    description: ""
  };

  constructor(private data: TarotServiceService) { }

  ngOnInit(): void {
    this.data.currentObject.subscribe(tarot => this.currentTarot = tarot);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentTarot = this.data.getTarotByIndex(this.tarotPos ?? 0);
  }
}
