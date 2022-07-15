import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAmenitiesListComponent } from './hotel-amenities-list.component';

describe('HotelAmenitiesListComponent', () => {
  let component: HotelAmenitiesListComponent;
  let fixture: ComponentFixture<HotelAmenitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAmenitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAmenitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
