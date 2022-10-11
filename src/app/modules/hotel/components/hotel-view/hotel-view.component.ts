import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.css']
})
export class HotelViewComponent implements OnInit {
  hotels:Hotel[]=[]
  constructor(private _activatedRoute:ActivatedRoute,private _hotelService:HotelService) { }
  filter:string=''
  filterName:string=''
  ngOnInit(): void {
    // this._activatedRoute.paramMap
    // .pipe(
    //   map((f:ParamMap,fname:ParamMap)=>{
    //     f.get("filter");
    //     fname.get("filterName");
    //   }),
    //   filter((f,fname)=>{
    //     if(f && fname){
    //       return true;
    //     }
    //     return false;
    //   }),
    //   switchMap((filter,filterName)=>this._hotelService.getByFilter(filter,filterName))
    // )
    // .subscribe((data:Hotel[])=>this.hotels = data);

    this._activatedRoute.paramMap.subscribe(map=>{
      let f=map.get('filter');
      if (f) this.filter = f;
      let fname=map.get('filterName');
      if(fname) this.filterName = fname;
      this._hotelService.getByFilter(this.filter,this.filterName).subscribe({
        next: (data) => this.hotels=data,
        error:()=>console.log(`error`),
        complete:()=>console.log(`completed`)
      })
    })
  }

}
