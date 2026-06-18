import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.scss']
})
export class BarDetailsComponent {
  label: string | null = null;
  value: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.label = params.get('label');
      this.value = params.get('value');
    });
  }
}
