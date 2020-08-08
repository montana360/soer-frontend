import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommSellerRoutingModule } from './ecomm-seller-routing.module';
import { EcommSellerComponent } from './ecomm-seller.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [EcommSellerComponent],
  imports: [
    CommonModule,
    EcommSellerRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class EcommSellerModule { }
