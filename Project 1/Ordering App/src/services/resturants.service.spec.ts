import { TestBed } from '@angular/core/testing';

import { ResturantsService } from './resturants.service';

describe('ResturantsService', () => {
  let service: ResturantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
