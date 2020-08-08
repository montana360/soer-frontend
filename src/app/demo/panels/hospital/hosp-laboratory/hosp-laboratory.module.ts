import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospLaboratoryRoutingModule } from './hosp-laboratory-routing.module';
import { HospLaboratoryComponent } from './hosp-laboratory.component';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [HospLaboratoryComponent],
  imports: [
    CommonModule,
    HospLaboratoryRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule
  ]
})
export class HospLaboratoryModule { }
