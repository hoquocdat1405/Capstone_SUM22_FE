import { Component, OnInit } from '@angular/core';
import { TAROTS } from '../tarot-data';

@Component({
  selector: 'app-tarot-list-page',
  templateUrl: './tarot-list-page.component.html',
  styleUrls: ['./tarot-list-page.component.scss']
})
export class TarotListPageComponent implements OnInit {

  isDisplayOverlayClass: Boolean = false;
  isDisplayDetailPage: Boolean = false;

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
  }

}
