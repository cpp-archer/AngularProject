import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from '../home';

@Component({
  selector: 'app-user-list',
  imports: [MatButtonModule,CommonModule, UserComponent, HomeComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {
users:any[]=[];

ngOnInit() {
  this.users = UserComponent.usersArray ;
  console.log(this.users);

}


}