import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospDepartmentRoutingModule } from './hosp-department-routing.module';
import { HospDepartmentComponent } from './hosp-department.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [HospDepartmentComponent],
  imports: [
    CommonModule,
    HospDepartmentRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class HospDepartmentModule { }
