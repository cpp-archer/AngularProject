import { Component} from '@angular/core';
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
  //i have to do this to have a kind of container for the users from the user component

  ngOnInit() {
    this.users = UserComponent.usersArray; //we get the static shared users
    console.log(this.users);
  }


  //in delete user component
  deleteUser(id: number) {
    console.log('from delete comp');
    UserComponent.usersArray = UserComponent.usersArray.filter(user => user.id !== id);
    console.log(UserComponent.usersArray);
    this.users=UserComponent.usersArray; // update
    console.log(this.users);
  }

 
}

