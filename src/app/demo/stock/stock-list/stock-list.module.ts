import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockListRoutingModule } from './stock-list-routing.module';
import { StockListComponent } from './stock-list.component';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [StockListComponent],
  imports: [
    CommonModule,
    StockListRoutingModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule,
    SharedModule
  ]
})
export class StockListModule { }
