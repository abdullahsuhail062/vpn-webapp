import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';

export const routes: Routes = [{children:[{path: 'country-list',  component: CountryListComponent}]}
];
