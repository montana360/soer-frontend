import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralSalesReportRoutingModule } from './general-sales-report-routing.module';
import { GeneralSalesReportComponent } from './general-sales-report.component';


@NgModule({
  declarations: [GeneralSalesReportComponent],
  imports: [
    CommonModule,
    GeneralSalesReportRoutingModule
  ]
})
export class GeneralSalesReportModule { }
