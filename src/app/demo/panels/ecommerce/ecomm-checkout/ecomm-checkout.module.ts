import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommCheckoutRoutingModule } from './ecomm-checkout-routing.module';
import { EcommCheckoutComponent } from './ecomm-checkout.component';
import {ArchwizardModule} from 'ng2-archwizard/dist';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EcommCheckoutComponent],
  imports: [
    CommonModule,
    EcommCheckoutRoutingModule,
    SharedModule,
    ArchwizardModule
  ]
})
export class EcommCheckoutModule { }
