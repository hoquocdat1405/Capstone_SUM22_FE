import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @Input()
  labels!: string[];
  @Input()
  values!: number[];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: this.labels,
      datasets: [
        {
          label: 'DISC Result Chart',
          data: this.values,
          backgroundColor: [
            'rgba(255, 65, 74, 1)',
            'rgba(255, 178, 0, 1)',
            'rgba(0, 179, 255, 1)',
            'rgba(0, 189, 69, 1)',
          ],
          borderColor: [
            'rgba(255, 65, 74, 1)',
            'rgba(255, 178, 0, 1)',
            'rgba(0, 179, 255, 1)',
            'rgba(0, 189, 69, 1)',
          ],
          cutout: '80%',
          offset: '15',
        },
      ],
    };

    const doughnutLabelsLine = {
      id: 'doughnutLabelsLine',
      afterDraw(chart: Chart, args: any, options: any) {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;

        chart.data.datasets.forEach((dataset: any, i: any) => {
          chart.getDatasetMeta(i).data.forEach((datapoint: any, index: any) => {
            console.log(dataset);
            const { x, y } = datapoint.tooltipPosition();
            console.log(x);

            const halfW = width / 2;
            const halfH = height / 2;

            const scale = 50;

            const xLine = x >= halfW ? x + scale : x - scale;
            const yLine = y >= halfH ? y + 0.5 * scale : y - 0.5 * scale;
            const xtraLine = x >= halfW ? 2 * scale : -2 * scale;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(xLine, yLine);

            ctx.lineTo(xLine + xtraLine, yLine);
            ctx.strokeStyle = dataset.borderColor[index];
            ctx.stroke();

            ctx.font = '24px Times News Roman';
            const textXPosition = x >= halfW ? 'left' : 'right';
            const textMargin = x >= halfW ? 10 : -10;
            ctx.textAlign = textXPosition;
            ctx.textBaseline = 'middle';
            const tmpLabels = ['D', 'I', 'S', 'C'];

            ctx.fillText(
              chart.data.datasets[0].data[index] +
                ' % thuoc nhom ' +
                tmpLabels[index],
              xLine + xtraLine + textMargin,
              yLine
            );
          });
        });
      },
    };

    const doughnutImgCenter = {
      id: 'doughnutImgCenter',
      afterDraw(chart: Chart, args: any, options: any) {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;

        var image = new Image();
        image.src = '../assets/img/disc-text/disc-c-nobackground.png';
        image.width = 0.5 * chart.height;
        image.height = 0.5 * chart.height;
        ctx.drawImage(
          image,
          //sx
          chart.width / 2 - image.width / 2,
          //sy
          chart.height / 2 - image.height / 2,
          //sw
          image.width,
          //sh
          image.height
        );
        ctx.restore();
      },
    };
    const config: ChartConfiguration = {
      type: 'doughnut',
      data: data,
      options: {
        layout: {
          padding: 50,
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                size: 1,
              },
            },
          },
        },
      },
      plugins: [doughnutLabelsLine, doughnutImgCenter],
    };

    const chartItem: ChartItem = document.getElementById(
      'my-chart'
    ) as ChartItem;

    new Chart(chartItem, config);
  }
}

/*
D - 255 65 74
I - 255 178 0
S - 0 179 255
C - 0 189 69
*/
