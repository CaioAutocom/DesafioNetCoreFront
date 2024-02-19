import { Routes } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page/login-page.component';
import { RegisterPageComponent } from './users/pages/register-page/register-page/register-page.component';
import { PersonGetAllComponent } from './person/pages/person-get-all/person-get-all.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

export const routes: Routes = [
    // {
    //     // quando a rota estiver vazia, redireciona para o login
    //     path:'',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    {
        path:'login',
        component: LoginPageComponent
    },
    {
        path:'register',
        component: RegisterPageComponent
    }
    ,
    {
        path:'person',
        component: PersonGetAllComponent
    }
];
