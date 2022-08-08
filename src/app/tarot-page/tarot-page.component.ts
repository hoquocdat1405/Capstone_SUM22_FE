import { TAROTS } from './tarot-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarot-page',
  templateUrl: './tarot-page.component.html',
  styleUrls: ['./tarot-page.component.scss']
})
export class TarotPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  carousel = document.querySelector('.carousel');
  currdeg = 0;
  carouselStyle = {};
  currIndex = 0;
  itemStyle = {};
  flagClick: Boolean = false;
  isOpacity: Boolean = true;
  isDisplayOverlayClass: Boolean = false;
  isDisplayDetailPage: Boolean = false;
  tarots = TAROTS;
  notShowDetailPage: Boolean = true;

  handleNextClick() {
    this.currdeg -= 30;
    this.setCarouselStyle();
    this.changeCurrIndex("next");
  }
  handlePrevClick() {
    this.currdeg += 30;
    this.setCarouselStyle();
    this.changeCurrIndex("prev");
  }

  setCarouselStyle() {
    this.carouselStyle = {
      "-webkit-transform": "rotateY(" + this.currdeg + "deg)",
      "-moz-transform": "rotateY(" + this.currdeg + "deg)",
      "-o-transform": "rotateY(" + this.currdeg + "deg)",
      "transform": "rotateY(" + this.currdeg + "deg)",
    }
  }
  changeCurrIndex(sign: String) {
    if (sign === "next") {
      if (this.currIndex == 11) {
        this.currIndex = -1;
      }
      this.currIndex++;
    }
    else {
      if (this.currIndex == 0) {
        this.currIndex = 12;
      }
      this.currIndex--;
    }
  }

  handleOverlayClick() {
    if (this.isDisplayOverlayClass) {
      this.isDisplayOverlayClass = false;
    }
    if (this.isDisplayDetailPage) {
      this.isDisplayDetailPage = false;
    }
  }

  handleCardClick(cardPos: Number) {
    if (cardPos === this.currIndex - 1) {
      this.handlePrevClick();
    } else if (cardPos === this.currIndex + 1) {
      this.handleNextClick();
    }

    if (this.currIndex === 11 && cardPos === 0) {
      this.handleNextClick();
    }
    if (this.currIndex === 0 && cardPos === 11) {
      this.handlePrevClick();
    }
  }

  handleViewMoreClick(cardPos: Number) {
    if (this.currIndex === 5) {
      this.notShowDetailPage = false;
      return;
    }

    if (cardPos === this.currIndex - 1) {
      this.handlePrevClick();
    } else if (cardPos === this.currIndex + 1) {
      this.handleNextClick();
    }

    if (this.currIndex === 11 && cardPos === 0) {
      this.handleNextClick();
    }
    if (this.currIndex === 0 && cardPos === 11) {
      this.handlePrevClick();
    }
  }

}
