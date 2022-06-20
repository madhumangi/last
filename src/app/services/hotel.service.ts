import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private _baseUrl='http://localhost:8080/hotel-api/admin/hotels'
  constructor(private _httpClient:HttpClient) { }
  getDistinctCities=():Observable<string[]>=>{
    return this._httpClient.get<string[]>(this._baseUrl.concat("/city"));
  }
  
}
