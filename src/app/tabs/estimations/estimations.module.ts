import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimationsPageRoutingModule } from './estimations-routing.module';

import { EstimationsPage } from './estimations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimationsPageRoutingModule
  ],
  declarations: [EstimationsPage]
})
export class EstimationsPageModule {}
