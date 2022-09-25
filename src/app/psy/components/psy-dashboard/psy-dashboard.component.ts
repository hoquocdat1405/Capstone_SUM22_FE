import { Chart, ChartItem, ChartConfiguration, registerables } from 'chart.js';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-psy-dashboard',
  templateUrl: './psy-dashboard.component.html',
  styleUrls: ['./psy-dashboard.component.scss']
})
export class PsyDashboardComponent implements OnInit {
  @ViewChild('ele1') ele1?: ElementRef;
  @ViewChild('ele2') ele2?: ElementRef;

  constructor(private elementRef: ElementRef) { 
    
  }

  ngAfterViewInit() {
    this.createChart("canvas1", this.ele1, [10, 14, 19, 21]);
    this.createChart("canvas2", this.ele2);
  }

  ngOnInit(): void {
    
  }

  createChart(id:string, ele?: ElementRef, data?:number[], labels?:string[]) {
    Chart.register(...registerables);
    const config = {
      type: 'bar',
      data: {
        labels: labels ?? ['MBTI', 'DISC', 'Holland', 'Big Five'],
        datasets: [{
          label: '# of User Access',
          data: data ?? [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
        maxBarThickness: 100,
      }
    };

    if (Chart.getChart(id)) {
      Chart.getChart(id)?.destroy();
    }

    new Chart(
      ele?.nativeElement,
      config as ChartConfiguration
    );
  }
}
