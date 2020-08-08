import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisLeaveRoutingModule } from './sis-leave-routing.module';
import { SisLeaveComponent } from './sis-leave.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [SisLeaveComponent],
  imports: [
    CommonModule,
    SisLeaveRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SisLeaveModule { }
