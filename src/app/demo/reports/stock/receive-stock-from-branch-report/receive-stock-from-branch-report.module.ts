import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveStockFromBranchReportRoutingModule } from './receive-stock-from-branch-report-routing.module';
import { ReceiveStockFromBranchReportComponent } from './receive-stock-from-branch-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [ReceiveStockFromBranchReportComponent],
  imports: [
    CommonModule,
    ReceiveStockFromBranchReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class ReceiveStockFromBranchReportModule { }
