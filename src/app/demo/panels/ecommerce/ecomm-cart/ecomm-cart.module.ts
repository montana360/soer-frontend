import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommCartRoutingModule } from './ecomm-cart-routing.module';
import { EcommCartComponent } from './ecomm-cart.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EcommCartComponent],
  imports: [
    CommonModule,
    EcommCartRoutingModule,
    SharedModule
  ]
})
export class EcommCartModule { }
