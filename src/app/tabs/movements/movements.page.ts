import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Expenses } from 'src/app/models/expenses';
import { Incomes } from 'src/app/models/incomes';
import { ExpensesService } from 'src/app/services/expenses.service';
import { IncomesService } from 'src/app/services/incomes.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.page.html',
  styleUrls: ['./movements.page.scss'],
})
export class MovementsPage implements OnInit, OnDestroy {
  incomes: Incomes[] = [];
  expenses: Expenses[] = [];
  postPerPage = 9;
  currentPage = 1;
  totalIncomes = 0;
  totalExpenses = 0;

  weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  savingsData = [200, 932, 901, 934, 1290, 1330, 4];
  debtsData = [200, 932, 123, 423, 123, 123, 40];

  private incomesSubcription: Subscription;
  private expensesSubcription: Subscription;

  constructor(
    public incomesService: IncomesService,
    public expensesService: ExpensesService
  ) { }

  /**
   * On inint
   */
  ngOnInit(): void {
    this.incomesService.getIncomes(this.postPerPage, this.currentPage);
    this.incomesSubcription = this.incomesService.getPostUpdatedListener()
      .subscribe(
        (incomesData: {incomes: Incomes[]; incomesCount: number}) => {
          this.incomes = incomesData.incomes;
          this.totalIncomes = incomesData.incomesCount;
        }
      );

    this.expensesService.getExpenses(this.postPerPage, this.currentPage);
    this.expensesSubcription = this.expensesService.getExpenseUpdatedListener()
      .subscribe(
        (expensesData: {expenses: Expenses[]; expensesCount: number}) => {
          this.expenses = expensesData.expenses;
          this.totalExpenses = expensesData.expensesCount;
        }
      );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.incomesSubcription.unsubscribe();
  }

}
