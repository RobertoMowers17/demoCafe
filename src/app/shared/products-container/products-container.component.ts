import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImagesCarrouselComponent } from '../product-images-carrousel/product-images-carrousel.component';

@Component({
  selector: 'app-products-container',
  imports: [CommonModule, ProductImagesCarrouselComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent {
    @Input() name!: string;
    @Input() description!: string;
    @Input() images!: string[];
    @Input() category!: string;
    @Input() price!: number;
    
    isVertical: boolean = false;

    // Detectar si la primera imagen es vertical u horizontal
    onImageLoad(event: Event) {
      const img = event.target as HTMLImageElement;
      this.isVertical = img.naturalHeight > img.naturalWidth;
    }
}
