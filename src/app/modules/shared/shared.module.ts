import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { MovementItemComponent } from 'src/app/components/movement-item/movement-item.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    MovementItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    MovementItemComponent
  ]
})
export class SharedModule { }
