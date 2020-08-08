import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IstaReturnsRoutingModule } from './ista-returns-routing.module';
import { IstaReturnsComponent } from './ista-returns.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [IstaReturnsComponent],
  imports: [
    CommonModule,
    IstaReturnsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class IstaReturnsModule { }
