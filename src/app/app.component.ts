import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { UserListComponent } from "./user-list/user-list.component";
@Component({
  selector: 'app-root',
  imports: [UserComponent, HomeComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';


}
