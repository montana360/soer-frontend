import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmPolicyRoutingModule } from './crm-policy-routing.module';
import { CrmPolicyComponent } from './crm-policy.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CrmPolicyComponent],
  imports: [
    CommonModule,
    CrmPolicyRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class CrmPolicyModule { }
