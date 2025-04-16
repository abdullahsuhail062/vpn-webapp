import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-country-list',
  imports: [RouterLink,MatListModule,MatCheckboxModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {

  ngOnInit(): void {
    
     this.update(true)   
    
  }


  update(event: boolean){
    event =true    
    }
  

   }


 


