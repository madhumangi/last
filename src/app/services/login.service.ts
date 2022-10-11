import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _userUrl = 'http://localhost:8080';
  isLoggedIn!: boolean;
  constructor(private _httpClient: HttpClient) {
    this.isLoggedIn = false;
  }
  // isUserLoggedIn = () => {
  //   return this.isLoggedIn;
  // };
  // loginUser = (username: string, password: string): Observable<boolean> => {
  //   if (username === 'madhu' && password === 'madhu99') {
  //     this.isLoggedIn = true;
  //     return of(this.isLoggedIn);
  //   } else {
  //     return of(false);
  //   }
  // };
  // ...
  // loginUser = (user: User): Observable<boolean> => {
  //   let url = `${this._userUrl}`.concat('/authenticate');
  //   this._httpClient.post(url, user, { responseType: 'text' })      
  //   .subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       localStorage.setItem('token', data);
  //       // return true;
  //     },
  //   });
  //   return of(true);
  // };
  isUserLoggedIn(){
    let token= sessionStorage.getItem('token');
    if(token===null || token==='' || token===undefined){
        this.isLoggedIn=false;
        return false;
      }
      else{this.isLoggedIn=true;
      return true;}
  }
  loginUser(token:string){
    sessionStorage.setItem('token', token);
    return true;
  }
  getToken(){
    return sessionStorage.getItem('token');
  }
  generateToken(user:User){
    return this._httpClient.post(`${this._userUrl}/authenticate`,user, { responseType: 'text' });
  }
}
