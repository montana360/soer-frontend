import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospNurseRoutingModule } from './hosp-nurse-routing.module';
import { HospNurseComponent } from './hosp-nurse.component';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [HospNurseComponent],
  imports: [
    CommonModule,
    HospNurseRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class HospNurseModule { }
