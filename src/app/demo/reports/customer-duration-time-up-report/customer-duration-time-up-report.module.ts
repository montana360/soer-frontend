import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDurationTimeUpReportRoutingModule } from './customer-duration-time-up-report-routing.module';
import { CustomerDurationTimeUpReportComponent } from './customer-duration-time-up-report.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [CustomerDurationTimeUpReportComponent],
  imports: [
    CommonModule,
    CustomerDurationTimeUpReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule,
  ]
})
export class CustomerDurationTimeUpReportModule { }
