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
    @ViewChild('toggle') toggle!: MatSlideToggle;

  getFocus(){
    const isToggled = this.toggle.checked
    if (!isToggled) {
      alert('Please toggle button before submitting')
      this.toggle.focus()
      
    }else alert('form submitted!')
  }


}
