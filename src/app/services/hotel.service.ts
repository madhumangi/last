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
  getDistinctPropertyType=():Observable<string[]>=>{
    return this._httpClient.get<string[]>(this._baseUrl.concat("/propertyType"));
  }

  // filters
  getByPropertyType=(type:string):Observable<Hotel[]>=>{
    let url=`${this._baseUrl}/propertyType/${type}`;
    return this._httpClient.get<Hotel[]>(url);
  }
  getByStarRatings=(ratings:string):Observable<Hotel[]>=>{
    let url=`${this._baseUrl}/starRatings/${ratings}`;
    return this._httpClient.get<Hotel[]>(url);
  }
  getByPrice=(price:number):Observable<Hotel[]>=>{
    let url=`${this._baseUrl}/price/${price}`;
    return this._httpClient.get<Hotel[]>(url);
  }
  getByFacility=(facility:string):Observable<Hotel[]>=>{
    let url=`${this._baseUrl}/facility/${facility}`;
    return this._httpClient.get<Hotel[]>(url);
  }

  getDistinctFilters=(filter:string):Observable<String[]>=>{
    let url=`${this._baseUrl}/filters/${filter}`;
    return this._httpClient.get<String[]>(url);
  }
  getByFilter=(filter:string,filterName:string):Observable<Hotel[]>=>{
    let url=`${this._baseUrl}//filter/${filter}/filterName/${filterName}`;
    return this._httpClient.get<Hotel[]>(url);
  }
}
