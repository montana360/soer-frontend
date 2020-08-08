import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmCustomerTransactionRoutingModule } from './crm-customer-transaction-routing.module';
import { CrmCustomerTransactionComponent } from './crm-customer-transaction.component';
import { SharedModule } from "../../../theme/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [CrmCustomerTransactionComponent],
  imports: [
    CommonModule,
    CrmCustomerTransactionRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CrmCustomerTransactionModule {}
