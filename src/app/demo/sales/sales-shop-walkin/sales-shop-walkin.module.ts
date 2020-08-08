import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesShopWalkinRoutingModule } from './sales-shop-walkin-routing.module';
import { SalesShopWalkinComponent } from './sales-shop-walkin.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SalesShopWalkinComponent],
  imports: [
    CommonModule,
    SalesShopWalkinRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SalesShopWalkinModule { }
