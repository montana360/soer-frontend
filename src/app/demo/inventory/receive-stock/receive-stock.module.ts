import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveStockRoutingModule } from './receive-stock-routing.module';
import { ReceiveStockComponent } from './receive-stock.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ReceiveStockComponent],
  imports: [
    CommonModule,
    ReceiveStockRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class ReceiveStockModule { }
