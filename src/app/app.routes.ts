import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'country-list', component: CountryListComponent }
  ];
