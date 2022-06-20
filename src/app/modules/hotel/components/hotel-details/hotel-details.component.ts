import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
id!:number
hotel!:Hotel
  constructor(private _hotelService:HotelService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map=>{
      let i=map.get("id");
      if(i) this.id=parseInt(i);
      
    })
    this._hotelService.getHotelById(this.id).subscribe({
      next:(data)=>this.hotel=data,
      error:()=>console.log(`error`),
      complete:()=>console.log(`completed`)
    })
  }

}
