import { Component } from '@angular/core';
import { HomeMainContentComponent } from './components/first/home-main-content/home-main-content.component';
import { NewHomeContentComponent } from './components/first/new-home-content/new-home-content.component';
import { HomeProjectsContentComponent } from './components/first/home-projects-content/home-projects-content.component';
import { HomeSectionsContentComponent } from './components/second/home-sections-content/home-sections-content.component';
import { HomePromoContentComponent } from './components/third/home-promo-content/home-promo-content.component';

@Component({
  selector: 'app-home-component',
  imports:  [HomeMainContentComponent, HomeSectionsContentComponent, NewHomeContentComponent, HomeProjectsContentComponent, HomePromoContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePageComponent {

}
