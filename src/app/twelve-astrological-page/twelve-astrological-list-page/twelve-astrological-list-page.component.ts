import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TAROTS } from '../tarot-data';

@Component({
  selector: 'app-twelve-astrological-list-page',
  templateUrl: './twelve-astrological-list-page.component.html',
  styleUrls: ['./twelve-astrological-list-page.component.scss']
})
export class TwelveAstrologicalListPageComponent implements OnInit {
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
  handleCardClick(cardPos:Number) {
    if(!this.isDisplayDetailPage && !this.isDisplayOverlayClass) {
      this.isDisplayDetailPage = true;
      this.isDisplayOverlayClass = true;
    }
  }
}
