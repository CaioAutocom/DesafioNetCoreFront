import { Routes } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page/login-page.component';
import { RegisterPageComponent } from './users/pages/register-page/register-page/register-page.component';
import { PersonGetAllComponent } from './person/pages/person-get-all/person-get-all.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PersonGetByShortIdComponent } from './person/pages/person-get-by-short-id/person-get-by-short-id.component';
import { UpdatePersonByShortIdComponent } from './person/pages/updatePerson/update-person-by-short-id/update-person-by-short-id.component';

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
    }
    ,
    {
        path:'person',
        component: PersonGetAllComponent
    },
    {
        path:'personbyshortid',
        component: PersonGetByShortIdComponent
    },
    {
        path:'sidebar',
        component: SidebarComponent
    },
    {
        path:'updateperson',
        component: UpdatePersonByShortIdComponent
    },
    
];
