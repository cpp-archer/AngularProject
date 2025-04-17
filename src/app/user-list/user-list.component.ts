import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];

  ngOnInit() {
    this.users = UserComponent.usersArray; // get the static shared users
    console.log(this.users);
  }

  deleteUser(id: number) {
    UserComponent.usersArray = UserComponent.usersArray.filter(user => user.id !== id);
    console.log(UserComponent.usersArray);
    this.users=UserComponent.usersArray; // met a jour
    console.log(this.users);
  }

 
}

