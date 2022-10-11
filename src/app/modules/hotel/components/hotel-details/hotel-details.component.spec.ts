import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { execPath } from 'process';

import { HotelDetailsComponent } from './hotel-details.component';

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one hotel details',()=>{
    expect(component.hotel!=null);
  });
  // it('should render one hotel details', () => {
  //   fixture.detectChanges();
  //   const e1=fixture.
  // });
});
