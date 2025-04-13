import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';


export const routes: Routes = [
    { path: '', redirectTo: 'country-list', pathMatch: 'full' },
    { path: 'country-list', component: CountryListComponent }
  ];
