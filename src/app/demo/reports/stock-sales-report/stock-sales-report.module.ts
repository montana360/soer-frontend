import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockSalesReportRoutingModule } from './stock-sales-report-routing.module';
import { StockSalesReportComponent } from './stock-sales-report.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [StockSalesReportComponent],
  imports: [
    CommonModule,
    StockSalesReportRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule

  ]
})
export class StockSalesReportModule { }
