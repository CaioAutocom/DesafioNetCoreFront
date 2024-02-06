import { Routes } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page/login-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

export const routes: Routes = [
    {
        // quando a rota estiver vazia, redireciona para o login
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginPageComponent
    },
    {
        path:'sidebar',
        component: SidebarComponent
    }
];
