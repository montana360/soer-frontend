import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchGoodsRoutingModule } from './branch-goods-routing.module';
import { BranchGoodsComponent } from './branch-goods.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [BranchGoodsComponent],
  imports: [
    CommonModule,
    BranchGoodsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class BranchGoodsModule { }
