import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() width: string = '500px';
  @Input() height: string = '500px';
  @Input() shadow: boolean = true;
  @Input() borderRadius: string = '12px';

  @ContentChild('cardHeader') headerTemplate!: TemplateRef<any>;
  @ContentChild('cardSubHeader') subHeaderTemplate!: TemplateRef<any>;
  @ContentChild('cardFooter') footerTemplate!: TemplateRef<any>;
}
