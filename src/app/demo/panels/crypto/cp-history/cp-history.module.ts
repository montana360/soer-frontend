import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpHistoryRoutingModule } from './cp-history-routing.module';
import { CpHistoryComponent } from './cp-history.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [CpHistoryComponent],
  imports: [
    CommonModule,
    CpHistoryRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CpHistoryModule { }
