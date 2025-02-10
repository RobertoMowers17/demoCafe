import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-section-item',
  imports: [CommonModule],
  templateUrl: './home-section-item.component.html',
  styleUrl: './home-section-item.component.css'
})
export class HomeSectionItemComponent {
  @Input() image!: string;
  @Input() alt!: string;
  @Input() titulo!: string;
  @Input() parrafo!: string;
  @Input() reverse: boolean = false;
}
