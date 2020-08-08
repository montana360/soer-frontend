import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommOrderRoutingModule } from './ecomm-order-routing.module';
import { EcommOrderComponent } from './ecomm-order.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EcommOrderComponent],
  imports: [
    CommonModule,
    EcommOrderRoutingModule,
    SharedModule
  ]
})
export class EcommOrderModule { }
