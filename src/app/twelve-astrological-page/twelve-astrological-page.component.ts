import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twelve-astrological-page',
  templateUrl: './twelve-astrological-page.component.html',
  styleUrls: ['./twelve-astrological-page.component.scss']
})
export class TwelveAstrologicalPageComponent implements OnInit {
  listAstrologyUrl = [
    "../../assets/img/twelve-astrological/Aquarius.png",
    "../../assets/img/twelve-astrological/Aries.png",
    "../../assets/img/twelve-astrological/Cancer.png",
    "../../assets/img/twelve-astrological/Capricorn.png",
    "../../assets/img/twelve-astrological/Taurus.png",
    "../../assets/img/twelve-astrological/Gemini.png",
    "../../assets/img/twelve-astrological/Leo.png",
    "../../assets/img/twelve-astrological/Libra.png",
    "../../assets/img/twelve-astrological/Pisces.png",
    "../../assets/img/twelve-astrological/Sagittarius.png",
    "../../assets/img/twelve-astrological/Scorpio.png",
    "../../assets/img/twelve-astrological/Virgo.png",
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleStarClick(index:Number) {
    const imgEles = document.querySelectorAll('.wrapper>img');
    imgEles?.forEach(ele => {
      ele.classList.remove("trans-center");
    })

    const imgEle = document.querySelector('.wrapper>img:nth-child(' + index + ')');
    imgEle?.classList.add("trans-center");
  }
}
