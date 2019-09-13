import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SwipeCardLibModule} from 'ng-swipe-card';
import { SwingModule } from 'angular2-swing';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from '../../cards/cards.component';
@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwipeCardLibModule,
    SwingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
