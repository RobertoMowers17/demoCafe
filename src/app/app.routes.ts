import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


//Rutas Publicas
import { HomePageComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { StoreComponent } from './pages/store/store.component';
import { MenusComponent } from './pages/menus/menus.component';

// Rutas de Admin
import { LoginComponent } from './admin/pages/login/login.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { authGuard } from './services/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: HomePageComponent },
            { path: 'home', component: HomePageComponent },
            { path: 'store', component: StoreComponent },
            { path: 'explore', component: ExploreComponent },
            { path: 'menus', component: MenusComponent }
        ]
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

