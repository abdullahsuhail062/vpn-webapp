import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-country-list',
  imports: [RouterLink,MatListModule,MatCheckboxModule,FormsModule ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {

  isChecked:boolean = false
  @Output() itemClicked = new EventEmitter<{ image: string, text: string }>();
  constructor(private router: Router){}
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
     const data = {image:'images/unitedstate.png', text: 'United State'};
      this.itemClicked.emit(data)
        this.router.navigate(['/'])

        
    
     
    }

    onUkItemClick(): void {
      this.itemClicked.emit({image:'images/unitedkingdom.png', text: 'United Kingdom'})
      this.router.navigate(['/'])


     
    }
    onGmItemClick(): void {
      this.itemClicked.emit({image:'images/germany.jpeg', text: 'Germany'})
      this.router.navigate(['/'])


     
    }
    onInItemClick(): void {
      this.itemClicked.emit({image:'images/india.jpeg', text: 'India'})
      this.router.navigate(['/'])


     
    }
    onAusItemClick(): void {
      this.itemClicked.emit({image:'images/autralia.jpeg', text: 'Australia'})
      this.router.navigate(['/'])


    }
   

   }


 


