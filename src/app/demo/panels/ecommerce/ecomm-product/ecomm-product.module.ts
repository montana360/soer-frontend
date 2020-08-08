import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommProductRoutingModule } from './ecomm-product-routing.module';
import { EcommProductComponent } from './ecomm-product.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [EcommProductComponent],
  imports: [
    CommonModule,
    EcommProductRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class EcommProductModule { }
