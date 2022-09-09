import { ActivatedRoute, Router } from '@angular/router';
import { Tarot } from './../../tarot-page/Tarot';
import { TarotServiceService } from './../../tarot-page/tarot-service.service';
import { Component, HostListener, OnInit } from '@angular/core';

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
  readonly textScrollEle = document.querySelector(".detail-section-content");

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
    const cardEle = document.querySelector(".card-wrapper:nth-child(" + cardIndex + ")");
    const btnEle = document.querySelector(".wrapper .btn");
    if (this.clickFlag) {
      return;
    }
    this.cardSelected = cardIndex;
    this.clickFlag = true;
    this.currentTarot = this.getRandomTarot();
    btnEle?.classList.remove("hide");
    cardEle?.classList.add("zindex1");

    cardEles.forEach((card, index) => {
      card.classList.remove('hover-only');
      card.classList.add('shadow-when-active');
      setTimeout(() => {
        card.classList.add("card-rotate");
        if (!(this.cardSelected?.toFixed(0) === (index + 1).toString())) {
          card.classList.add("hide");
        }
      }, 600)
    })
  }

  drawAgain() {
    const cardEles = document.querySelectorAll(".card-wrapper");
    const btnEle = document.querySelector(".wrapper .btn");
    if (!this.clickFlag) {
      return;
    }
    this.clickFlag = false;
    cardEles.forEach(card => {
      card.classList.remove("card-rotate");
      card.classList.remove("zindex1");
      card.classList.remove("shadow-when-active");
      card.classList.add("hover-only");

      setTimeout(() => {
        card.classList.remove("hide");
        btnEle?.classList.add("hide");
      }, 600)
    })
  }

  showDetail() {
    console.log(this.currentTarot?.name);
    document.querySelector('.detail-section')?.classList.remove('hide');
    document.querySelector(".page-container-overlay")?.classList.remove("hide");
  }


  // Horizontal ProcessBar Logic

  @HostListener('scroll', ['$event'])
  handleScrollEvent(event:Event) {
    const scrollPerc = (document.querySelector(".detail-section-content")?.scrollTop ?? 0) /
    ((document.querySelector(".detail-section-content")?.scrollHeight ?? 0) -
    (document.querySelector(".detail-section-content")?.clientHeight ?? 0));
    const progress = document.querySelector<HTMLElement>("#progressbar");
    if(progress != null) {
      progress.style.width = scrollPerc * 100 + "%";
    }
  }

  handleOverlayClick() {
    document.querySelector(".page-container-overlay")?.classList.add("hide");
    document.querySelector('.detail-section')?.classList.add('hide');
  }

  // reload and not check same page prevent
  drawAgainHandler() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/new-tarot-page']);
  }
}
