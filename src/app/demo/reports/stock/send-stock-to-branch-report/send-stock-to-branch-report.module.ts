import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendStockToBranchReportRoutingModule } from './send-stock-to-branch-report-routing.module';
import { SendStockToBranchReportComponent } from './send-stock-to-branch-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [SendStockToBranchReportComponent],
  imports: [
    CommonModule,
    SendStockToBranchReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class SendStockToBranchReportModule { }
