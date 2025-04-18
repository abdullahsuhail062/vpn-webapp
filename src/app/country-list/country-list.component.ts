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
   divContent = this.unitedState.nativeElement

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
      const text = this.unitedState.nativeElement.innerText;
      console.log('Div content:', text);
      const img: HTMLImageElement = this.divContent.querySelector('img')
    if (img) {
      console.log('Image src:', img.src);
      console.log('Image alt:', img.alt);
    }
    }
  

   }


 


