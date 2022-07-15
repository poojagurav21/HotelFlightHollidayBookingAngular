import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelAmenitiesComponent } from './add-hotel-amenities.component';

describe('AddHotelAmenitiesComponent', () => {
  let component: AddHotelAmenitiesComponent;
  let fixture: ComponentFixture<AddHotelAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHotelAmenitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
