import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBranchRoutingModule } from './user-branch-routing.module';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { UserBranchComponent } from './user-branch.component';

@NgModule({
  declarations: [UserBranchComponent],
  imports: [
    CommonModule,
    UserBranchRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class UserBranchModule { }
