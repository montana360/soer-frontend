import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IstaAgentRoutingModule } from './ista-agent-routing.module';
import { IstaAgentComponent } from './ista-agent.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [IstaAgentComponent],
  imports: [
    CommonModule,
    IstaAgentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class IstaAgentModule { }
