import { Component, ViewChild } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; // if using <input> inside
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // r
import { Router } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';


@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule,NgIf,FormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multipleLoginOptionsIntegration-webapp';
  getConnected:boolean = true
  startConnecting: boolean =false
  connected: boolean = false
  constructor(private router: Router){}
  toggleState(event: MatSlideToggleChange){
   
if (event.checked) {
  this.getConnected = false
  this.startConnecting = true
  
}
if (!event.checked) {
  this.getConnected = true
  this.startConnecting = false
  

  
}
}


setConnectionState(){
  this.getConnected = !this.getConnected
  this.startConnecting = !this.startConnecting
}

navigateToCountryList(){
this.router.navigate(['/country-list'])
}

}
