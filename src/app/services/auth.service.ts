import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private _loginservice: LoginService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // return !!this._loginservice.isUserLoggedIn();

    if (this._loginservice.isUserLoggedIn()) {
      return true;
    } else {
      alert('Please login first....');
      this._router.navigate(['login'], {
        queryParams: { returnUrl: route.url },
      });
      return false;
    }
  }
}
