import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovementsPageRoutingModule } from './movements-routing.module';

import { MovementsPage } from './movements.page';
import { TranslateModule } from '@ngx-translate/core';
import { SingleLineChartComponent } from 'src/app/components/charts/single-line-chart/single-line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { IncomeFormComponent } from 'src/app/components/forms/income-form/income-form.component';
import { ExpenseFormComponent } from 'src/app/components/forms/expense-form/expense-form.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MovementsPageRoutingModule
  ],
  declarations: [
    MovementsPage,
    SingleLineChartComponent,
    IncomeFormComponent,
    ExpenseFormComponent
  ]
})
export class MovementsPageModule {}
