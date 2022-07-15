import { TestBed } from '@angular/core/testing';

import { HotelAmenitiesServiceService } from './hotel-amenities-service.service';

describe('HotelAmenitiesServiceService', () => {
  let service: HotelAmenitiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelAmenitiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
