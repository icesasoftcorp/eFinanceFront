import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Incomes } from '../models/incomes';
import { IncomesService } from '../services/incomes.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  incomes: Incomes[] = [];
  postPerPage = 9;
  currentPage = 1;
  totalIncomes = 0;
  private incomesSubcription: Subscription;

  constructor(public incomesService: IncomesService, private loginService: LoginService) {}

  /**
   * On inint
   */
  ngOnInit(): void {
    console.log("authtoken ", this.loginService.getToken());

    this.incomesService.getIncomes(this.postPerPage, this.currentPage);
    this.incomesSubcription = this.incomesService.getPostUpdatedListener()
      .subscribe(
        (incomesData: {incomes: Incomes[]; incomesCount: number}) => {
          this.incomes = incomesData.incomes;
          this.totalIncomes = incomesData.incomesCount;
          console.log(incomesData);
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
