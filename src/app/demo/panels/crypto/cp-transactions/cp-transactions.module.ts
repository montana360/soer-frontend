import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpTransactionsRoutingModule } from './cp-transactions-routing.module';
import { CpTransactionsComponent } from './cp-transactions.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [CpTransactionsComponent],
  imports: [
    CommonModule,
    CpTransactionsRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CpTransactionsModule { }
