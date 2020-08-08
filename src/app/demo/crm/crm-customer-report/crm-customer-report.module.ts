import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmCustomerReportRoutingModule } from './crm-customer-report-routing.module';
import { CrmCustomerReportComponent } from './crm-customer-report.component';


@NgModule({
  declarations: [CrmCustomerReportComponent],
  imports: [
    CommonModule,
    CrmCustomerReportRoutingModule
  ]
})
export class CrmCustomerReportModule { }
