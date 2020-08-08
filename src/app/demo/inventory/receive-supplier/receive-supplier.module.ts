import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveSupplierRoutingModule } from './receive-supplier-routing.module';
import { ReceiveSupplierComponent } from './receive-supplier.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ReceiveSupplierComponent],
  imports: [
    CommonModule,
    ReceiveSupplierRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class ReceiveSupplierModule { }
