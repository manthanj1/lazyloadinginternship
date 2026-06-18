import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType, ChartData, PointStyle } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

@Component({
  selector: 'ril-line-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() chartLabels: string[] = [];
  @Input() chartValues: number[] = [];
  @Input() chartLabelText: string = 'Line Chart';
  @Input() lineColor: string = '#42A5F5';
  @Input() backgroundColor: string = 'rgba(66, 165, 245, 0.2)';
  @Input() lineTension: number = 0.4;

  @Input() pointStyle: PointStyle = 'circle';
  @Input() pointRadius: number = 6;
  @Input() pointHoverRadius: number = 8;

  chartType: 'line' = 'line';
  plugins = [ChartDataLabels];

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#000',
        font: {
          weight: 'bold' as const,
          size: 12
        }
      },
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Line Chart with Data Labels'
      }
    }
  };

  get chartData(): ChartData<'line'> {
    return {
      labels: this.chartLabels,
      datasets: [
        {
          label: this.chartLabelText,
          data: this.chartValues,
          borderColor: this.lineColor,
          backgroundColor: this.backgroundColor,
          tension: this.lineTension,
          pointStyle: this.pointStyle,
          pointRadius: this.pointRadius,
          pointHoverRadius: this.pointHoverRadius
        }
      ]
    };
  }

  ngOnInit(): void {
    Chart.register(ChartDataLabels);
  }
}
