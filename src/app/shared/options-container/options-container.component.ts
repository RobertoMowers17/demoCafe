import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import availableBranches from './../../pages/home/components/projects.json';
import { OptionsElementComponent } from '../options-element/options-element.component';

interface branches {
  id: number;
  titulo: string;
  subtitulo: string;
  imagen: string;
}

@Component({
  selector: 'app-options-container',
  imports: [CommonModule, OptionsElementComponent],
  templateUrl: './options-container.component.html',
  styleUrl: './options-container.component.css'
})
export class OptionsContainerComponent {

  options: branches[] = availableBranches;
    
}
