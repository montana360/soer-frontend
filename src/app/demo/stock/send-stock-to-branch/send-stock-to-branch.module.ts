import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendStockToBranchRoutingModule } from './send-stock-to-branch-routing.module';
import { SendStockToBranchComponent } from './send-stock-to-branch.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [SendStockToBranchComponent],
  imports: [
    CommonModule,
    SendStockToBranchRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class SendStockToBranchModule { }
