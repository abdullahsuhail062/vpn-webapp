import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CountryListComponent } from '../country-list/country-list.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  imports: [MatSlideToggleModule, NgIf, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, CountryListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  {
  getConnected:boolean = true
  showList:boolean = false
  startConnecting: boolean =false
  connected: boolean = false
  selectedItem: { image: string, text: string } | null = null;

  constructor(private router: Router){}
  

  getData(item:{image: string, text: string}){
    this.selectedItem = item;
    console.log(this.selectedItem, 'log data received');
    this.showList = true
    


  }


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
