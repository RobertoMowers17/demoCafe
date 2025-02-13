import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-images-carrousel',
  imports: [CommonModule],
  templateUrl: './product-images-carrousel.component.html',
  styleUrl: './product-images-carrousel.component.css'
})
export class ProductImagesCarrouselComponent {
  @Input() images!: string[];
    currentIndex: number = 0; 
  
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
}
