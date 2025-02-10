import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-carrousel',
  imports: [CommonModule],
  templateUrl: './item-carrousel.component.html',
  styleUrl: './item-carrousel.component.css'
})

export class ItemCarrouselComponent {
  @Input() image!: string;
  @Input() alt!: string;
  @Input() active!: boolean;

}
