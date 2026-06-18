import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'ril-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() chartData: ChartData<'pie', number[], string> = {
    labels: ['A', 'B', 'C'],
    datasets: [{
      data: [30, 50, 20],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
    }]
  };

  @Input() chartTitle: string = 'Pie Chart';
  @Input() width: string = '400px';
  @Input() height: string = '400px';
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() colors: string[] = ['#ff6384', '#36a2eb', '#cc65fe'];

  chartType: 'pie' = 'pie';
  chartPlugins: Plugin[] = [ChartDataLabels];

ngOnInit(): void {
  const dataset = this.chartData.datasets[0];
  dataset.backgroundColor = this.colors;
  dataset.hoverBackgroundColor = [...this.colors]; // 👈 this keeps hover color same
}


  get chartOptions(): ChartOptions<'pie'> {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: this.legendPosition,
          labels: {
            font: {
              size: 14
            }
          }
        },
        title: {
          display: true,
          text: this.chartTitle,
          font: {
            size: 20
          }
        },
        datalabels: {
          color: '#000',
          font: {
            weight: 'bold' as const,
            size: 13
          },
          align: 'end',          // Move label outside
          anchor: 'end',         // Attach to edge
          offset: 10,            // Distance from the edge
          formatter: (value: number) => value
        }
      }
    };
  }
}
