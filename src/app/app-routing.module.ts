import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './modules/hotel/components/booking/booking.component';
import { FacilitiesComponent } from './modules/hotel/components/facilities/facilities.component';
import { HotelDetailsComponent } from './modules/hotel/components/hotel-details/hotel-details.component';
import { HotelViewComponent } from './modules/hotel/components/hotel-view/hotel-view.component';
import { HotelsComponent } from './modules/hotel/components/hotels/hotels.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'hotels', component: HotelsComponent },
  //   children:[

  //         children:[
  //           {path:'facilities',component:FacilitiesComponent}
  //         ]
  //       },
  //       {path:'booking',component:BookingComponent}
  //   ]},
  {
    path: 'hotels/:city',
    component: HotelsComponent,
    // children:[
    //   {path:':'}
    // ]
  },
  { path: 'hotel-view/:filter/:filterName', component: HotelViewComponent },

  { path: 'hotel-details/:id', component: HotelDetailsComponent },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [AuthService],
  },
  { path: 'booking',component:BookingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
