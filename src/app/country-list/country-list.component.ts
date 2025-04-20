import {  Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-country-list',
  imports: [RouterLink,MatListModule,MatCheckboxModule,FormsModule ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {

  isChecked:boolean = false
  constructor(private router: Router,private sharedService: SharedService){}
  


  ngOnInit(): void {
    this.isChecked = true
     this.update(this.isChecked)   
    
  }


  update(event: boolean){
    event = true
       
    }


    onUsaItemClick(): void {
     const data = {image:'images/unitedstate.png', text: 'United State'};
     this.sharedService.setSelectedData(data);
     this.router.navigate(['/']);
        
    
     
    }

    onUkItemClick(): void {
      const data ={image:'images/unitedkingdom.png', text: 'United Kingdom'}
      this.sharedService.setSelectedData(data);
      this.router.navigate(['/']);


     
    }
    onGmItemClick(): void {
      const data ={image:'images/germany.jpeg', text: 'Germany'}
      this.sharedService.setSelectedData(data)
      this.router.navigate(['/'])


     
    }
    onInItemClick(): void {
    const data ={image:'images/india.jpeg', text: 'India'}
    this.sharedService.setSelectedData(data)
      this.router.navigate(['/'])


     
    }
    onAusItemClick(): void {
      const data ={image:'images/autralia.jpeg', text: 'Australia'}
      this.sharedService.setSelectedData(data)
      this.router.navigate(['/'])


    }
   

   }


 


