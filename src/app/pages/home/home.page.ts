import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading: boolean;
  totalIncomes = 0;
  totalExpenses = 0;
  totalEstimated = 0;
  private totalIncomesSubcription: Subscription;
  private totalExpensesSubcription: Subscription;
  private totalEstimatedSubcription: Subscription;

  constructor(private reportService: ReportsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.reportService.getTotalIncomes();
    this.totalIncomesSubcription = this.reportService.getTotalIncomesUpdatedListener().subscribe(
      (totalIncomesData) => {
        this.totalIncomes = totalIncomesData.totalIncomes;
      });

    this.reportService.getTotalExpenses();
    this.totalExpensesSubcription = this.reportService.getTotalExpensesUpdatedListener().subscribe(
      (totalExpensesData) => {
        this.totalExpenses = totalExpensesData.totalExpenses;
      }
    );

    this.reportService.getTotalEstimated();
    this.totalEstimatedSubcription = this.reportService.getTotalEstimatedUpdatedListener().subscribe(
      (totalEstimatedData) => {
        this.totalEstimated = totalEstimatedData.totalEstimated;
        this.isLoading = false;
      }
    );
  }

}
