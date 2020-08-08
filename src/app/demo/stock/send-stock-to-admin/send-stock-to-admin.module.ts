import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendStockToAdminRoutingModule } from './send-stock-to-admin-routing.module';
import { SendStockToAdminComponent } from './send-stock-to-admin.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [SendStockToAdminComponent],
  imports: [
    CommonModule,
    SendStockToAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TagInputModule,
    TinymceModule,
    NgbTabsetModule
  ]
})
export class SendStockToAdminModule {}
