import { TestBed } from '@angular/core/testing';

import { AcountCategoriesService } from './acount-categories.service';

describe('AcountCategoriesService', () => {
  let service: AcountCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
