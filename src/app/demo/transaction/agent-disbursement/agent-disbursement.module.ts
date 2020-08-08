import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDisbursementRoutingModule } from './agent-disbursement-routing.module';
import { AgentDisbursementComponent } from './agent-disbursement.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [AgentDisbursementComponent],
  imports: [
    CommonModule,
    AgentDisbursementRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class AgentDisbursementModule { }
