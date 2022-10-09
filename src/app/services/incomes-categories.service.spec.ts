import { TestBed } from '@angular/core/testing';

import { IncomesCategoriesService } from './incomes-categories.service';

describe('IncomesCategoriesService', () => {
  let service: IncomesCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomesCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
