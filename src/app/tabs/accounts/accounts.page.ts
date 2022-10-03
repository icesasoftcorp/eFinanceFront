import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit, OnDestroy {
  accounts: Account[] = [];
  totalAccounts = 0;
  postPerPage = 20;
  currentPage = 1;

  private accountSubscription: Subscription;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts(this.postPerPage, this.currentPage);
    this.accountSubscription = this.accountsService.getAccountsUpdatedListener().subscribe(
      (accountsData: {accounts: Account[]; maxAccounts: number}) => {
        this.accounts = accountsData.accounts;
        this.totalAccounts = accountsData.maxAccounts;
      }
    );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.accountSubscription.unsubscribe();
  }
}
