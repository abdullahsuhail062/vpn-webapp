import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSlideToggleModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multipleLoginOptionsIntegration-webapp';
  getConnected:boolean = true
  startConnecting: boolean =false
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


}
