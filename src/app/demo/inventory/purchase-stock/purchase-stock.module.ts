import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseStockRoutingModule } from './purchase-stock-routing.module';
import { PurchaseStockComponent } from './purchase-stock.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [PurchaseStockComponent],
  imports: [
    CommonModule,
    PurchaseStockRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class PurchaseStockModule { }
