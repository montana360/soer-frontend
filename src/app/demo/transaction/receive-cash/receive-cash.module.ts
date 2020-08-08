import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveCashRoutingModule } from './receive-cash-routing.module';
import { ReceiveCashComponent } from './receive-cash.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ReceiveCashComponent],
  imports: [
    CommonModule,
    ReceiveCashRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class ReceiveCashModule {}
