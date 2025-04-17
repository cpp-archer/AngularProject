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
  nextId: number = 1; 
  
  //currentEditId: number | null = null; // for edit user
  
  constructor() {
    
  }

  ngOnInit() 
  {
    
//     this.userForm= new FormGroup({
    
//     name: new FormControl('',),
//     surname: new FormControl(''),
//     birthdate: new FormControl(''),
//     email: new FormControl(''),
//     phone: new FormControl(''),
//     adresse : new FormControl(''),
// });

  this.userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
  });
  
  
}


// ngOnchanges() {

//   this.userForm.patchValue(UserComponent.usersArray);
  
// }

AddUser() {
 
  const newUser = { id: this.nextId, ...this.userForm.value };
  // const newUser = this.userForm.value;
  // newUser.id = this.nextId; 
  console.log('id = ' + this.nextId);
  console.log('from user comp => ' + newUser);
  UserComponent.usersArray.push(newUser);
  this.userForm.reset();
  this.nextId++;
  console.log(UserComponent.usersArray);

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
