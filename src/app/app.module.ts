import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './modules/shared/components/nav-bar/nav-bar.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { HotelsComponent } from './modules/hotel/components/hotels/hotels.component';
import { HotelDetailsComponent } from './modules/hotel/components/hotel-details/hotel-details.component';
import { FacilitiesComponent } from './modules/hotel/components/facilities/facilities.component';
import { BookingComponent } from './modules/hotel/components/booking/booking.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/shared/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    HotelsComponent,
    HotelDetailsComponent,
    FacilitiesComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
