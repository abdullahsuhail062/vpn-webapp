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
  @ViewChild('itemList')itemList!: ElementRef;

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


    onItemClick(event: MouseEvent): void {
      const target = event.target as HTMLElement;
    
      // Find the closest mat-list parent of the clicked item
      const matListItem = target.closest('mat-list');
      if (!matListItem) return;
    
      const img = matListItem.querySelector('img') as HTMLImageElement;
      const text = matListItem.querySelector('span')?.textContent?.trim();
    
      console.log('Clicked item:');
      console.log('Image src:', img?.src);
      console.log('Alt text:', img?.alt);
      console.log('Text:', text);
    }

   }


 


