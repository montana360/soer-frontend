import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralStockReportRoutingModule } from './general-stock-report-routing.module';
import { GeneralStockReportComponent } from './general-stock-report.component';


@NgModule({
  declarations: [GeneralStockReportComponent],
  imports: [
    CommonModule,
    GeneralStockReportRoutingModule
  ]
})
export class GeneralStockReportModule { }
