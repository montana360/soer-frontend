import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockOtherBranchRoutingModule } from './stock-other-branch-routing.module';
import { StockOtherBranchComponent } from './stock-other-branch.component';


@NgModule({
  declarations: [StockOtherBranchComponent],
  imports: [
    CommonModule,
    StockOtherBranchRoutingModule
  ]
})
export class StockOtherBranchModule { }
