import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { MovementItemComponent } from 'src/app/components/movement-item/movement-item.component';
import { FullScreenSpinnerComponent } from 'src/app/full-screen-spinner/full-screen-spinner.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    MovementItemComponent,
    FullScreenSpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    MovementItemComponent,
    FullScreenSpinnerComponent,
  ]
})
export class SharedModule { }
