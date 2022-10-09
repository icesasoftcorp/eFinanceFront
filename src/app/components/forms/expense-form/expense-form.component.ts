import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExpenseCategory } from 'src/app/models/expense-category';
import { ExpensesCategoriesService } from 'src/app/services/expenses-categories.service';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
  expenseCategories: ExpenseCategory[] = [];
  totalExpenseCategories = 0;
  private expenseCategoriesSubscription: Subscription;

  constructor(
    private expenseCategoriesService: ExpensesCategoriesService,
    private expensesService: ExpensesService
    ) { }

  ngOnInit() {
    this.expenseCategoriesService.getExpenseCategories();
    this.expenseCategoriesSubscription = this.expenseCategoriesService.getExpenseCategoriesUpdatedListener()
        .subscribe(
          (expenseCategoriesData: {expenseCategories: ExpenseCategory[]; expenseCategoriesCount: number}) => {
            this.expenseCategories = expenseCategoriesData.expenseCategories;
            console.log(this.expenseCategories, 'expenses');
            this.totalExpenseCategories = expenseCategoriesData.expenseCategoriesCount;
          }
        );
  }

  onSaveExpense(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }
    this.expensesService.addExpense(
      ngForm.value.title,
      ngForm.value.amount,
      ngForm.value.category,
    );
  }
}
