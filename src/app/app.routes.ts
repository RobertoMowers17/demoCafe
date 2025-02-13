import { Routes } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { StoreComponent } from './pages/store/store.component';
import { HomePageComponent } from './pages/home/home.component';
import { MenusComponent } from './pages/menus/menus.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'store', component: StoreComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'menus', component: MenusComponent },
];
