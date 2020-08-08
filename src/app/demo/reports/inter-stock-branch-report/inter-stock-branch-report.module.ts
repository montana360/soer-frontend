import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterStockBranchReportRoutingModule } from './inter-stock-branch-report-routing.module';
import { InterStockBranchReportComponent } from './inter-stock-branch-report.component';



@NgModule({
  declarations: [InterStockBranchReportComponent],
  imports: [
    CommonModule,
    InterStockBranchReportRoutingModule,
    
  ]
})
export class InterStockBranchReportModule { }
