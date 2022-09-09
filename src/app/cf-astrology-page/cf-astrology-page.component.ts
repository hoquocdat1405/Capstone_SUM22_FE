import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cf-astrology-page',
  templateUrl: './cf-astrology-page.component.html',
  styleUrls: ['./cf-astrology-page.component.scss']
})
export class CfAstrologyPageComponent implements OnInit {

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

}
