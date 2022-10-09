import { TestBed } from '@angular/core/testing';

import { EstimationCategoriesService } from './estimation-categories.service';

describe('EstimationCategoriesService', () => {
  let service: EstimationCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimationCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
