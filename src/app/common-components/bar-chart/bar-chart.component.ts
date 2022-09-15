import { Chart, registerables, ChartConfiguration, ChartItem } from 'chart.js';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() width?: number;
  @Input() height?: number;
  @Input() data?: Array<number>;
  @Input() label?: Array<string>;
  @Input() backgroundColor?: Array<number>;
  @Input() borderColor?: Array<number>;
  @Input() chartId:string = "";

  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit() {

    this.createChart();
  }

  ngOnInit(): void {
    // this.createChart();
  }

  createChart() {
    // @ViewChild(this.chartId) this.chartId?: ElementRef;

    // console.log(this.chartId);
    // let htmlRef = this.elementRef.nativeElement.querySelector("#" + this.chartId);
    // let htmlRef = document.querySelector("#" + this.chartId);
    // console.log(htmlRef);
    Chart.register(...registerables);
    const config = {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [{
          label: '# of Votes',
          data: this.data,
          backgroundColor: this.backgroundColor ?? [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: this.borderColor ?? [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        maxBarThickness: 150,
        layout: {
          padding: 0,
        }
      }
    };

    if (Chart.getChart(this.chartId)) {
      Chart.getChart(this.chartId)?.destroy();
    }

    // new Chart(
    //   htmlRef as ChartItem,
    //   config as ChartConfiguration
    // );
  }
}
