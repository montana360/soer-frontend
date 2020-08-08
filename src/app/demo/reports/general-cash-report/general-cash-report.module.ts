import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralCashReportRoutingModule } from './general-cash-report-routing.module';
import { GeneralCashReportComponent } from './general-cash-report.component';


@NgModule({
  declarations: [GeneralCashReportComponent],
  imports: [
    CommonModule,
    GeneralCashReportRoutingModule
  ]
})
export class GeneralCashReportModule { }
