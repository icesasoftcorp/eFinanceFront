import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountCategory } from 'src/app/models/account-category';
import { AccountsService } from 'src/app/services/accounts.service';
import { AcountCategoriesService } from 'src/app/services/acount-categories.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  accountCategories: AccountCategory[] = [];
  totalAccounts = 0;
  postPerPage = 100;
  currentPage = 1;

  private accountCategorySubscription: Subscription;

  constructor(private accountCategoryService: AcountCategoriesService, private accountService: AccountsService) {}

  /**
   * Gets account category when component initializes
   */
  ngOnInit() {
    this.accountCategoryService.getAccountCategories(this.postPerPage, this.currentPage);
    this.accountCategorySubscription = this.accountCategoryService.getAccountCategoriesUpdatedListener().subscribe(
      (accountCategoriesData: {accountCategories: AccountCategory[]; maxAccountCategories: number}) => {
        this.accountCategories = accountCategoriesData.accountCategories;
        this.totalAccounts = accountCategoriesData.maxAccountCategories;
      }
    );
  }

  onSaveAccount(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }
    this.accountService.addAccount(
      ngForm.value.name,
      ngForm.value.color,
      ngForm.value.amount,
      ngForm.value.category,
    );
  }
}
