/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IncomeCategory } from '../models/income-category';

const BACKEND_URL =  environment.apiUrl + '/incomecategories';

@Injectable({
  providedIn: 'root'
})
export class IncomesCategoriesService {
  private incomeCategories: IncomeCategory[];
  private incomeCategoriesUpdated = new Subject<{incomeCategories: IncomeCategory[] ; incomeCategoriesCount: number}>();

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets expenses
   *
   * @param itemsPerPage Items per page
   * @param currentPage current page
   */
  getIncomeCategories() {
    this.httpClient.get<{incomeCategories: any; maxIncomesCategories: number}>(BACKEND_URL)
    .pipe(
      map(incomeCategoriesData => ({
          incomeCategories: incomeCategoriesData.incomeCategories.map(incomeCategory => ({
              id: incomeCategory._id,
              title: incomeCategory.title,
              icon: incomeCategory.icon,
              color: incomeCategory.color,
            })),
            maxExpenseCategories: incomeCategoriesData.maxIncomesCategories
        }))
    ).subscribe((transformedExpenseCategoriesData) => {
      this.incomeCategories = transformedExpenseCategoriesData.incomeCategories;
      this.incomeCategoriesUpdated.next({
        incomeCategories: [...this.incomeCategories],
        incomeCategoriesCount: transformedExpenseCategoriesData.maxExpenseCategories
      });
    });
  }

  /**
   * Gets observable for fetching expense categories
   *
   * @returns observable
   */
  getIncomeCategoriesUpdatedListener() {
    return this.incomeCategoriesUpdated.asObservable();
   }
}
