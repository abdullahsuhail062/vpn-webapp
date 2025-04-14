import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-country-list',
  imports: [RouterLink,MatListModule,MatCheckboxModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent {

  countries = [
    { name: 'United States', code: 'US', flag: '🇺🇸' },
    { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
    { name: 'Germany', code: 'DE', flag: '🇩🇪' },
    { name: 'India', code: 'IN', flag: '🇮🇳' },
    { name: 'Australia', code: 'AU', flag: '🇦🇺' }
  ];
  

}
