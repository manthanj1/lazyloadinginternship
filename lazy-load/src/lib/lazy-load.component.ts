import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-lazyload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css']
})
export class LazyloadComponent {
  @Input() color: string = 'blue';
  @Input() size: string = '16px'; 
}
