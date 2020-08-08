import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsCashReportRoutingModule } from './agents-cash-report-routing.module';
import { AgentsCashReportComponent } from './agents-cash-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [AgentsCashReportComponent],
  imports: [
    CommonModule,
    AgentsCashReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule,
  ],
})
export class AgentsCashReportModule {}
