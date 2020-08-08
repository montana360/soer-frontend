import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmSupplierRoutingModule } from './crm-supplier-routing.module';
import { CrmSupplierComponent } from './crm-supplier.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [CrmSupplierComponent],
  imports: [
    CommonModule,
    CrmSupplierRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class CrmSupplierModule {}
