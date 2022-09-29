import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'movements',
        loadChildren: () => import('./movements/movements.module').then(m => m.MovementsPageModule)
      },
      {
        path: 'accounts',
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsPageModule)
      },
      {
        path: 'estimations',
        loadChildren: () => import('./estimations/estimations.module').then(m => m.EstimationsPageModule)
      },
      {
        path: '',
        redirectTo: 'app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'movements',
    loadChildren: () => import('./movements/movements.module').then( m => m.MovementsPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then( m => m.AccountsPageModule)
  },
  {
    path: 'estimations',
    loadChildren: () => import('./estimations/estimations.module').then( m => m.EstimationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
