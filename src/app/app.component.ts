import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';

  userForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    birthdate: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    adresse: new FormControl('')
  })
}
