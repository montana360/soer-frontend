import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpTradingRoutingModule } from './cp-trading-routing.module';
import { CpTradingComponent } from './cp-trading.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [CpTradingComponent],
  imports: [
    CommonModule,
    CpTradingRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CpTradingModule { }
