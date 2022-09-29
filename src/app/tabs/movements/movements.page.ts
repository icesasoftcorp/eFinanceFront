import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Incomes } from 'src/app/models/incomes';
import { IncomesService } from 'src/app/services/incomes.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.page.html',
  styleUrls: ['./movements.page.scss'],
})
export class MovementsPage implements OnInit, OnDestroy {
  incomes: Incomes[] = [];
  postPerPage = 9;
  currentPage = 1;
  totalIncomes = 0;
  private incomesSubcription: Subscription;

  constructor(public incomesService: IncomesService, private loginService: LoginService) { }
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
