import { TestBed } from '@angular/core/testing';

import { RentDetailServiceService } from './rent-detail-service.service';

describe('RentDetailServiceService', () => {
  let service: RentDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
