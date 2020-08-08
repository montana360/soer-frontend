import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashReportRoutingModule } from './cash-report-routing.module';
import { CashReportComponent } from './cash-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';



@NgModule({
  declarations: [CashReportComponent],
  imports: [
    CommonModule,
    CashReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule,
  ],
})
export class CashReportModule {}
