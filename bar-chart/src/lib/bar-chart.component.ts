import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import {
  ChartData,
  ChartOptions,
  ChartDataset,
  ChartEvent,
  ActiveElement,
  ChartTypeRegistry,
  Chart
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels); // Register plugin

@Component({
  selector: 'ril-bar-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @Input() chartData: ChartData<'bar'> = {
    labels: ['A', 'B'],
    datasets: [
      {
        data: [10, 20],
        label: 'Default',
        backgroundColor: ['#42A5F5', '#66BB6A'],
        hoverBackgroundColor: ['#42A5F5', '#66BB6A']
      }
    ]
  };

  @Input() options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#000',
        font: {
          weight: 'bold',
          size: 12
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  @Input() barThickness: number | undefined;

  @Output() barClick = new EventEmitter<{ label: string; value: number }>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['barThickness'] && this.barThickness !== undefined) {
      this.chartData.datasets = this.chartData.datasets.map(dataset => ({
        ...dataset,
        barThickness: this.barThickness,
        hoverBackgroundColor: dataset.backgroundColor
      })) as ChartDataset<'bar'>[];
    }
  }

  onChartClick(event: ChartEvent | undefined, activeElements: {}[] | undefined) {
  const active = activeElements as ActiveElement[];

  if (active?.length) {
    const firstElement = active[0];
    const datasetIndex = firstElement.datasetIndex;
    const index = firstElement.index;

    const label = this.chartData.labels?.[index] ?? '';
    const value = this.chartData.datasets[datasetIndex]?.data[index] ?? 0;

    this.barClick.emit({ label: String(label), value: Number(value) });
  }
  }
} 
