import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  hotelId: number = 0;

  private _baseUrl = 'http://localhost:8080/hotel-api/admin/hotels';
  constructor(private _httpClient: HttpClient) {}
  getDistinctCities = (): Observable<string[]> => {
    return this._httpClient.get<string[]>(this._baseUrl.concat('/city'));
  };
  getHotels = (city: string | null): Observable<Hotel[]> => {
    let url = `${this._baseUrl}/city/${city}`;
    return this._httpClient.get<Hotel[]>(url);
  };
  getHotelById = (id: number): Observable<Hotel> => {
    let url = `${this._baseUrl}/id/${id}`;
    return this._httpClient.get<Hotel>(url);
  };
  getDistinctFilters = (filter: string): Observable<String[]> => {
    let url = `${this._baseUrl}/filters/${filter}`;
    return this._httpClient.get<String[]>(url);
  };
  getByFilter = (filter: string, filterName: string): Observable<Hotel[]> => {
    let url = `${this._baseUrl}/filters/${filter}/filterName/${filterName}`;
    return this._httpClient.get<Hotel[]>(url);
  };
  getPrice = (id: number): Observable<number> => {
    let url = `${this._baseUrl}/price/${id}`;
    return this._httpClient.get<number>(url);
  };

  booking = (book: Booking): Observable<Booking> => {
    let url = `http://localhost:8080/booking-api/bookings`;
    let token = sessionStorage.getItem('token');
    //header value is [bearer token]
    console.log(`${token}`);
    let authHeaderValue = 'Bearer ' + token;
    // set the header with the name as 'Authorization'
    console.log(` Auth: ${authHeaderValue}`);
    let authHeader = new HttpHeaders().set('Authorization', authHeaderValue);
    return this._httpClient.post<Booking>(url, book, { headers: authHeader });
  };

  bookingWithHotelId = (id: number) => {
    this.hotelId = id;
  };
  getHotelIdForBooking = (): number => {
    return this.hotelId;
  };
}
