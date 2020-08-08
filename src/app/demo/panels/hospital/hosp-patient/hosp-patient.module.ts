import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospPatientRoutingModule } from './hosp-patient-routing.module';
import { HospPatientComponent } from './hosp-patient.component';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [HospPatientComponent],
  imports: [
    CommonModule,
    HospPatientRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class HospPatientModule { }
