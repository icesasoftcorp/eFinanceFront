import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IncomeCategory } from 'src/app/models/income-category';
import { IncomesCategoriesService } from 'src/app/services/incomes-categories.service';
import { IncomesService } from 'src/app/services/incomes.service';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss'],
})
export class IncomeFormComponent implements OnInit {
  incomeCategories: IncomeCategory[] = [];
  totalIncomeCategories = 0;
  private incomeCategoriesSubscription: Subscription;

  constructor(
    private incomeCategoriesService: IncomesCategoriesService,
    private incomeService: IncomesService) { }

  ngOnInit() {

    this.incomeCategoriesService.getIncomeCategories();
      this.incomeCategoriesSubscription = this.incomeCategoriesService.getIncomeCategoriesUpdatedListener()
        .subscribe(
          (incomeCategoriesData: {incomeCategories: IncomeCategory[]; incomeCategoriesCount: number}) => {
            this.incomeCategories = incomeCategoriesData.incomeCategories;
            console.log(this.incomeCategories, 'incomes');
            this.totalIncomeCategories = incomeCategoriesData.incomeCategoriesCount;
          }
        );
  }

  onSaveIncome(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }
    this.incomeService.addIncome(
      ngForm.value.title,
      ngForm.value.amount,
      ngForm.value.category,
    );
  }
}
