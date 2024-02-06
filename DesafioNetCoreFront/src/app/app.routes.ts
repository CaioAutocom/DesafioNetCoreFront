import { Routes } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page/login-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RegisterPageComponent } from './users/pages/register-page/register-page/register-page.component';

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
        path:'register',
        component: RegisterPageComponent
    },
    {
        path:'sidebar',
        component: SidebarComponent
    }
];
