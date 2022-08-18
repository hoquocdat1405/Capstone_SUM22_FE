import { ActivatedRoute, Router } from '@angular/router';
import { Tarot } from './../../tarot-page/Tarot';
import { TarotServiceService } from './../../tarot-page/tarot-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tarot-draw-card-page',
  templateUrl: './new-tarot-draw-card-page.component.html',
  styleUrls: ['./new-tarot-draw-card-page.component.scss']
})
export class NewTarotDrawCardPageComponent implements OnInit {
  currentTarot?: Tarot = {};
  cardActive: Boolean = false;
  clickFlag: Boolean = false;
  cardSelected?: Number;

  constructor(
    private tarotService: TarotServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentTarot = this.getRandomTarot();
  }

  getRandomTarot(): Tarot {
    let randomPos = Math.floor(Math.random() * 78);
    const tarot = this.tarotService.getTarotByIndex(randomPos) ?? {};
    return tarot;
  }

  cardClick(cardIndex: Number) {
    const cardEles = document.querySelectorAll(".card-wrapper");
    const overlayEle = document.querySelector(".overlay");
    if (this.clickFlag) {
      return;
    }
    this.cardSelected = cardIndex;
    this.clickFlag = true;
    this.currentTarot = this.getRandomTarot();
    cardEles.forEach(card => {
      card.classList.add('hide');
    })

    overlayEle?.classList.remove("hide");

    if (cardIndex === 3) {
      const cardEle = document.querySelector(".card-wrapper:nth-child(" + cardIndex + ")");
      cardEle?.classList.remove("hide");
      cardEle?.classList.add("card-trans-3");
    }
    else {
      const cardEle = document.querySelector(".card-wrapper:nth-child(" + cardIndex + ")");
      cardEle?.classList.remove("hide");
      cardEle?.classList.add("card-trans");
    }

    setTimeout(() => {
      const tarotDescEle = document.querySelector(".tarot-desc-content");
      tarotDescEle?.classList.remove("hide");
    }, 2000)
  }

  drawAgain() {
    const currentCardEle = document.querySelector(".card-wrapper:nth-child(" + this.cardSelected + ")");
    const cardEles = document.querySelectorAll(".card-wrapper");
    const tarotDescEle = document.querySelector(".tarot-desc-content");
    const overlayEle = document.querySelector(".overlay");

    overlayEle?.classList.add("hide");

    tarotDescEle?.classList.add("hide");
    if (!this.clickFlag) {
      return;
    }
    this.clickFlag = false;
    currentCardEle?.classList.remove("card-trans");
    currentCardEle?.classList.remove("card-trans-3");
    // currentCardEle?.classList.add("trans-back-1");
    switch (this.cardSelected) {
      case 1:
        currentCardEle?.classList.add("trans-back-1");
        break;
      case 2:
        currentCardEle?.classList.add("trans-back-2");
        break;
      case 3:
        currentCardEle?.classList.add("trans-back-3");
        break;
      case 4:
        currentCardEle?.classList.add("trans-back-4");
        break;
      case 5:
        currentCardEle?.classList.add("trans-back-5");
        break;
    }
    setTimeout(() => {
      cardEles.forEach(card => {
        card.classList.remove("hide");
      })
      switch (this.cardSelected) {
        case 1:
          currentCardEle?.classList.remove("trans-back-1");
          break;
        case 2:
          currentCardEle?.classList.remove("trans-back-2");
          break;
        case 3:
          currentCardEle?.classList.remove("trans-back-3");
          break;
        case 4:
          currentCardEle?.classList.remove("trans-back-4");
          break;
        case 5:
          currentCardEle?.classList.remove("trans-back-5");
          break;
      }
    }, 1000)

  }
}
