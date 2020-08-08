import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcCustomersRoutingModule } from './pc-customers-routing.module';
import { PcCustomersComponent } from './pc-customers.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [PcCustomersComponent],
  imports: [
    CommonModule,
    PcCustomersRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class PcCustomersModule { }
