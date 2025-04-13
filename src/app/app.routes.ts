import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';

export const routes: Routes = [{
    path: 'country-list', component: CountryListComponent}
];
