import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,MatFormField,ReactiveFormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {

  userForm!: FormGroup;
  static usersArray: any[] = []; //stock
  static nextId: number = 1; //when i put thiis in static, i no longer have the ID increment problems
  
  //currentEditId: number | null = null; // for edit user
  
  constructor() {
    
  }

  ngOnInit() 
  {
    
    //THE ID INCREMENT WORK WITH THIS PART (without the validators) like we've seen together 
//     this.userForm= new FormGroup({
    
//     name: new FormControl('',),
//     surname: new FormControl(''),
//     birthdate: new FormControl(''),
//     email: new FormControl(''),
//     phone: new FormControl(''),
//     adresse : new FormControl(''),
// });


//WHEN I USE THIS without , THE ID INCREMENT WONT WORK, but with the thing on top does 
//ok well now the increment works when i put the "next id" in static, idk why
  this.userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
  });
  
  
}

// ngOnchanges() {
//   this.userForm.patchValue(UserComponent.usersArray);
// }

AddUser() {
 
  const newUser = { id: UserComponent.nextId, ...this.userForm.value };
  // const newUser = this.userForm.value;
  // newUser.id = this.nextId; 
  console.log('id = ' + UserComponent.nextId);
  console.log('from user comp => ' + JSON.stringify(UserComponent.usersArray.length));
  UserComponent.usersArray.push(newUser);
  this.userForm.reset();
  UserComponent.nextId++;
  console.log(UserComponent.usersArray);

  //return new User model

}

  EditUser(user: any) {
    // this.userForm.setValue({
    //   name: user.name,
    //   surname: user.surname,
    //   birthdate: user.birthdate,
    //   email: user.email,
    //   phone: user.phone,
    //   adresse: user.adresse
    // });
    // this.currentEditId = user.id;
  }
  
}
