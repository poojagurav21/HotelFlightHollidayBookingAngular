import { TestBed } from '@angular/core/testing';

import { CountrySeviceService } from './country-sevice.service';

describe('CountrySeviceService', () => {
  let service: CountrySeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
