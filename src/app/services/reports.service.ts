import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BACKEND_URL =  environment.apiUrl + '/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  totalIncomes = 0;
  totalExpenses = 0;
  totalEstimated = 0;

  private totalIncomesUpdated = new Subject<{totalIncomes: number}>();
  private totalExpensesUpdated = new Subject<{totalExpenses: number}>();
  private totalEstimatedUpdated = new Subject<{totalEstimated: number}>();

  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }

  getTotalIncomes() {
    this.http.get<{totalIncome: number}>(BACKEND_URL + '/totalincomes')
    .pipe(
      map(incomesResponse => ({totalIncome: incomesResponse.totalIncome[0].totalAmount})))
    .subscribe((transformedTotalAmount) => {
      this.totalIncomes = transformedTotalAmount.totalIncome;
      this.totalIncomesUpdated.next({
        totalIncomes: this.totalIncomes
      });
    });
  }

  /**
   * Gets observable for fetching incomes
   *
   * @returns observable
   */
   getTotalIncomesUpdatedListener() {
    return this.totalIncomesUpdated.asObservable();
  }

  getTotalExpenses() {
    this.http.get<{totalExpense: number}>(BACKEND_URL + '/totalexpenses')
    .pipe(
      map(expensesResponse => ({totalExpense: expensesResponse.totalExpense[0].totalAmount})))
    .subscribe((transformedTotalAmount) => {
      this.totalExpenses = transformedTotalAmount.totalExpense;
      this.totalExpensesUpdated.next({
          totalExpenses: this.totalExpenses
        });
      });
  }

  /**
   * Gets observable for fetching estimations
   *
   * @returns observable
   */
  getTotalExpensesUpdatedListener() {
    return this.totalExpensesUpdated.asObservable();

  }
  getTotalEstimated() {
    this.http.get<{totalEstimated: number}>(BACKEND_URL + '/totalestimated')
    .pipe(
      map(estimatedResponse => ({totalEstimated: estimatedResponse.totalEstimated[0].totalAmount})))
    .subscribe((transformedTotalAmount) => {
      this.totalEstimated = transformedTotalAmount.totalEstimated;
      this.totalEstimatedUpdated.next({
        totalEstimated: this.totalEstimated
        });
      });
  }

  /**
   * Gets observable for fetching estimations
   *
   * @returns observable
   */
  getTotalEstimatedUpdatedListener() {
    return this.totalEstimatedUpdated.asObservable();
  }
}
