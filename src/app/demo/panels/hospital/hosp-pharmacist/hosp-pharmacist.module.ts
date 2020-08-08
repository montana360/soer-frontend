import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospPharmacistRoutingModule } from './hosp-pharmacist-routing.module';
import { HospPharmacistComponent } from './hosp-pharmacist.component';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [HospPharmacistComponent],
  imports: [
    CommonModule,
    HospPharmacistRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class HospPharmacistModule { }
