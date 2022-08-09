import { Tarot } from './../Tarot';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TAROTS } from '../tarot-data';
import { TarotServiceService } from '../tarot-service.service';

@Component({
  selector: 'app-tarot-list-page',
  templateUrl: './tarot-list-page.component.html',
  styleUrls: ['./tarot-list-page.component.scss']
})
export class TarotListPageComponent implements OnInit {
  isDisplayOverlayClass: Boolean = false;
  isDisplayDetailPage: Boolean = false;
  currentTarotIndex:Number = 0;
  currentTarot: Tarot = {
    name: "",
    pos: -1,
    url: "",
    description: ""
  };

  constructor() { }

  ngOnInit() {

  }

  tarots = TAROTS;

  handleOverlayClick() {
    if (this.isDisplayOverlayClass && this.isDisplayDetailPage) {
      this.isDisplayOverlayClass = false;
      this.isDisplayDetailPage = false;
    }
  }
  handleCardClick(cardPos: Number) {
    if (!this.isDisplayDetailPage && !this.isDisplayOverlayClass) {
      this.isDisplayDetailPage = true;
      this.isDisplayOverlayClass = true;
    }
    this.currentTarotIndex = cardPos;
  }
}
