import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [{path: '', component: AppComponent, children:[{
    path: 'country-list', title: 'country list', component: CountryListComponent}]}
];
