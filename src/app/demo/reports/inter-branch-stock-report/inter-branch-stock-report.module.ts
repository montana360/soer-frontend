import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterBranchStockReportRoutingModule } from './inter-branch-stock-report-routing.module';
import { InterBranchStockReportComponent } from './inter-branch-stock-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [InterBranchStockReportComponent],
  imports: [
    CommonModule,
    InterBranchStockReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class InterBranchStockReportModule { }
