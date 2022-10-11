import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  retUrl: string = '';
  constructor(
    private _router: Router,
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute
  ) {}
  authFlag: boolean = false;

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let url = map.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit = (loginForm: FormGroup) => {
    
    if(loginForm.value.username != '' &&
      loginForm.value.password != '' &&
      loginForm.value.username != null &&
      loginForm.value.password != null 
    ) {
        this._loginService.generateToken(loginForm.value).subscribe({
          next:(response:string)=>{
            console.log(response);
            this._loginService.loginUser(response);
            sessionStorage.setItem('token', response);
            if(!response) this._router.navigate(['login']);
            else if(response && this.retUrl === ''){
              this._router.navigate(['home']);
            }
            else if(response && this.retUrl != '' ){
              this._router.navigate([this.retUrl],);
            }
          },
        });
      }
    }
    // .....
    // let user = loginForm.value;
    // console.log(user);
    // this._loginService.loginUser(user).subscribe({
    //   next: (data) => {
    //     // if (!data) {
    //     //   alert('Please enter a valid username');
    //     //   this.authFlag = false;
    //     // } else if (data) {
    //     console.log(data);
    //     // localStorage.setItem('token', data);
    //     // this.authFlag = true;
    //     console.log(this.retUrl);
    //     this._router.navigate([this.retUrl]);
    //     // }
    //   },
    //   error: (error) => console.log(error),
    // });
    // console.log(this.authFlag);
  
}
