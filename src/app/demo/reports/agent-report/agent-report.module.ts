import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentReportRoutingModule } from './agent-report-routing.module';
import { AgentReportComponent } from './agent-report.component';


@NgModule({
  declarations: [AgentReportComponent],
  imports: [
    CommonModule,
    AgentReportRoutingModule
  ]
})
export class AgentReportModule { }
