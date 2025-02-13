import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsContainerComponent } from "../../shared/products-container/products-container.component";
import { FiltersComponent } from "./components/filters/filters.component";
import products from "./products.json";

interface productsItems {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    images: string[];
  }

@Component({
    selector: 'store-page',
    standalone: true,
    imports: [CommonModule, ProductsContainerComponent, FiltersComponent],
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css'],
})

export class StoreComponent implements OnInit{
    items: productsItems[] = products;

    ngOnInit(): void {
        //console.log(this.items);
    }
}