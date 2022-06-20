import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities:string[]=[]
  constructor(private _hotelService:HotelService) { }

  ngOnInit(): void {
    this._hotelService.getDistinctCities().subscribe({
      next:(data)=>this.cities=data,
      complete:()=>console.log(`completed`),
      error:()=>console.log('error')
    })
  }

}
