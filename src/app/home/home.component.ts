import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  imports: [RouterModule,MatButtonModule,MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor() {
   console.log('home component constructor');
    
  }
}
