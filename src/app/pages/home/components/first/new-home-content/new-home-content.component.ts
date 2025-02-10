import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeArticleElementComponent } from '../home-article-element/home-article-element.component';
import articulos from '../../articulos.json';

@Component({
  selector: 'app-new-home-content',
  imports: [HomeArticleElementComponent, CommonModule],
  templateUrl: './new-home-content.component.html',
  styleUrl: './new-home-content.component.css'
})
export class NewHomeContentComponent {
  articles = articulos;
}
