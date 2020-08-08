import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommCustomerRoutingModule } from './ecomm-customer-routing.module';
import { EcommCustomerComponent } from './ecomm-customer.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [EcommCustomerComponent],
  imports: [
    CommonModule,
    EcommCustomerRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class EcommCustomerModule { }
