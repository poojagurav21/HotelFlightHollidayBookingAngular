import { TestBed } from '@angular/core/testing';

import { AmenitiesServiceService } from './amenities-service.service';

describe('AmenitiesServiceService', () => {
  let service: AmenitiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenitiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
