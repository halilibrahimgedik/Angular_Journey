import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';

export const routes: Routes = [
    {path: "" , component : LoginComponent},
    {path: 'login' , component : LoginComponent},
    {path: 'create-user' , component : CreateUserComponent}
];
