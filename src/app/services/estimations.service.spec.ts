import { TestBed } from '@angular/core/testing';

import { EstimationsService } from './estimations.service';

describe('EstimationsService', () => {
  let service: EstimationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
