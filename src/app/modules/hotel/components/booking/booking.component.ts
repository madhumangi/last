import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  totalPrice: number = 0;
  price:number = 0;
  hotelId:number=0;
  bookingForm=new FormGroup({
    persons: new FormControl(),
    checkIn: new FormControl(),
    checkOut: new FormControl()
    // hotelId:new FormControl()
  });
  
  constructor(private _activatedRoute: ActivatedRoute, private _hotelService: HotelService) { }

  ngOnInit(): void {

    this.hotelId=this._hotelService.getHotelIdForBooking();
    this._hotelService.getPrice(this.hotelId).subscribe({
      next:(data:number)=>this.price=data
    })
    // this._activatedRoute.paramMap.pipe(
    //   map((hotelId)=>hotelId.get("id")),
    //   filter((id)=>{
    //     if(id){
    //       parseInt(id);
    //       return true;
    //     }
    //     return false;
    //   })
    // );
    // this._activatedRoute.paramMap.subscribe(map=>{
    //   let id=map.get('id');
    //   if(id) this.hotelId=parseInt(id);
    // })
  }
  convertInt(value:any):number {
    let val=parseInt(value);
    return val;
  }
  bookRoom = (bookingForm: FormGroup) => {
    let book: Booking = bookingForm.value;
    this._hotelService.booking(book).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Completed")
    })
    bookingForm.reset();
  }
}
