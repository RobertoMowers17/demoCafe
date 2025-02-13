import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    FooterComponent, 
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'madboingShop';
}
