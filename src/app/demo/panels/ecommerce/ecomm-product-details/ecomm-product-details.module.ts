import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommProductDetailsRoutingModule } from './ecomm-product-details-routing.module';
import { EcommProductDetailsComponent } from './ecomm-product-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [EcommProductDetailsComponent],
  imports: [
    CommonModule,
    EcommProductDetailsRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class EcommProductDetailsModule { }
