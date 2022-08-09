import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent implements OnInit {
  @Input()
  labels!: string[];
  @Input()
  values!: number[];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);
    const data = {
      labels: this.labels,
      datasets: [
        {
          label: 'Holland Result Chart',
          data: this.values,
          // pointBackgroundColor: 'rgba(59, 215, 208, 1)',
          pointBackgroundColor: '#E88B00',
          pointRadius: 4,
          pointBorderWidth: 5,
          backgroundColor: ['rgba(255, 65, 74, 0)'],
          // borderColor: ['rgba(59, 215, 208, 1)'],
          borderColor: ['#E88B00'],
          borderWidth: 3,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'radar',
      data: data,
      options: {
        scales: {
          // scale: {
          //   // ticks: {
          //   //  limit: true,
          //   //   min: 0,
          //   //   // userCallback: function (label, index, labels) {
          //   //   //   // when the floored value is the same as the value we have a whole number
          //   //   //   if (Math.floor(label) === label) {
          //   //   //     return label;
          //   //   //   }
          //   //   // },
          //   // },
          // },
          r: {
            angleLines: {
              color: 'white',
            },
            grid: {
              color: '#D9D9D9',
              lineWidth: 2,
            },
            ticks: {
              // color: 'rgba(59, 215, 208, 1)',
              color: '#E88B00',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
            pointLabels: {
              // backdropColor:'#655498',
              // borderRadius: 45,
              padding: 30,
              // backdropPadding: 35,
              color: '#E88B00',
              font: {
                size: 18,
                weight: 'bold',
              },
            },
          },
        },
        layout: {},
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      plugins: [],
    };

    const chartItem: ChartItem = document.getElementById(
      'my-chart'
    ) as ChartItem;

    new Chart(chartItem, config);
  }
}
