import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { BarHomeComponent } from 'src/app/components/charts/bar-home/bar-home.component';
import { NgxEchartsModule } from 'ngx-echarts';
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
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    BarHomeComponent
  ]
})
export class HomePageModule {}
