import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockBranchReceiveRoutingModule } from './stock-branch-receive-routing.module';
import { StockBranchReceiveComponent } from './stock-branch-receive.component';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [StockBranchReceiveComponent],
  imports: [
    CommonModule,
    StockBranchReceiveRoutingModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule,
    SharedModule
  ]
})
export class StockBranchReceiveModule { }
