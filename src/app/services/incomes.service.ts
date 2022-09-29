/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Incomes } from '../models/incomes';
import { HttpClient } from '@angular/common/http';


const BACKEND_URL = 'http://localhost:3000/api/incomes';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {
  private incomes: Incomes[] = [];
  private incomessUpdated = new Subject<{incomes: Incomes[] ; incomesCount: number}>();

  constructor(private httpClient: HttpClient, ) { }

  /**
   * Gets incomes
   *
   * @param postPerPage posts per page
   * @param currentPage page number
   */
  getIncomes(postPerPage: number, currentPage: number) {
    const queryParams = `?pageSize=${postPerPage}&page=${currentPage}`;
    this.httpClient.get<{incomes: any; maxIncomes: number}>(BACKEND_URL + queryParams)
    .pipe(
      map(incomesData => ({
          incomes: incomesData.incomes.map(income => ({
              id: income._id,
              title: income.title,
              description: income.description,
              amount: income.amount,
              date: income.imadategePath,
            })),
          maxIncomes: incomesData.maxIncomes
        }))
    )
      .subscribe((transformedIncomesData) => {
        this.incomes = transformedIncomesData.incomes;
        this.incomessUpdated.next({
          incomes: [...this.incomes],
          incomesCount: transformedIncomesData.maxIncomes
        });
      });
  }

  /**
   * Gets observable for fetching incomes
   *
   * @returns observable
   */
  getPostUpdatedListener() {
    return this.incomessUpdated.asObservable();
  }
}
