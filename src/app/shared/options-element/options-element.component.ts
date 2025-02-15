import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-element',
  imports: [],
  templateUrl: './options-element.component.html',
  styleUrl: './options-element.component.css'
})
export class OptionsElementComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() url!: string;
  @Input() objNum!: number;
}
