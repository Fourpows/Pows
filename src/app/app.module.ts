import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { SharedModule } from './shared/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { CardsComponent } from './views/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // CardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
