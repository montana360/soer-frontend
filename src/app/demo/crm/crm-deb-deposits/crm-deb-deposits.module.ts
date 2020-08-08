import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmDebDepositsRoutingModule } from './crm-deb-deposits-routing.module';
import { CrmDebDepositsComponent } from './crm-deb-deposits.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CrmDebDepositsComponent],
  imports: [
    CommonModule,
    CrmDebDepositsRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CrmDebDepositsModule { }
