import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesShopRoutingModule } from './sales-shop-routing.module';
import { SalesShopComponent } from './sales-shop.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SalesShopComponent],
  imports: [
    CommonModule,
    SalesShopRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SalesShopModule { }
