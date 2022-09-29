import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimationsPage } from './estimations.page';

const routes: Routes = [
  {
    path: '',
    component: EstimationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimationsPageRoutingModule {}
