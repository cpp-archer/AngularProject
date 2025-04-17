import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

  constructor() {
    
  }

  ngOnInit() 
  {
    
    this.userForm= new FormGroup({
    
    name: new FormControl(''),
    surname: new FormControl(''),
    birthdate: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    adresse : new FormControl(''),


});}
ngOnchanges() {

  this.userForm.patchValue(UserComponent.usersArray);
  
}

AddUser() {
  const newUser = { id: this.nextId, ...this.userForm.value };
  // const newUser = this.userForm.value;
  // newUser.id = this.nextId; 
  console.log(newUser);
  UserComponent.usersArray.push(newUser);
  this.userForm.reset();
  this.nextId++;
  console.log(UserComponent.usersArray);

  };




  EditUser(){

  }


 
}
