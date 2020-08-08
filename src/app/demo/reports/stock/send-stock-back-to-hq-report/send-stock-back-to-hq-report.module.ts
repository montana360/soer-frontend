import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendStockBackToHqReportRoutingModule } from './send-stock-back-to-hq-report-routing.module';
import { SendStockBackToHqReportComponent } from './send-stock-back-to-hq-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [SendStockBackToHqReportComponent],
  imports: [
    CommonModule,
    SendStockBackToHqReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class SendStockBackToHqReportModule { }
