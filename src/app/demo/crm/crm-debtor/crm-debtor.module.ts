import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmDebtorRoutingModule } from './crm-debtor-routing.module';
import { CrmDebtorComponent } from './crm-debtor.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CrmDebtorComponent],
  imports: [
    CommonModule,
    CrmDebtorRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CrmDebtorModule {}
