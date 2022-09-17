import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astrological-page',
  templateUrl: './astrological-page.component.html',
  styleUrls: ['./astrological-page.component.scss']
})
export class AstrologicalPageComponent implements OnInit {
  currentLeftIndex: number = 0;
  currentLeftIndexCopy: number = 0;
  currentMiddleIndex: number = 1;
  currentMiddleIndexCopy: number = 1;
  currentRightIndex: number = 2;
  currentRightIndexCopy: number = 2;
  clickPreventFlag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

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

  leftClickHandler() {
    this.clickPreventFlag = true;
    document.querySelector(".globe1")?.classList.add("globe1Animate");
    document.querySelector(".globe.middle")?.classList.add("globe2Animate");
    document.querySelector(".globe1>img")?.classList.add("img1Animate");
    document.querySelector(".globe.middle>img")?.classList.add("img2Animate");
    document.querySelector(".globe2")?.classList.add("globe3Animate");
    document.querySelector(".globe1Copy")?.classList.add("globe1CopyAnimate");
    document.querySelector(".hideInOutEffect")?.classList.add("hideInOut");
    if (this.currentLeftIndexCopy === 0) {
      this.currentLeftIndexCopy = 11;
    } else {
      this.currentLeftIndexCopy--;
    }
    setTimeout(() => {
      if (this.currentMiddleIndexCopy === 0) {
        this.currentMiddleIndexCopy = 11;
      } else {
        this.currentMiddleIndexCopy--;
      }
    }, 500)

    if (this.currentRightIndexCopy === 0) {
      this.currentRightIndexCopy = 11;
    } else {
      this.currentRightIndexCopy--;
    }

    setTimeout(() => {
      if (this.currentLeftIndex === 0) {
        this.currentLeftIndex = 11;
      } else {
        this.currentLeftIndex--;
      }

      if (this.currentMiddleIndex === 0) {
        this.currentMiddleIndex = 11;
      } else {
        this.currentMiddleIndex--;
      }

      if (this.currentRightIndex === 0) {
        this.currentRightIndex = 11;
      } else {
        this.currentRightIndex--;
      }
      document.querySelector(".globe1")?.classList.remove("globe1Animate");
      document.querySelector(".globe.middle")?.classList.remove("globe2Animate");
      document.querySelector(".globe1>img")?.classList.remove("img1Animate");
      document.querySelector(".globe.middle>img")?.classList.remove("img2Animate");
      document.querySelector(".globe2")?.classList.remove("globe3Animate");
      document.querySelector(".globe1Copy")?.classList.remove("globe1CopyAnimate");
      document.querySelector(".hideInOutEffect")?.classList.remove("hideInOut");
    }, 1000);
  }

  rightClickHandler() {
    document.querySelector(".globe1")?.classList.add("globe1AnimateR");
    document.querySelector(".globe.middle")?.classList.add("globe2AnimateR");
    document.querySelector(".globe2>img")?.classList.add("img3AnimateR");
    document.querySelector(".globe.middle>img")?.classList.add("img2AnimateR");
    document.querySelector(".globe2")?.classList.add("globe3AnimateR");
    document.querySelector(".globe2Copy")?.classList.add("globe3CopyAnimateR");
    document.querySelector(".hideInOutEffect")?.classList.add("hideInOut");
    if (this.currentRightIndexCopy === 11) {
      this.currentRightIndexCopy = 0;
    } else {
      this.currentRightIndexCopy++;
    }

    setTimeout(() => {
      if (this.currentMiddleIndexCopy === 11) {
        this.currentMiddleIndexCopy = 0;
      } else {
        this.currentMiddleIndexCopy++;
      }
    }, 500)

    if (this.currentLeftIndexCopy === 11) {
      this.currentLeftIndexCopy = 0;
    } else {
      this.currentLeftIndexCopy++;
    }

    setTimeout(() => {
      if (this.currentLeftIndex === 11) {
        this.currentLeftIndex = 0;
      } else {
        this.currentLeftIndex++;
      }

      if (this.currentMiddleIndex === 11) {
        this.currentMiddleIndex = 0;
      } else {
        this.currentMiddleIndex++;
      }

      if (this.currentRightIndex === 11) {
        this.currentRightIndex = 0;
      } else {
        this.currentRightIndex++;
      }
      document.querySelector(".globe1")?.classList.remove("globe1AnimateR");
      document.querySelector(".globe.middle")?.classList.remove("globe2AnimateR");
      document.querySelector(".globe2>img")?.classList.remove("img3AnimateR");
      document.querySelector(".globe.middle>img")?.classList.remove("img2AnimateR");
      document.querySelector(".globe2")?.classList.remove("globe3AnimateR");
      document.querySelector(".globe2Copy")?.classList.remove("globe3CopyAnimateR");
      document.querySelector(".hideInOutEffect")?.classList.remove("hideInOut");
    }, 1000);
  }
}
