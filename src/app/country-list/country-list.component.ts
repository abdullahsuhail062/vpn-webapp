import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-country-list',
  imports: [RouterLink,MatListModule,MatCheckboxModule,FormsModule ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit,AfterViewInit {
  @ViewChild('unitedState')unitedState!: ElementRef;

  isChecked:boolean = false
  @Output() eventEmitter = new EventEmitter

  ngOnInit(): void {
    this.isChecked = true
    
     this.update(this.isChecked)   
    
  }


  update(event: boolean){
    event = true
       
    }


    ngAfterViewInit(): void {
      const divContent = this.unitedState.nativeElement

      const text = this.unitedState.nativeElement.innerText;
      console.log('Div content:', text);
      const img: HTMLImageElement = divContent.querySelector('img');
    if (img && img.alt === 'united state') {
      console.log('Image src:', img.src);
      console.log(text);
      
    }
    }
  

   }


 


