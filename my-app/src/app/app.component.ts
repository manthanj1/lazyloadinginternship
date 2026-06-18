import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { RouterOutlet } from '@angular/router';
import { CardsComponent } from '@ril-card';
import { LazyloadComponent } from '@ril-lazy-load';
import { LazyLoader2Component } from '@ril-lazy-loader2';
import { LazyLoader3Component } from '@ril-lazy-loader3';
import { BarChartComponent } from '@ril-bar-chart';
import { PieChartComponent } from '@ril-pie-chart';
import { LineChartComponent } from '@ril-line-chart';
import { ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardsComponent,
    LazyloadComponent,
    LazyLoader2Component,
    LazyLoader3Component,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';
  isBarDetailsPage = false; // 👈 Track current route

  constructor(private router: Router) {
    // Detect route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isBarDetailsPage = event.url.includes('/bar-details');
      });
  }

  goToBarDetails() {
    this.router.navigateByUrl('/bar-details?label=Test&value=99');
  }

  barThickness = 30;

  barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: '2023',
        data: [30, 50, 70, 90],
        backgroundColor: ['red', 'red', 'red', 'red']
      },
      {
        label: '2024',
        data: [40, 60, 80, 100],
        backgroundColor: ['pink', 'pink', 'pink', 'pink']
      },
      {
        label: '2025',
        data: [50, 70, 90, 110],
        backgroundColor: ['purple', 'purple', 'purple', 'purple']
      }
    ]
  };

  handleBarClick(event: { label: string; value: number }) {
    this.router.navigate(['/bar-details'], {
      queryParams: {
        label: event.label,
        value: event.value
      }
    });
  }

  pieData = {
    labels: ['Chrome', 'Firefox', 'Safari'],
    datasets: [{
      data: [60, 25, 15],
      backgroundColor: ['#4285F4', '#FF7139', '#34A853']
    }]
  };

  myLineData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        data: [65, 59, 80, 81],
        label: 'Monthly Sales',
        borderColor: '#000509ff',
        tension: 0.4,
        backgroundColor: 'rgba(52, 168, 83, 0.4)',
        pointStyle: 'star',
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  myLineOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Line Chart Example',
        font: {
          size: 18
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };
}
