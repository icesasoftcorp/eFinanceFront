/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExpenseCategory } from '../models/expense-category';

const BACKEND_URL =  environment.apiUrl + '/expensecategories';

@Injectable({
  providedIn: 'root'
})
export class ExpensesCategoriesService {
  private expenseCategories: ExpenseCategory[];
  private expensesCategoriesUpdated = new Subject<{expenseCategories: ExpenseCategory[] ; expenseCategoriesCount: number}>();

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets expenses
   *
   * @param itemsPerPage Items per page
   * @param currentPage current page
   */
  getExpenseCategories() {
    this.httpClient.get<{expenseCategories: any; maxExpenseCategories: number}>(BACKEND_URL)
    .pipe(
      map(expenseCategoriesData => ({
          expenseCategories: expenseCategoriesData.expenseCategories
          .map(expenseCategory => ({
              id: expenseCategory._id,
              title: expenseCategory.title,
              icon: expenseCategory.icon,
              color: expenseCategory.color,
            })),
            maxExpenseCategories: expenseCategoriesData.maxExpenseCategories
        }))
    ).subscribe((transformedExpenseCategoriesData) => {
      this.expenseCategories = transformedExpenseCategoriesData.expenseCategories;
      this.expensesCategoriesUpdated.next({
        expenseCategories: [...this.expenseCategories],
        expenseCategoriesCount: transformedExpenseCategoriesData.maxExpenseCategories
      });
    });
  }

  /**
   * Gets observable for fetching expense categories
   *
   * @returns observable
   */
  getExpenseCategoriesUpdatedListener() {
    return this.expensesCategoriesUpdated.asObservable();
   }
}
