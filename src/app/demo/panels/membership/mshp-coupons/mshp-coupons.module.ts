import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshpCouponsRoutingModule } from './mshp-coupons-routing.module';
import { MshpCouponsComponent } from './mshp-coupons.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [MshpCouponsComponent],
  imports: [
    CommonModule,
    MshpCouponsRoutingModule,
    SharedModule
  ]
})
export class MshpCouponsModule { }
