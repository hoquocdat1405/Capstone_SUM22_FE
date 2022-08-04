import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-twelve-astrological-page',
  templateUrl: './twelve-astrological-page.component.html',
  styleUrls: ['./twelve-astrological-page.component.scss']
})
export class TwelveAstrologicalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  carousel = document.querySelector('.carousel');
  currdeg = 0;
  carouselStyle = {};
  currIndex = 0;
  clickStyle = {};
  flagClick:Boolean = false;
  isOpacity:Boolean = true;
  isDisplayOverlayClass:Boolean = false;
  isDisplayDetailPage:Boolean = false;

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
  changeCurrIndex(sign:String) {
    if(sign === "next") {
      if(this.currIndex == 11) {
        this.currIndex = -1;
      }
      this.currIndex++;
    }
    else {
      if(this.currIndex == 0) {
        this.currIndex = 12;
      }
      this.currIndex--;
    }
  }

  clickItem(itemName:String) {
    if(!this.isDisplayOverlayClass) {
      this.isDisplayOverlayClass = true;
    }
    if(!this.isDisplayDetailPage) {
      this.isDisplayDetailPage = true;
    }
    switch(itemName) {
      case "a": {
        // if(!this.flagClick) {
        //   this.clickStyle = {
        //     "transform" : "rotateY(calc(30deg * 0)) translateZ(300px) translateY(-20vh)",
        //     "z-index" : "1001"
        //   }
        //   this.flagClick = true;
        //   this.isOpacity = false;
        // } else {
        //   this.clickStyle = {}
        //   this.flagClick = false;
        //   this.isOpacity = true;
        // }
      }
    }
  }

  handleOverlayClick() {
    if(this.isDisplayOverlayClass) {
      this.isDisplayOverlayClass = false;
    }
    if(this.isDisplayDetailPage) {
      this.isDisplayDetailPage = false;
    }
  }
}
