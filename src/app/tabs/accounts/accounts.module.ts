import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsPageRoutingModule } from './accounts-routing.module';

import { AccountsPage } from './accounts.page';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccountFormComponent } from 'src/app/components/forms/account-form/account-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AccountsPageRoutingModule
  ],
  declarations: [
    AccountsPage,
    AccountFormComponent,
    ProductCardComponent
  ]
})
export class AccountsPageModule {}
