import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-home-project-element',
  imports: [],
  templateUrl: './home-project-element.component.html',
  styleUrl: './home-project-element.component.css'
})
export class HomeProjectElementComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() url!: string;
}
