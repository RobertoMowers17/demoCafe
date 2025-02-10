import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-article-element',
  imports: [],
  templateUrl: './home-article-element.component.html',
  styleUrl: './home-article-element.component.css'
})
export class  HomeArticleElementComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
