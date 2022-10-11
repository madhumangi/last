import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { combineLatest, filter, map, switchMap } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  id!: number;
  hotel!: Hotel;
  price: number = 0;
  constructor(
    private _hotelService: HotelService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // combineLatest
    // this._activatedRoute.paramMap
    // .pipe(
    //   map((hotelId:any) =>hotelId.get("id")),
    //   filter((id:string)=>{
    //     if(id){
    //       parseInt(id);
    //       return true;
    //     }
    //     return false;
    //   }));
      // .subscribe((data: Hotel)=>this.hotel = data);
    
    this._activatedRoute.paramMap.subscribe((map) => {
      let i = map.get('id');
      if (i) this.id = parseInt(i);
    });
    this._hotelService.getHotelById(this.id).subscribe({
      next: (data) => {
        this.hotel = data;
      },
      error: (error) => console.log(error),
      complete: () => console.log(`completed`),
    });
    this._hotelService.getPrice(this.id).subscribe({
      next: (data) => (this.price = data),
      error: (error) => console.log(error),
      complete: () => console.log(`completed`),
    });

    console.log(this.price);
  }
  bookingForm=(id:number)=>{
    this._hotelService.bookingWithHotelId(id);
    this._router.navigate(["/booking"]);
  }
}
