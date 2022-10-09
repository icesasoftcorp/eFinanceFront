import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimationsPageRoutingModule } from './estimations-routing.module';

import { EstimationsPage } from './estimations.page';
import { EstimationFormComponent } from 'src/app/components/forms/estimation-form/estimation-form.component';
import { CategorySelectorComponent } from 'src/app/components/category-selector/category-selector.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EstimationsPageRoutingModule
  ],
  declarations: [
    EstimationsPage,
    CategorySelectorComponent,
    EstimationFormComponent
  ]
})
export class EstimationsPageModule {}
