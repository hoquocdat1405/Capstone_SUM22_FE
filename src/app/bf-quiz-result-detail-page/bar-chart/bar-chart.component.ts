import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  charPercentage: number[] = [];

  @Input()
  charTitle: string[] = [];

  @Input()
  charCharacter: string[] = [];

  @Input()
  contentHover: string[] = [];

  getColor(index: number): string {
    switch (index) {
      case 1:
        return '#62D2CE';
      case 2:
        return '#B0FF95';
      case 3:
        return '#DA6E88';
      case 4:
        return '#6B71FF';
      case 0:
        return '#82528A';
      default:
        return '#fff';
    }
  }
}
