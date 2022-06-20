import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private _baseUrl='http://localhost:8080/hotel-api/admin/hotels'
  constructor(private _httpClient:HttpClient) { }
  getDistinctCities=():Observable<string[]>=>{
    return this._httpClient.get<string[]>(this._baseUrl.concat("/city"));
  }
  getHotels=(city:string):Observable<Hotel[]>=>{
    let url=`${this._baseUrl}/city/${city}`;
    return this._httpClient.get<Hotel[]>(url);
  }
  getHotelById=(id:number):Observable<Hotel>=>{
    let url=`${this._baseUrl}/id/${id}`;
    return this._httpClient.get<Hotel>(url);
  }
}
