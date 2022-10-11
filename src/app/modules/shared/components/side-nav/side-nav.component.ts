import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  constructor(private _hotelService:HotelService) { }
  show = false;
  choices:string[] = ["Property Type","Star Ratings","Ratings","Facilities"]
  filterTypes:String[]=[]
  ngOnInit(): void {
  }
  // getPropertyTypes(){
  //   this._hotelService.getDistinctPropertyType().subscribe({
  //     next:(data)=>this.propertyTypes=data,
  //     error:()=>console.log(`error`),
  //     complete:()=>console.log(`completed`)
  //   })
  // }
  getFilterTypes(filter:string){
    console.log(filter);
      this._hotelService.getDistinctFilters(filter).subscribe({
        next:(data)=>this.filterTypes=data,
        error:()=>console.log(`error`),
        complete:()=>console.log(`completed`)
      })
      
    }

}
