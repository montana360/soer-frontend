import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InactiveCustomersReportRoutingModule } from './inactive-customers-report-routing.module';
import { InactiveCustomersReportComponent } from './inactive-customers-report.component';


@NgModule({
  declarations: [InactiveCustomersReportComponent],
  imports: [
    CommonModule,
    InactiveCustomersReportRoutingModule
  ]
})
export class InactiveCustomersReportModule { }
