import { Component, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowbiteService } from '../../../../../services/flowbite.service';
import carrouselItems from '../../carrousel.json';
import { ItemCarrouselComponent } from '../item-carrousel/item-carrousel.component';

interface ItemCarrousel {
  id: number;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-home-carrousel',
  imports: [ItemCarrouselComponent, CommonModule],
  templateUrl: './home-carrousel.component.html',
  styleUrl: './home-carrousel.component.css'
})
export class HomeCarrouselComponent implements AfterViewInit{
  constructor(private flowbiteService: FlowbiteService) {
    //console.log('Items en constructor:', this.items);
  }
  
  items: ItemCarrousel[] = carrouselItems;

  activeIndex = 0;
  autoSlideInterval: any;


  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      
      this.startAutoSlide();
      console.log('Flowbite loaded', flowbite);
    });
  }
  
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }
  

  nextSlide(){
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prevSlide(){
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }
}


