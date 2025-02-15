import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeContentComponent } from './components/welcome-content/welcome-content.component';
import availableMenus from "./menus.json";

interface MenuItem {
  name: string;
  price: number;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface BranchMenu {
  id: number;
  branch: string;
  products: MenuCategory[];
}

type Menus = BranchMenu[];

@Component({
  selector: 'app-menus',
  imports: [CommonModule, WelcomeContentComponent],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})

export class MenusComponent {
  menus: Menus = availableMenus;

  selectedOption?: BranchMenu;

}
