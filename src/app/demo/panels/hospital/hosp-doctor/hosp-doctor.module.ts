import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospDoctorRoutingModule } from './hosp-doctor-routing.module';
import { HospDoctorComponent } from './hosp-doctor.component';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [HospDoctorComponent],
  imports: [
    CommonModule,
    HospDoctorRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class HospDoctorModule { }
