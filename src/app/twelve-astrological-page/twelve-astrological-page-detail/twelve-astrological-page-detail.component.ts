import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twelve-astrological-page-detail',
  templateUrl: './twelve-astrological-page-detail.component.html',
  styleUrls: ['./twelve-astrological-page-detail.component.scss']
})
export class TwelveAstrologicalPageDetailComponent implements OnInit {
  sentInfo = {
    name: "Bảo Bình",
    url: "../../../assets/img/twelve-astrological/Aquarius.png",
    date: "20/1 – 18/2",
    description: "This is a description ........."
  }

  charPercentage: number[] = [
    70, 40, 85, 20, 35
  ];

  charTitle: string[] = [
    "Cởi mở", "Hướng ngoại", "Tự chủ", "Hòa đồng", "Bất ổn cảm xúc"
  ];

  getColor(index: number): string {
    switch (index) {
      case 1:
        return "#62D2CE";
      case 2:
        return "#B0FF95";
      case 3:
        return "#DA6E88";
      case 4:
        return "#6B71FF";
      case 0:
        return "#82528A";
      default: return "#fff";
    }
  }

  public mbtiType: { name: string; shorthand: string; imgSrc: string };

  constructor() {
    this.mbtiType = { name: 'Người che chở', shorthand: 'INFJ', imgSrc: '../../assets/svg/mbti-types/mbti-type-infj.svg' }
  }

  ngOnInit(): void {
  }



}
