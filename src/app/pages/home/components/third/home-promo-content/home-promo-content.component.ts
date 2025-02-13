import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import trendingProducts from './../../products.json';
import { ProductsContainerComponent } from '../../../../../shared/products-container/products-container.component';

interface productsItems {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-home-promo-content',
  imports: [CommonModule, ProductsContainerComponent],
  templateUrl: './home-promo-content.component.html',
  styleUrl: './home-promo-content.component.css'
})

export class HomePromoContentComponent {
  items: productsItems[] = trendingProducts;
}
