import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProjectElementComponent } from '../home-project-element/home-project-element.component';
import proyectos from '../../projects.json'

@Component({
  selector: 'app-home-projects-content',
  imports: [HomeProjectElementComponent, CommonModule],
  templateUrl: './home-projects-content.component.html',
  styleUrl: './home-projects-content.component.css'
})
export class HomeProjectsContentComponent {
  projects = proyectos;

}
