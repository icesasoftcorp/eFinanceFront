/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AccountCategory } from '../models/account-category';

const BACKEND_URL =  environment.apiUrl + '/accountCategories';

@Injectable({
  providedIn: 'root'
})
export class AcountCategoriesService {
  private accountCategories: AccountCategory[] = [];
  private accountCategoriesUpdated= new Subject<{accountCategories: AccountCategory[]; maxAccountCategories: number}>();

  /**
   * Constructor
   *
   * @param httpClient Http client
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Retrives account categories list
   *
   * @param itemsPerPage items per page
   * @param currentPage current page
   */
  getAccountCategories(itemsPerPage: number, currentPage: number) {
    const queryParams = `?pageSize=${itemsPerPage}&page=${currentPage}`;
    this.httpClient.get<{accountCategories: AccountCategory[]; maxAccountCategories: number}>(BACKEND_URL + queryParams)
    .pipe(
      map(accountCategoriesData => ({
        accountCategories: accountCategoriesData.accountCategories.map(accountCategoryData => ({
          _id: accountCategoryData._id,
          title: accountCategoryData.title,
          color: accountCategoryData.color,
          icon: accountCategoryData.icon,
        })),
        maxAccountCategories: accountCategoriesData.maxAccountCategories
      }))
    ).subscribe((transformedAccountCategoriesData) => {
      this.accountCategories = transformedAccountCategoriesData.accountCategories;
      this.accountCategoriesUpdated.next({
        accountCategories: [...this.accountCategories],
        maxAccountCategories: transformedAccountCategoriesData.maxAccountCategories,
      });
    });
  }

  /**
   * Returns account categories list as observable
   *
   * @returns Observabñe
   */
  getAccountCategoriesUpdatedListener() {
    return this.accountCategoriesUpdated.asObservable();
  }
}
