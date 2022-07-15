import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHotelAmenitiesComponent } from './edit-hotel-amenities.component';

describe('EditHotelAmenitiesComponent', () => {
  let component: EditHotelAmenitiesComponent;
  let fixture: ComponentFixture<EditHotelAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHotelAmenitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHotelAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
