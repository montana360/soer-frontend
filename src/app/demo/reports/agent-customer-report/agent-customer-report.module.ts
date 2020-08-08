import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentCustomerReportRoutingModule } from './agent-customer-report-routing.module';
import { AgentCustomerReportComponent } from './agent-customer-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';



@NgModule({
  declarations: [AgentCustomerReportComponent],
  imports: [
    CommonModule,
    AgentCustomerReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule,
  ],
})
export class AgentCustomerReportModule {}
