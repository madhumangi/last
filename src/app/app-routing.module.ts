import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './modules/hotel/components/booking/booking.component';
import { FacilitiesComponent } from './modules/hotel/components/facilities/facilities.component';
import { HotelDetailsComponent } from './modules/hotel/components/hotel-details/hotel-details.component';
import { HotelsComponent } from './modules/hotel/components/hotels/hotels.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  
  {path:'hotels',component:HotelsComponent,
    children:[
        {path:'hotel-details/:id',component:HotelDetailsComponent,
          children:[
            {path:'facilities',component:FacilitiesComponent}
          ]
        },
        {path:'booking',component:BookingComponent}
    ]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'**',component:PageNotFoundComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
