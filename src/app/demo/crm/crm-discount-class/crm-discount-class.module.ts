import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmDiscountClassRoutingModule } from './crm-discount-class-routing.module';
import { CrmDiscountClassComponent } from './crm-discount-class.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [CrmDiscountClassComponent],
  imports: [
    CommonModule,
    CrmDiscountClassRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class CrmDiscountClassModule {}
