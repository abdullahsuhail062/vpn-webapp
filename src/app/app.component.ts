import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSlideToggleModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multipleLoginOptionsIntegration-webapp';
    //@ViewChild('toggle') toggle!: MatSlideToggle;
    toggle:boolean = false

    toggleState(toggle:boolean){
        alert(toggle)
    }


}
