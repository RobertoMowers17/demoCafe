import { Component } from '@angular/core';
import sectionItems from '../../sections.json';
import { HomeSectionItemComponent } from '../home-section-item/home-section-item.component';
import { CommonModule } from '@angular/common';

interface sectionsItem {
  id: number;
  titulo: string;
  parrafo: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-home-sections-content',
  imports: [HomeSectionItemComponent, CommonModule],
  templateUrl: './home-sections-content.component.html',
  styleUrl: './home-sections-content.component.css'
})
export class HomeSectionsContentComponent {

  items: sectionsItem[] = sectionItems;
}
