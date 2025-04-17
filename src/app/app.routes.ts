import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { UserComponent } from './user';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    // { path: '', component : HomeComponent },
    // {path:'user', component : UserComponent}

    // {path:"**", redirectTo: ''}

    {path: 'home' , component: HomeComponent},
    {path: 'createUser' , component: UserComponent},
    {path: 'listUser' , component: UserListComponent},
];

