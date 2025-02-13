import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  @Input() items: any[] = []; // Lista de productos

  searchText: string = ''; // Texto de búsqueda
  selectedCategory: string = ''; // Categoría seleccionada
  priceOrder: string = 'asc'; // Orden de precios
  categories: string[] = []; // Lista de categorías para el dropdown
  filteredItems: any[] = []; // Productos filtrados

  ngOnInit() {
    // Inicializamos la lista de categorías
    this.categories = [...new Set(this.items.map(item => item.category))];
    this.filteredItems = this.items;
  }

  ngOnChanges() {
    this.filterItems();
  }

  filterItems() {
    // Filtrar por nombre y categoría
    let filtered = this.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory ? item.category === this.selectedCategory : true;
      return matchesSearch && matchesCategory;
    });

    // Ordenar por precio
    if (this.priceOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (this.priceOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    this.filteredItems = filtered;
  }

}
