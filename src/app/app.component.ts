import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSlideToggleModule],
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
