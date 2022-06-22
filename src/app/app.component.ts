import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen=false;
  title = 'hotel-management-system';
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
