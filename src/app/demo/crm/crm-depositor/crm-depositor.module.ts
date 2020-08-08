import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmDepositorRoutingModule } from './crm-depositor-routing.module';
import { CrmDepositorComponent } from './crm-depositor.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [CrmDepositorComponent],
  imports: [
    CommonModule,
    CrmDepositorRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CrmDepositorModule { }
