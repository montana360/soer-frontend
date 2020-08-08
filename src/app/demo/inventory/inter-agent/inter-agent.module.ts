import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterAgentRoutingModule } from './inter-agent-routing.module';
import { InterAgentComponent } from './inter-agent.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [InterAgentComponent],
  imports: [
    CommonModule,
    InterAgentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class InterAgentModule { }
