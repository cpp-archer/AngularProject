import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { UserComponent } from './user';
import { UserListComponent } from './userList/user-list.component';

export const routes: Routes = [
    { path: '', component : HomeComponent },
    {path:'user', component : UserComponent},
    {path:'userList', component : UserListComponent},


    {path:"**", redirectTo: ''}
];

