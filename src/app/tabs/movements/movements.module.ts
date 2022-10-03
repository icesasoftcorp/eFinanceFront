import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovementsPageRoutingModule } from './movements-routing.module';

import { MovementsPage } from './movements.page';
import { TranslateModule } from '@ngx-translate/core';
import { SingleLineChartComponent } from 'src/app/components/charts/single-line-chart/single-line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MovementsPageRoutingModule
  ],
  declarations: [
    MovementsPage,
    SingleLineChartComponent
  ]
})
export class MovementsPageModule {}
