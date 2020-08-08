import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveCustomersReportRoutingModule } from './active-customers-report-routing.module';
import { ActiveCustomersReportComponent } from './active-customers-report.component';


@NgModule({
  declarations: [ActiveCustomersReportComponent],
  imports: [
    CommonModule,
    ActiveCustomersReportRoutingModule
  ]
})
export class ActiveCustomersReportModule { }
