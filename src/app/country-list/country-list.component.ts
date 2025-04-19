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
export class CountryListComponent implements OnInit {

  isChecked:boolean = false
  @Output() itemClicked = new EventEmitter<{ image: string, text: string }>();
  
  list = [
    { image: 'images/unitedstate.png', text: 'United State' },
    { image: 'images/unitedkingdom.png', text: 'United Kingdom' },
    { image: 'images/germany.jpeg', text: 'Germany' },
    {image:   'images/india.jpeg', text: 'India'},
    {image: 'images/australia.jpeg', text: 'Australia'}
  ];


  ngOnInit(): void {
    this.isChecked = true
    
     this.update(this.isChecked)   
    
  }


  update(event: boolean){
    event = true
       
    }


    onUsaItemClick(): void {
      this.itemClicked.emit({image:'images/unitedstate.png', text: 'United State'})
     
    }

    onUkItemClick(): void {
      this.itemClicked.emit({image:'images/unitedkingdom.png', text: 'United Kingdom'})

     
    }
    onGmItemClick(): void {
      this.itemClicked.emit({image:'images/germany.jpeg', text: 'Germany'})

     
    }
    onInItemClick(): void {
      this.itemClicked.emit({image:'images/india.jpeg', text: 'India'})

     
    }
    onAusItemClick(): void {
      this.itemClicked.emit({image:'images/autralia.jpeg', text: 'Australia'})

    }
   

   }


 


