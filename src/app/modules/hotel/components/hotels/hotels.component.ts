import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
city:string=''
hotels:Hotel[]=[]
search:string=''
  constructor(private _activatedRoute:ActivatedRoute, private _hotelService:HotelService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap
    .pipe(
      map((c)=>c.get("city")),
      filter(
        (city)=>{   //(!!city)
            if(city){
              return true;
            }
        return false;
    }),
    switchMap((city)=>this._hotelService.getHotels(city)))
    .subscribe((data)=>this.hotels=data);
    // .subscribe(
    //   map=>{
    //   let c=map.get("city");
    //   if(c)this.city=c;
    //   this._hotelService.getHotels(this.city).subscribe({
    //       next:(data)=> this.hotels=data,
    //       error:()=>console.log(`error`),
    //       complete:()=>console.log(`completed`)
    //   })
    // })
  }
}

