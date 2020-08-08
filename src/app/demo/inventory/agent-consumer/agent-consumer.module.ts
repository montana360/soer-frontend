import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentConsumerRoutingModule } from './agent-consumer-routing.module';
import { AgentConsumerComponent } from './agent-consumer.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [AgentConsumerComponent],
  imports: [
    CommonModule,
    AgentConsumerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class AgentConsumerModule { }
