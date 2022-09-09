import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-twelve-astrological-page',
  templateUrl: './twelve-astrological-page.component.html',
  styleUrls: ['./twelve-astrological-page.component.scss']
})
export class TwelveAstrologicalPageComponent implements OnInit {
  clickFlag: Boolean = false;
  public innerWidth: any;

  listAstrologyUrl = [
    "../../assets/img/twelve-astrological/Aquarius.png",
    "../../assets/img/twelve-astrological/Pisces.png",
    "../../assets/img/twelve-astrological/Aries.png",
    "../../assets/img/twelve-astrological/Taurus.png",
    "../../assets/img/twelve-astrological/Gemini.png",
    "../../assets/img/twelve-astrological/Cancer.png",
    "../../assets/img/twelve-astrological/Leo.png",
    "../../assets/img/twelve-astrological/Virgo.png",
    "../../assets/img/twelve-astrological/Libra.png",
    "../../assets/img/twelve-astrological/Scorpio.png",
    "../../assets/img/twelve-astrological/Sagittarius.png",
    "../../assets/img/twelve-astrological/Capricorn.png",
  ];

  listName = [
    "Bảo Bình",
    "Song Ngư ",
    "Bạch Dương",
    "Kim Ngưu",
    "Song Tử",
    "Cự Giải",
    "Sư Tử",
    "Xử Nữ",
    "Thiên Bình",
    "Thiên Yết",
    "Nhân Mã",
    "Ma Kết"
  ];

  listDate = [
    "20/1 - 18/2",
    "19/2 - 20/3",
    "21/3 - 19/4",
    "20/4 - 20/5",
    "21/5 - 21/6",
    "22/6 - 22/7",
    "23/7 - 22/8",
    "23/8 - 22/9",
    "23/9 - 22/10",
    "23/10 - 22/11",
    "23/11 - 21/12",
    "22/12 - 19/1"
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  handleStarClick(index: Number) {
    if (this.clickFlag) {
      return;
    }
    this.clickFlag = true;

    const imgEles = document.querySelectorAll('.wrapper>.img-card');
    imgEles?.forEach(ele => {
      ele.classList.remove("trans-center");
    })
    const title1Eles = document.querySelectorAll('.img-wrapper .title1');
    title1Eles?.forEach(ele => {
      ele.classList.remove("hide");
    })
    const title2Eles = document.querySelectorAll('.img-wrapper .title2');
    title2Eles?.forEach(ele => {
      ele.classList.remove("hide");
    })

    const imgEle = document.querySelector('.wrapper>.img-card:nth-child(' + index + ')');
    imgEle?.classList.add("trans-center1");

    const title1Ele = document.querySelector('.img-card:nth-child(' + index + ') .img-wrapper .title1');
    title1Ele?.classList.add("hide");
    const title2Ele = document.querySelector('.img-card:nth-child(' + index + ') .img-wrapper .title2');
    title2Ele?.classList.add("hide");

    // Middle earth

    const circleEle = document.querySelector(".circle1");
    const nonBgCircleEle = document.querySelector(".circle2");
    nonBgCircleEle?.classList.toggle("show");
    circleEle?.classList.toggle("hide");
    setTimeout(() => {
      imgEle?.classList.add("scale13");
    }, 1000)

    setTimeout(() => {
      this.router.navigate(['/astrological-detail-page']);
    }, 2000)
  }
}
